/* eslint-disable quote-props */
/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import classes from '../../styles/pages.module.scss';
import ordersData from '../../data/orders.json';
import ComingItem from '../../components/ComingItem';

const Coming = () => {
  const [orders, setOrders] = useState([ordersData]);

  // console.log(ordersData);
  // console.log(orders);

  useEffect(() => setOrders(() => [...orders]), []);

  return (
    <div className={classes.container}>
      Coming Page
      {orders && orders.map(order => order.map(item => (
        <ComingItem key={item.id} orders={item} />
      )))}
    </div>
  );
};

export default Coming;
