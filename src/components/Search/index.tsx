import React, { useContext, useState } from 'react';
import { Container, SearchButton, SearchInput } from './styles';
import { getImage } from '../../../src/api/index';
import { DataContext } from '../../context/Data';

export const Search = () => {
  const { setData } = useContext(DataContext);

  const [inputValue, setinputValue] = useState('');

  const handleSearch = async () => {
    const { data } = await getImage(inputValue);
    setData(data?.hits);
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
