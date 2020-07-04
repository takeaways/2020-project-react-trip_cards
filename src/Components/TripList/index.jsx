import React from "react";
import * as Styles from "./styles"
import Trip from './Trip';


export default function TripList({trips=[]}){
  return (
      <Styles.Container>
        <ul>
        {trips.map(trip=><li key={trip.id}><Trip trip={trip}/></li>)}
        </ul>
      </Styles.Container>
  )
}