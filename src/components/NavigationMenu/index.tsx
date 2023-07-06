import React from 'react';
import Link from 'next/link';
import classes from './styles.module.scss';
import profile from '../../images/profile.jpeg';
import settings from '../../images/settings.png';
import { RoutesLinks } from '../../types/menu';

const NavigationMenu: React.FC = () => {
  const items = [
    {
      id: 1,
      title: 'Прихід',
      link: RoutesLinks.COMING,
    },
    {
      id: 2,
      title: 'Групи',
      link: RoutesLinks.GROUPS,
    },
    {
      id: 3,
      title: 'Продукти',
      link: RoutesLinks.PRODUCTS,
    },
    {
      id: 4,
      title: 'Користувачі',
      link: RoutesLinks.USERS,
    },
    {
      id: 5,
      title: 'Настройки',
      link: RoutesLinks.SETTINGS,
    },
  ];

  return (
    <div className={classes.menu}>
      <div className={classes.profileImage}>
        <img
          className={classes.profile}
          src={profile}
          alt="Profile"
        />
        <img
          className={classes.settings}
          src={settings}
          alt="Settings"
        />
      </div>
      <nav className={classes.nav}>
        <ul className={classes.navList}>
          {items.map((item) => (
            <li className={classes.navItem} key={item.id}>
              <Link className={classes.navLink} href={item.link}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default NavigationMenu;
