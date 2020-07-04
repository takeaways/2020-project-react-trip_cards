export const setWish = ({ id, wish }) => ({
  type: 'setWish',
  payload: {
    id,
    wish,
  },
});

export const setSort = ({ sort }) => ({
  type: 'setSort',
  payload: {
    sort,
  },
});

export const setInitialTrips = ({ trips }) => ({
  type: 'setInitialTrips',
  payload: {
    trips,
  },
});

export const loadInitialTrips = () => ({
  type: 'loadInitialTrips',
  payload: {},
});

export const setMoreTrips = ({ page, trips }) => ({
  type: 'setMoreTrips',
  payload: {
    page: page + 1,
    trips,
  },
});

export const loadMoreTrips = ({ page }) => ({
  type: 'loadMoreTrips',
  payload: {
    page,
  },
});
