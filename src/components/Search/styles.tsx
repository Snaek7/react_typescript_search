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
  padding: 0px 10px;
  font-size: 14px;
`;

export const SearchButton = styled.button`
  height: 35px;
  background: var(--color-primary);
  color: #fff;
  border: 1px solid black;
  border-left: none;
  outline: none;
  padding: 0px 10px;
  font-size: 14px;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;
