import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Enterprise Computing Assignment 2 by Sandra M Vera G/i);
  expect(linkElement).toBeInTheDocument();
});
