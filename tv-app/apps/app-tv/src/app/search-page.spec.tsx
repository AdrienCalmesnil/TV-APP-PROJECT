import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import SearchPage from "./search-page";

describe('SearchPage', () => {
  it('renders the search form', () => {
    render(<SearchPage />, { wrapper: MemoryRouter });
    const button = screen.queryByText('Search');
    expect(button).toBeTruthy();
  });
});

