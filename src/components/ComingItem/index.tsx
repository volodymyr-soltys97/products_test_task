/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { Order } from '../../types/orders';
import classes from './styles.module.scss';

interface Props {
  orders: Order;
}

const ComingItem: React.FC<Props> = ({ orders }) => {
  const {
    date, description, id, products, title,
  } = orders;

  return (
    <>
      <div className={classes.container}>
        <h2 className={classes.title}>{title}</h2>
        <div className={classes.products}>
          <p className={classes.products__count}>{products.length}</p>
          <p className={classes.products__name}>Продукта</p>
        </div>
        <div className={classes.date}>{date}</div>
        <div>
          {description}
          {' '}
          {id}
        </div>
      </div>
    </>
  );
};

export default ComingItem;
