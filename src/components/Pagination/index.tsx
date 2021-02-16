import React, { useContext, useState } from 'react';
import { DataContext } from '../../context/Data';
import { Button, ButtonsContainer } from './styles';

type PaginationProps = {
  limit: number;
  total: number;
  offset: number;
};

const MAX_ITEMS = 9;

const MAX_LEFT = (MAX_ITEMS - 1) / 2;

export const Pagination = ({ limit, total }: PaginationProps) => {
  const { inputValue, handleData, data } = useContext(DataContext);

  const [offset, setOffset] = useState(1);
  const current = offset ? offset / limit + 1 : 1;
  const pages = Math.ceil(total / limit);
  const first = Math.max(current - MAX_LEFT, 1);

  function onPageChange(page: any) {
    setOffset((page - 1) * limit);
  }

  return (
    <ButtonsContainer>
      <Button
        hidden={data.total === 0}
        onClick={() => {
          handleData(inputValue, current - 1);
          onPageChange(current - 1);
        }}
        disabled={current === 1 || offset === 1}
      >
        Anterior
      </Button>
      {Array.from({ length: Math.min(MAX_ITEMS, pages) })
        .map((_, index) => {
          return index + first;
        })
        .map((page) => (
          <Button
            key={page}
            hidden={page > pages}
            onClick={() => {
              onPageChange(page);
              handleData(inputValue, page);
            }}
            className={page === current ? 'pagination__item--active' : ''}
          >
            {page}
          </Button>
        ))}

      <Button
        hidden={data.total === 0}
        onClick={() => {
          console.log(data.hits == []);
          handleData(inputValue, current + 1);
          onPageChange(current + 1);
        }}
        disabled={current === pages}
      >
        Próxima
      </Button>
    </ButtonsContainer>
  );
};

export default Pagination;
