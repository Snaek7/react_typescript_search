import React, { useContext } from 'react';
import Card from '../../components/Card';
import { Search } from '../../components/Search';
import { DataContext } from '../../context/Data';
import { ImagesWrapper } from './styles';

const Home = () => {
  const { data } = useContext(DataContext);

  return (
    <div>
      <Search />
      <ImagesWrapper>
        {data.map((image) => (
          <Card imageData={image} />
        ))}
      </ImagesWrapper>
    </div>
  );
};

export default Home;
