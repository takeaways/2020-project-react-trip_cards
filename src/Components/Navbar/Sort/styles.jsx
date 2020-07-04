import styled from "styled-components";

export const Container = styled.div`
  
  width:100%;
  display:flex;
  justify-content:flex-end;
  padding-right:30px;
  margin-top:5px;

  @media (max-width: 768px) {
    justify-content:center;
    padding:0;
    margin-top:5px;
  }


  & .sort__select{
    width:100px;
    border-radius:5px;
  } 
  



`