import React from 'react';
import { Container, SearchButton, SearchInput } from './styles';

export const Search = () => {
  return (
    <Container>
      <SearchInput />
      <SearchButton>Buscar</SearchButton>
    </Container>
  );
};
