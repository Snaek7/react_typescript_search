import styled from 'styled-components';

export const ButtonsContainer = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: center;

  @media (max-width: 550px) {
    flex-wrap: wrap;
  }
`;

export const Button = styled.button`
  padding: 0px 10px;
  margin: 0px 5px;
  background: var(--color-primary);
  color: #fff;
  border: 1px solid var(--color-primary);
  border-radius: 2px;
  height: 29px;
  outline: none;
  cursor: pointer;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &.pagination__item--active {
    border: 2px solid var(--color-secondary);
  }

  @media (max-width: 550px) {
    margin-top: 10px;
  }
`;
