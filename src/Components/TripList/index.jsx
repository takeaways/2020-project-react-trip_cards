import React, { useCallback, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { debounce } from 'lodash';

import * as Styles from './styles';
import Trip from './Trip';

import { setWish, loadMoreTrips } from '../../Modules/Reducers/List/actions';
import { setScroll } from '../../Modules/Reducers/Header/actions';

export default function TripList({ trips = [] }) {
  const dispatch = useDispatch();
  const refContainer = useRef();
  const { current, scrollLoactions } = useSelector((state) => state.header);
  const { page } = useSelector((state) => state.list);
  const handleClickWish = useCallback(
    (data) => {
      dispatch(setWish(data));
    },
    [dispatch]
  );

  const handleScroll = debounce((e) => {
    dispatch(setScroll(window.scrollY));
    const viewHeight = refContainer.current.getBoundingClientRect().height;
    if (viewHeight - window.scrollY < 900) {
      if (trips.length < 10) {
        return;
      }
      dispatch(loadMoreTrips({ page }));
    }
  }, 300);

  useEffect(() => {
    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  useEffect(() => {
    const target = scrollLoactions.find(
      (item) => item.path === window.location.pathname
    );
    if (target.scroll >= 0) {
      window.scrollTo(0, target.scroll);
    }
  }, [scrollLoactions, current]);

  return (
    <Styles.Container ref={refContainer}>
      <ul className='trip__list'>
        {trips.map((trip) => {
          if (current.includes('/wish')) {
            return (
              trip.wish && (
                <li className='trip__list--item' key={trip.id}>
                  <Trip trip={trip} handleClickWish={handleClickWish} />
                </li>
              )
            );
          } else {
            return (
              <li className='trip__list--item' key={trip.id}>
                <Trip trip={trip} handleClickWish={handleClickWish} />
              </li>
            );
          }
        })}
      </ul>
    </Styles.Container>
  );
}

// const home = document.querySelector(".home__container");
//     const homeHeight = home.getBoundingClientRect().height
//     document.addEventListener('scroll', () => {
//         const op = 1 - window.scrollY / homeHeight;
//         home.style.opacity = op;
//     });
