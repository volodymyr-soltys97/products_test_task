import React from 'react';
import TopMenu from '../TopMenu';
import MainMenu from '../NavigationMenu';
import classes from './styles.module.scss';
// import Coming from '../../pages/coming';

const MainPage: React.FC = () => {
  return (
    <>
      <TopMenu />
      <div className={classes.main}>
        <MainMenu />
        {/* <Coming /> */}
      </div>
    </>
  );
};

export default MainPage;
