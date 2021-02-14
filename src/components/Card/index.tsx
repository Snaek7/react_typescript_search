import React from 'react';
import { Hits } from '../../types/types';
import { CardContainer, CardImg } from './styles';

type CardProps = {
  imageData: Hits;
};

const Card = (props: CardProps) => {
  return (
    <CardContainer>
      <CardImg src={props.imageData.webformatURL} />
    </CardContainer>
  );
};

export default Card;
