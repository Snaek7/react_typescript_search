import React from 'react';
import { Hits } from '../../types/types';
import {
  CardContainer,
  CardImg,
  ImgWrapper,
  Info,
  InfosWrapper,
  Title,
} from './styles';

type CardProps = {
  imageData: Hits;
};

const Card = (props: CardProps) => {
  return (
    <CardContainer>
      <ImgWrapper>
        <CardImg src={props.imageData.webformatURL} />
      </ImgWrapper>
      <InfosWrapper>
        <Title>{'Photo by ' + props.imageData.user}</Title>
        <Info>
          Views: <span>{props.imageData.views}</span>
        </Info>
        <Info>
          Likes: <span>{props.imageData.likes}</span>
        </Info>
        <Info>
          Downloads: <span>{props.imageData.downloads}</span>
        </Info>
      </InfosWrapper>
    </CardContainer>
  );
};

export default Card;
