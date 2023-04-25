import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import SearchPage from "./search-page";

describe('SearchPage', () => {
  it('renders the search form', () => {
    // ARRANGE
    render(<SearchPage />, { wrapper: MemoryRouter });

    //ACT

    //ASSERT
    expect(screen.getByPlaceholderText('Enter movie or series name')).toBeTruthy();
    expect(screen.getByRole('button', { name: 'Search' })).toBeTruthy();
  });
});

