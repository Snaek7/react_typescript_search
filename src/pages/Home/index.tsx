import React, { useContext } from 'react';
import Card from '../../components/Card';
import { Search } from '../../components/Search';
import { DataContext } from '../../context/Data';

const Home = () => {
  const { data } = useContext(DataContext);

  return (
    <div>
      <Search />
      {data.map((image) => (
        <Card imageData={image} />
      ))}
    </div>
  );
};

export default Home;
