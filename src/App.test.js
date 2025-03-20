import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/TECH 2102 Enterprise Computing - Assignment 2 by Sandra Vera/i);
  expect(linkElement).toBeInTheDocument();
});
