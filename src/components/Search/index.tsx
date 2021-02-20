import React, { useContext } from 'react';
import { Container, SearchButton, SearchInput } from './styles';
import { DataContext } from '../../context/Data';

export const Search = () => {
  const { handleData, setInputValue, inputValue } = useContext(DataContext);

  return (
    <Container>
      <SearchInput
        value={inputValue}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setInputValue(event.target.value)
        }
      />
      <SearchButton
        data-testid='search-button'
        aria-label='search-button'
        disabled={!inputValue}
        onClick={() => {
          if (!inputValue) {
            return;
          }
          handleData(inputValue, 1);
        }}
      >
        Buscar
      </SearchButton>
    </Container>
  );
};
