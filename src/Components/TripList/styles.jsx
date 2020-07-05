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

  & .no-items{
    width:100%;
    height:100%;

    display:flex;
    justify-content:center;
    align-items:center;
    & strong{
      font-size:var(--font-medium);
      color: #848c94;
      display:inline-block;
      border-radius:15px;
      width:450px;
      height:120px;
      background-color:#F9F9F9;
      text-align:center;
      line-height:120px;
    }
    

    grid-column: 1/5;
    @media (max-width: 1024px) {
      grid-column: 1 / 4;
    }
    @media (max-width: 768px) {
      grid-column: 1 / 3;
    }
   
  }
`;
