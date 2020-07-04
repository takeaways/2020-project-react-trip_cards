import styled from 'styled-components';

export const Container = styled.div`
  & .trip__list {
    display: grid;
    width: 1050px;
    margin: 0 auto;
    align-items: center;
    grid-auto-rows: 330px;
    grid-template-rows: repeat(1, 330px);
    grid-template-columns: repeat(4, 1fr);
    @media (max-width: 1024px) {
      grid-template-columns: repeat(3, 1fr);
      width: 800px;
    }
    @media (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
      width: 550px;
    }
  }
  & .trip__list--item {
    margin: 0 auto;
  }
`;
