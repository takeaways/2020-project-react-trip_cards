import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TripList from '../Components/TripList';
import { loadInitialTrips } from '../Modules/Reducers/List/actions';
import Loading from '../Modules/Styled/Loading';

export default function TripListContainer() {
  const dispatch = useDispatch();
  const { trips } = useSelector((state) => state.list);
  const {loading} = useSelector(state=>state.loading);


  useEffect(() => {
    dispatch(loadInitialTrips());
  }, [dispatch]);
  return (
    <>
      <TripList trips={trips} />
      {loading && <Loading type={'spokes'} color={'#ffffff'} />}
    </>
  )
}
