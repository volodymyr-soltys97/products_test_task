import React from 'react';
import Image from 'next/image';
import classes from './styles.module.scss';

const TopMenu: React.FC = () => {
  return (
    <header className={classes.header}>
      <div className={classes.header__container}>
        <div className={classes.logo_search}>
          <Image src="logo.jpg" alt="Logo Products" />
        </div>
      </div>
    </header>
  );
};

export default TopMenu;
