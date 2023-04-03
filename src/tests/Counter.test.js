// import necessary react testing library helpers here
// import the Counter component here

import { type } from "@testing-library/user-event/dist/type";
import Counter from "../components/Counter";
import { render, screen, fireEvent } from "@testing-library/react";
import { act } from "react-test-renderer";

describe('Counter', () => {
  beforeEach(() => {
    // Render the Counter component here
    render(<Counter />);
  });

  test('renders counter message', () => {
    // get the counter message element in h2 tag
    const counterMessage = screen.getByRole('heading', { name: 'Counter' });
    // assert that the counter message element is in the document
    expect(counterMessage).toBeInTheDocument();
  });

  test('should render initial count with value of 0', () => {
    const count = screen.getByTestId('count');
    expect(count).toBeInTheDocument();
    expect(count).toHaveTextContent('0');
  });

  test('clicking + increments the count', () => {
    // increment the count
    // get the count element
    const incrementButton = screen.getByRole('button', { name: '+' });
    const spy = jest.spyOn(incrementButton, 'click');
    act(() => {
      fireEvent.click(incrementButton);
    });
    // assert that the count is incremented
    const count = screen.getByTestId('count');
    expect(count).toHaveTextContent('1');
  });

  test('clicking - decrements the count', () => {
    // decrement the count
    // get the count element
    const decrementButton = screen.getByRole('button', { name: '-' });
    const spy = jest.spyOn(decrementButton, 'click');
    act(() => {
      fireEvent.click(decrementButton);
    });
    // assert that the count is decremented
    const count = screen.getByTestId('count');
    expect(count).toHaveTextContent('-1');
  });
});
