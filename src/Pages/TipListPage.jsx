import React from "react";
import Navbar from '../Components/Navbar';
import TripListContainer from '../Comtainers/TripListContainer';
import PageContainer from '../Modules/Styled/PageContainer';


export default function TripListPage(){
  return (
    <>
    <Navbar/>
    <PageContainer>
    <TripListContainer/>
    </PageContainer>
    </>
  )
}