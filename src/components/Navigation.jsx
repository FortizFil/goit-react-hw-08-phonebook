import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './navigation.module.css';

const Navigation = () => (
  <nav>
    <NavLink to="/" exact className={s.link}>
      Главная
    </NavLink>

    <NavLink to="/contacts" exact className={s.link}>
      Контакты
    </NavLink>
  </nav>
);

export default Navigation;
