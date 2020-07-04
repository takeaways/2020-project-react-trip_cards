const initialState = {
  scroll:0,
  current:'',
  sort:'default' //high, low, default

}

const headerReducer = (state= initialState, action)=>{
  if(action.type==="setCurrent"){
    return {
      ...state,
      current:action.payload.current
    }
  }
  if(action.type==="setSort"){
    return{
      ...state,
      sort:action.payload.sort
    }
  }
  return state
}

export default headerReducer;