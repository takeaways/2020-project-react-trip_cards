import React from "react";
import * as Styles from './styles';
import { useDispatch } from 'react-redux';

import {setSort} from "../../../Modules/Reducers/Header/actions"

const SORT_LIST = [

  { id: 0, sort: 'default', label:"기본"},
  { id: 1, sort: 'low', label:"낮은 가격순"},
  { id: 2, sort: 'high', label:"높은 가격순"},
]

export default function Sort(){
  const dispatch = useDispatch();
  const handleSelect = (event) =>{
    dispatch(setSort(event.target.value));
  }
  return (
    <Styles.Container>
      <select className="sort__select" onChange={handleSelect}>
        {SORT_LIST.map(option=><option key={option.id} value={option.sort}>{option.label}</option>)}
      </select>
    </Styles.Container>
  )
}