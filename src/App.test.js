// using the @testing-library/react package to perform a simple test on your App component. The test checks whether the "learn react" link is rendered in the component. It renders the App component, searches for an element containing the text "learn react" (using a case-insensitive regular expression), and then asserts that this element is present in the document.

import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
