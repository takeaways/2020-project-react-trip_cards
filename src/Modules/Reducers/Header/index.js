const initialState = {
  scroll: 0,
  current: '',
  sort: 'default', //high, low, default
  scrollLoactions: [],
};

const headerReducer = (state = initialState, action) => {
  if (action.type === 'setCurrent') {
    const scroll = state.scrollLoactions.findIndex(
      (item) => item.path === action.payload.current
    );
    if (scroll < 0) {
      state.scrollLoactions.push({
        path: action.payload.current,
      });
    }
    return {
      ...state,
      current: action.payload.current,
    };
  }
  if (action.type === 'setSort') {
    return {
      ...state,
      sort: action.payload.sort,
    };
  }
  if (action.type === 'setScroll') {
    const target = state.scrollLoactions.find(
      (item) => item.path === state.current
    );
    target.scroll = action.payload.scroll;
    return {
      ...state,
    };
  }
  return state;
};

export default headerReducer;
