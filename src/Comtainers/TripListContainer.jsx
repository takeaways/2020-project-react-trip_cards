import React from "react";
import { useSelector } from 'react-redux';
import TripList from '../Components/TripList';

export default function TripListContainer(){
  const {scroll, current, sort} = useSelector(state => state.header)
  const {trips} = useSelector(state=>state.list);
  return (<TripList trips={trips}/>)
}


