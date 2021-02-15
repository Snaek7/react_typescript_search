import styled from 'styled-components';

export const Container = styled.div`
  padding: 16px;
`;

export const ImagesWrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  padding: 16px;
`;
