import PropTypes from 'prop-types';
import { useDeleteContactMutation } from '../../redux/contactsApi/contactSlice';
import s from './contactItem.module.css';

const ContactItem = ({ name, number, id }) => {
  const [deleteContact] = useDeleteContactMutation();

  return (
    <li className={s.contact__item}>
      <span className={s.name}>{name}:</span>
      {number}
      <button type="button" className={s.btn} id={id} onClick={() => deleteContact(id)}>
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
};

export default ContactItem;
