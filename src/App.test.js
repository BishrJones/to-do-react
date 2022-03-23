import { render, screen } from '@testing-library/react';
import MyList from './MyList.js';

test('renders learn react link', () => {
  render(<MyList />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
