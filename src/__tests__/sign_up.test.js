import { render, screen } from '@testing-library/react';
import sign_up from '../components/Sign_up'
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

test('History is rendered', () => {
  render(<sign_up/>);
  const linkElement = screen.getByText(/sign up/i);
  expect(linkElement).toBeInTheDocument();
});