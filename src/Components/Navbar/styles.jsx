import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  flex-direction: column;
  z-index: 10;
  right: 0;
  left: 0;

  background-color: var(--white);
  height: 100px;

  display: flex;
  justify-content: center;
  align-items: center;

  & .nav__list--item--label {
    font-size:var(--font-regular);
    color: rgba(0, 0, 0, 0.5);
  }

  & .current {
    border-bottom:3px solid #2B96EC;
    & .nav__list--item--label {
      color: #152005;
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
    width: 100px;
    height: 35px;
    text-align: center;
    margin-left: 10px;
    line-height: 35px;
  }
  & .nav__list--item:hover {
    display: inline-block;
    border-bottom:3px solid rgba(43, 150, 236,0.6);
  }

  & .nav__list--item--link {
    color: rgb(132, 140, 148);
    text-decoration: none;
    display: block;
  }
`;
