import styled from 'styled-components';

export const ButtonsContainer = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: center;
`;

export const Button = styled.button`
  padding: 0px 10px;
  margin: 0px 5px;
  background: #5a809e;
  color: #fff;
  border: 1px solid #5a809e;
  border-radius: 2px;
  height: 29px;
  outline: none;
  cursor: pointer;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &.pagination__item--active {
    border: 2px solid #f57d7c;
  }
`;
