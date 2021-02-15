import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  display: flex;
  max-width: 500px;
`;

export const SearchInput = styled.input`
  height: 30px;
  border: 1px solid black;
  border-right: none;
  width: 100%;
  &:focus {
    outline: none;
  }
`;

export const SearchButton = styled.button`
  height: 30px;
  background: #4a919e;
  color: #fff;
  border: 1px solid black;
  border-left: none;
  outline: none;
`;
