const initialState = {
  page: 0,
  trips: [
    {
      id: 1,
      img:
        'https://d2ur7st6jjikze.cloudfront.net/share/thumbnail/thumbnail-1.jpg',
      category: ['한인민박', '제주도'],
      title: '[동쪽/펜션] 북촌리:멤버 #독채 #자쿠지 #바베큐',
      price: 120000,
      point: 3,
      reviews: 13,
      wish: true,
    },
  ],
};

const listReducer = (state = initialState, action) => {
  if (action.type === 'setWish') {
    const { id, wish } = action.payload;
    let trips = [...state.trips];
    const index = trips.findIndex((trip) => trip.id === id);
    const trip = trips[index];
    trip.wish = wish;
    trips.splice(index, trip);
    return {
      ...state,
      trips,
    };
  }

  if (action.type === 'setSort') {
    const { sort } = action.payload;
    let trips = [];
    if (sort === 'high') {
      trips = state.trips.sort((a, b) => b.price - a.price);
    } else if (sort === 'low') {
      trips = state.trips.sort((a, b) => a.price - b.price);
    } else {
      trips = state.trips.sort((a, b) => a.id - b.id);
    }
    return {
      ...state,
      trips,
    };
  }

  if (action.type === 'setInitialTrips') {
    const { trips } = action.payload;
    return {
      ...state,
      trips,
      page: 1,
    };
  }

  if (action.type === 'setMoreTrips') {
    const { page, trips } = action.payload;
    state.trips = [...state.trips, ...trips];
    return {
      ...state,
      page,
    };
  }

  return state;
};

export default listReducer;
