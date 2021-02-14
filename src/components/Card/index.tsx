import React from 'react';
import { Hits } from '../../interfaces/ApiResponse';
import { CardImg } from './styles';

export const Card = (props: Hits) => {
  return (
    <div>
      <CardImg src={props.webformatURL} />
    </div>
  );
};
