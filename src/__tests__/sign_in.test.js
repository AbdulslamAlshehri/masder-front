import { render, screen } from '@testing-library/react';
import sign_in from '../components/sign_in'
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

test('History is rendered', () => {
  render(<sign_in/>);
  const linkElement = screen.getByText(/sign in/i);
  expect(linkElement).toBeInTheDocument();
});