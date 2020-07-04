import React from "react";
import ReactLoading from 'react-loading';
import styled from "styled-components";

const Container = styled.div`
  position:fixed;
  z-index:1000;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background-color:rgba(0,0,0,0.3);
  display:flex;
  justify-content:center;
  align-items:center;
`

export default function Loading({type, color}){
  return (
    <Container>
      <ReactLoading
          type={type}
          color={color}
          height={'10%'}
          width={'10%'}
        />
    </Container>
  )
}

