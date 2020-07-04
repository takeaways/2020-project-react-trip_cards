const initialState = {
  loading:false
}

const loadingReducer = (state = initialState, action) =>{
  if(action.type==="setLoading"){
    return {
      ...state,
      loading:true
    }
  }
  if(action.type==="stopLoading"){
    return {
      ...state,
      loading:false
    }
  }
  return state
}

export default loadingReducer