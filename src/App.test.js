import { render, screen } from '@testing-library/react';
import App from './App';
import DashboardComponent from './Components/DashboardComponent';  // Check the path and case sensitivity


test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
