import React from 'react';
import Navbar from '../Components/Navbar';
import TripListContainer from '../Containers/TripListContainer';
import PageContainer from '../Modules/Styled/PageContainer';

export default function TripListPage() {
  return (
    <>
      <Navbar />
      <PageContainer>
        <TripListContainer />
      </PageContainer>
    </>
  );
}
