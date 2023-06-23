import React from 'react';
import classes from './styles.module.scss';
// import profile from '../../images/profile.jpeg';
// import { Menu } from '../../types/menu';

const MainMenu: React.FC = () => {
  // const items: Menu[] = [
  //   {
  //     id: 1,
  //     title: '',
  //     link: '',
  //   },
  //   {
  //     id: 2,
  //     title: '',
  //     link: '',
  //   },
  //   {
  //     id: 3,
  //     title: '',
  //     link: '',
  //   },
  //   {
  //     id: 4,
  //     title: '',
  //     link: '',
  //   },
  //   {
  //     id: 5,
  //     title: '',
  //     link: '',
  //   },
  // ];

  return (
    <div className={classes.menu}>
      <div className={classes.profileImage}>
        {/* <img
          className={classes.profile}
          src={profile}
          alt="Profile photo"
        /> */}
      </div>
    </div>
  );
};

export default MainMenu;
