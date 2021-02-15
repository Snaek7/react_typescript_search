import styled from 'styled-components';

export const CardContainer = styled.div`
  border-radius: 4px;
  max-height: 500px;

  overflow: hidden;
  box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%);
`;

export const CardImg = styled.img`
  border-radius: 4px;
  width: 100%;
`;

export const ImgWrapper = styled.div`
  height: 200px;
  overflow: hidden;
`;

export const InfosWrapper = styled.div`
  padding: 10px;
`;

export const Title = styled.h3`
  color: #f57d7c;
  margin-bottom: 8px;
`;

export const Info = styled.h4`
  margin-bottom: 8px;

  span {
    font-weight: lighter;
  }
`;

export const Tag = styled.p`
  background-color: #4a919e;
  color: #fff;
  margin-right: 5px;
  border-radius: 2px;
  padding: 4px;
  font-size: 14px;
  margin-top: 5px;
  display: inline-block;
`;
