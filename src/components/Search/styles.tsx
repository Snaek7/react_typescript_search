import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  display: flex;
  max-width: 500px;
`;

export const SearchInput = styled.input`
  height: 35px;
  border: 1px solid black;
  border-right: none;
  width: 100%;
  &:focus {
    outline: none;
  }
`;

export const SearchButton = styled.button`
  height: 35px;
  background: #4a919e;
  color: #fff;
  border: 1px solid black;
  border-left: none;
  outline: none;
  padding: 0px 10px;
`;
