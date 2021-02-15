import React, { useContext } from 'react';
import Card from '../../components/Card';
import { Search } from '../../components/Search';
import { DataContext } from '../../context/Data';
import { Container, ImagesWrapper } from './styles';

const Home = () => {
  const { data } = useContext(DataContext);

  return (
    <Container>
      <Search />
      <ImagesWrapper>
        {data.map((image, index) => (
          <Card key={index} imageData={image} />
        ))}
      </ImagesWrapper>
    </Container>
  );
};

export default Home;
