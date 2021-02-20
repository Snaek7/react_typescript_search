import React from 'react';
import { Hits } from '../../types/types';
import {
  CardContainer,
  CardImg,
  ImgWrapper,
  Info,
  InfosWrapper,
  Tag,
  Title,
} from './styles';

type CardProps = {
  imageData: Hits;
};

const Card = ({ imageData }: CardProps) => {
  const tags = imageData.tags.split(',');

  return (
    <CardContainer>
      <ImgWrapper>
        <CardImg src={imageData.webformatURL} />
      </ImgWrapper>
      <InfosWrapper>
        <Title>{'Photo by ' + imageData.user}</Title>
        <Info>
          Views: <span>{imageData.views}</span>
        </Info>
        <Info>
          Likes: <span>{imageData.likes}</span>
        </Info>
        <Info>
          Downloads: <span>{imageData.downloads}</span>
        </Info>

        {tags.map((tag, index) => (
          <Tag key={index}>#{tag.trim() + '  '}</Tag>
        ))}
      </InfosWrapper>
    </CardContainer>
  );
};

export default Card;
