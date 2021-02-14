import React from 'react';
import { Hits } from '../../types/types';
import { CardContainer, CardImg, ImgWrapper, InfosWrapper } from './styles';

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
        <h3>{'Photo by ' + props.imageData.user}</h3>
        <h4>Views: {props.imageData.views}</h4>
        <h4>Likes: {props.imageData.likes}</h4>
        <h4>Downloads: {props.imageData.downloads}</h4>
      </InfosWrapper>
    </CardContainer>
  );
};

export default Card;
