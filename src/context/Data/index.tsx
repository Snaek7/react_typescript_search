import React, { createContext, useState, FC } from 'react';
import { getImage } from '../../api';
import { ApiResponse, DataContextState } from '../../types/types';

const contextDefaultValues: DataContextState = {
  data: {
    total: 0,
    totalHits: 0,
    hits: [],
  },
  setData: () => {},
  handleData: () => {},
  pageNumber: 1,
  setpageNumber: () => {},
  inputValue: '',
  setInputValue: () => {},
};

export const DataContext = createContext<DataContextState>(
  contextDefaultValues
);

const DataProvider: FC = ({ children }) => {
  const [data, setData] = useState<ApiResponse>({
    total: 0,
    totalHits: 0,
    hits: [],
  });

  const [pageNumber, setpageNumber] = useState(1);
  const [inputValue, setInputValue] = useState('');

  const handleData = async (inputValue: string, page: number) => {
    let { data } = await getImage(inputValue, page);
    setData(data);
  };

  return (
    <DataContext.Provider
      value={{
        data,
        setData,
        handleData,
        pageNumber,
        setpageNumber,
        inputValue,
        setInputValue,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
