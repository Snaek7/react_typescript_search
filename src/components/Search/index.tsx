import React, { useState } from 'react';
import { Container, SearchButton, SearchInput } from './styles';
import { getImage } from '../../../src/api/index';

export const Search = () => {
  const [inputValue, setinputValue] = useState('');

  const handleSearch = async () => {
    const { data } = await getImage(inputValue);
  };

  return (
    <Container>
      <SearchInput
        value={inputValue}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setinputValue(event.target.value)
        }
      />
      <SearchButton onClick={handleSearch}>Buscar</SearchButton>
    </Container>
  );
};
