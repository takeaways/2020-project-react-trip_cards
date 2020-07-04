import React from 'react';
import * as Styles from './styles';
import { MdStar, MdFavoriteBorder, MdFavorite } from 'react-icons/md';

function Starts({ reviews, point }) {
  return (
    <div
      styles={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {Array(point)
        .fill(0)
        .map((n, i) => (
          <MdStar key={i} style={{ color: '#51abf3' }} />
        ))}
      <span style={{ color: '#848c94' }}> {reviews}</span>
    </div>
  );
}

export default function Trip({ trip, handleClickWish }) {
  return (
    <Styles.Container>
      <Styles.Thumbnail img={trip.img}>
        {trip.wish ? (
          <span>
            <MdFavorite
              onClick={() => handleClickWish({ id: trip.id, wish: false })}
            />
          </span>
        ) : (
          <span>
            <MdFavoriteBorder
              onClick={() => handleClickWish({ id: trip.id, wish: true })}
            />
          </span>
        )}
      </Styles.Thumbnail>
      <Styles.Contents>
        <Styles.Catetory>{trip.category.join(' ・ ')}</Styles.Catetory>
        <Styles.Title>{trip.title}</Styles.Title>
        <Styles.Footer>
          <Styles.Point>
            {Starts({ point: trip.point, reviews: trip.reviews })}
          </Styles.Point>
          <Styles.Price>
            <span style={{ color: '#848c94' }}>
              <strong>
                {trip.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
              </strong>{' '}
              / 1박
            </span>
          </Styles.Price>
        </Styles.Footer>
      </Styles.Contents>
    </Styles.Container>
  );
}
