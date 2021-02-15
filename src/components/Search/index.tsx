import React, { useContext, useState } from 'react';
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
      <SearchButton onClick={() => handleData(inputValue, 1)}>
        Buscar
      </SearchButton>
    </Container>
  );
};
