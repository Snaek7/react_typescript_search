import { render, waitFor, fireEvent } from '@testing-library/react';
import { Search } from './index';

describe('Tests for seach component button', () => {
  it('Should be in the document ', async () => {
    const handleData = jest.fn();
    const { getByTestId } = render(<Search />);
    const fieldNode = await waitFor(() => getByTestId('search-button'));

    console.log(fireEvent.click(fieldNode));

    // expect(handleData()).toBe(true);

    expect(fieldNode).toBeInTheDocument();
  });
});
