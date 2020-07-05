import styled from 'styled-components';

export const Container = styled.div`
  width: 250px;
  height: 311px;
  border: 1px solid #d3d8dd;
  border-radius:4px;

  transition: transform .5s;

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: opacity 2s cubic-bezier(.165, .84, .44, 1);
    box-shadow: 0 8px 17px 0 rgba(0, 0, 0, .2), 0 6px 20px 0 rgba(0, 0, 0, .15);
    content: '';
    opacity: 0;
    z-index: -1;
  }

  &:hover,
  &:focus {
    cursor: pointer;
    transform: scale3d(1.006, 1.006, 1);
    &::after {
      opacity: 1;
    }
  }

  & strong{
    font-weight:var(--weight-bold)
  }

`;

export const Thumbnail = styled.div`
  background-image: ${(props) => `url(${props.img})`};
  background-size: cover;
  height: 166px;
  position: relative;

  border-top-left-radius: 4px;
  border-top-right-radius: 4px;

  & span {
    color: white;
    font-size: var(--font-medium);
    font-weight:var(--weight-regular);
    position: absolute;
    left: calc(250px - 35px);
    top:5px;
    
  }
  & span:hover {
    cursor: pointer;
    color: white;
    opacity: 0.8;
  }
`;
export const Contents = styled.div`
  height: 139px;
  padding: 10px 16px 16px 16px;
  background-color: #ffffff;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
`;
export const Catetory = styled.h3`
  color: #848c94;
  font-size: 12px;
  max-width: 100%;
  overflow: hidden;
`;

export const Title = styled.h1`
  color: rgba(0, 0, 0, 0.8);
  font-size: 15px;
  width: 218px;
  height: 30px;
  display:inline-block;

  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  -webkit-line-clamp: 2;
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Point = styled.span`
  display:block;
`;
export const Price = styled.strong`
  display:block;
`;
