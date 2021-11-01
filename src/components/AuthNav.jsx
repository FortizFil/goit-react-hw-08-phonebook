import { NavLink } from 'react-router-dom';
import s from './authnav.module.css';

export default function AuthNav() {
  return (
    <div>
      <NavLink to="/register" exact className={s.link}>
        Регистрация
      </NavLink>
      <NavLink to="/login" exact className={s.link}>
        Логин
      </NavLink>
    </div>
  );
}
