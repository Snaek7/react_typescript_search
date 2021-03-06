import React, { useContext } from 'react';
import Card from '../../components/Card';
import { Header } from '../../components/Header';
import Pagination from '../../components/Pagination';
import { Search } from '../../components/Search';
import { DataContext } from '../../context/Data';
import { Container, ImagesWrapper } from './styles';

const Home = () => {
  const { data } = useContext(DataContext);

  return (
    <Container>
      <Header />
      <Search />
      <ImagesWrapper>
        {data?.hits.map((image, index) => (
          <Card key={index} imageData={image} />
        ))}
      </ImagesWrapper>
      <Pagination limit={20} total={data.totalHits} offset={1} />
    </Container>
  );
};

export default Home;
