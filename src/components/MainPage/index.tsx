import React from 'react';
import TopMenu from '../TopMenu';
import MainMenu from '../MainMenu';
import classes from './styles.module.scss';

const MainPage: React.FC = () => {
  return (
    <>
      <TopMenu />
      <div className={classes.main}>
        <MainMenu />
      </div>
    </>
  );
};

export default MainPage;
