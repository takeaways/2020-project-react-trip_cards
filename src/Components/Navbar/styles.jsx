import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  flex-direction: column;
  z-index: 10;
  right: 0;
  left: 0;

  background-color: var(--royal-blue);
  height: 100px;

  display: flex;
  justify-content: center;
  align-items: center;

  & .nav__list--item--label {
    color: rgba(0, 0, 0, 0.5);
  }

  & .current {
    opacity: 0.8;
    box-shadow: 10px 5px 5px var(--black-pearl);
    & .nav__list--item--label {
      color: white;
    }
  }

  & .nav__list {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  & .nav__list--item {
    display: inline-block;
    background-color: var(--light-blue);
    width: 100px;
    height: 35px;
    text-align: center;
    margin-left: 10px;
    line-height: 35px;
    border-radius: 5px;
  }
  & .nav__list--item--link {
    color: white;
    text-decoration: none;
    display: block;
  }
`;
