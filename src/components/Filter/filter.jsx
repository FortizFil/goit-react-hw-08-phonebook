import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import s from './filter.module.css';
import contactsActions from '../../redux/contacts/contacts-actions';

const Filter = () => {
  const dispatch = useDispatch();

  return (
    <div className={s.container}>
      <h3 className={s.filter__name}>Find contacts by name</h3>
      <label className={s.filter__label}>
        <input
          className={s.filter__input}
          type="text"
          onChange={e => dispatch(contactsActions.changeFilter(e.target.value))}
        />
      </label>
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Filter;
