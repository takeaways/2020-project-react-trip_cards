/**
 * 로등 컴포넌트
 * @version: 1.0
 * @author : JGI (jgi92@naver.com | wkdrjsdlf2@gamil)
 */

import React from "react";
import styled from "styled-components"

const Container = styled.div`
  position:fixed;
  top:0;
  left:0;
  width:100vw;
  height:100vh;
  background-color:var(--royal-blue);  
  opacity:0.8;

  display:flex;
  justify-content:center;
  align-items:center;

  & strong{
    color:var(--white)
  }
`

export default function Loading(){
  return (
    <Container>
      <strong>Loading.....</strong>
    </Container>
  )
}