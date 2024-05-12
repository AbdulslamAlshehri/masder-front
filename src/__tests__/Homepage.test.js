import { render, screen } from '@testing-library/react';
import Homepage from '../components/Homepage';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

test('History is rendered', () => {
  render(<Homepage/>);
  const linkElement = screen.getByText(/Check if your/i);
  expect(linkElement).toBeInTheDocument();
});