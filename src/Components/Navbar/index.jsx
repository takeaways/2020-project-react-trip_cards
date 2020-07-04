import React, { useEffect } from 'react';
import { withRouter, Link } from 'react-router-dom';
import * as Styles from './styles';
import { useDispatch } from 'react-redux';
import { setCurrent } from '../../Modules/Reducers/Header/actions';
import Sort from './Sort';

const ROUTE_LIST = [
  { id: 1, path: '/trips', label: '상품 리스트' },
  { id: 2, path: '/wishes', label: '위시 리스트' },
];

function Navbar({ match }) {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(setCurrent(match.url))
  },[dispatch, match.url])
  return (
    <Styles.Container>
      <header className='sr-only'>
        <h1>사이트 네비게이션</h1>
      </header>
      <ul className='nav__list'>
        {ROUTE_LIST.map((link) => {
          return match.url === link.path ? (
            <li key={link.id} className='nav__list--item current'>
              <Link className='nav__list--item--link' to={link.path}>
                <span>{link.label}</span>
              </Link>
            </li>
          ) : (
            <li key={link.id} className='nav__list--item'>
              <Link className='nav__list--item--link' to={link.path}>
                <span>{link.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
      <Sort/>
    </Styles.Container>
  );
}

export default withRouter(Navbar);
