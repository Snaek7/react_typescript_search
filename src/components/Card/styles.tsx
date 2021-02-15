import styled from 'styled-components';

export const CardContainer = styled.div`
  border-radius: 4px;
  max-height: 500px;

  overflow: hidden;
  box-shadow: 0 10px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19) !important;
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
