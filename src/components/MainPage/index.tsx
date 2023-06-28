import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TopMenu from '../TopMenu';
import MainMenu from '../NavigationMenu';
import classes from './styles.module.scss';
import Coming from '../../pages/coming';
import { RoutesLinks } from '../../types/menu';
import Groups from '../../pages/groups';
import Products from '../../pages/products';
import Settings from '../../pages/settings';
import Users from '../../pages/users';

const MainPage: React.FC = () => {
  return (
    <Router>
      <TopMenu />
      <div className={classes.main}>
        <MainMenu />
        <div className={classes.routes}>
          <Routes>
            <Route path={RoutesLinks.COMING} element={<Coming />} />
            <Route path={RoutesLinks.GROUPS} element={<Groups />} />
            <Route path={RoutesLinks.PRODUCTS} element={<Products />} />
            <Route path={RoutesLinks.SETTINGS} element={<Settings />} />
            <Route path={RoutesLinks.USERS} element={<Users />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default MainPage;
