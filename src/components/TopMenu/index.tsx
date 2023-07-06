/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
// import Image from 'next/image';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.jpg';
import classes from './styles.module.scss';
import { formatDate, formatTime } from '../../helpers/functions';

const TopMenu: React.FC = () => {
  const [currentDate, setCurrentDate] = useState<string | number>('');

  useEffect(() => {
    const timeNow = Date.now();

    setCurrentDate(timeNow);
  }, []);

  return (
    <header className={classes.header}>
      <div className={classes.header__container}>
        <div className={classes.logo_search}>
          <Link to="/">
            <img className={classes.logo} src={logo} alt="" />
          </Link>
          <input className={classes.search} type="search" placeholder="Search" />
        </div>
        <div className={classes.date__container}>
          <p className={classes.day__name}>Today</p>
          <div className={classes.timeContainer}>
            <p className={classes.dayTime}>{formatDate(currentDate)}</p>
            <img src="" alt="" />
            <p className={classes.dayTime}>{formatTime(currentDate)}</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopMenu;
