import React, { createContext, useState, FC } from 'react';
import { DataContextState, Hits } from '../../types/types';

const contextDefaultValues: DataContextState = {
  data: [],
  setData: () => {},
};

export const DataContext = createContext<DataContextState>(
  contextDefaultValues
);

const DataProvider: FC = ({ children }) => {
  const [data, setData] = useState<Hits[]>([]);

  return (
    <DataContext.Provider
      value={{
        data,
        setData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
