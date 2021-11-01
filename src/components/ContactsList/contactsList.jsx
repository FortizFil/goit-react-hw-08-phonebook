import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import ContactItem from '../ContactItem/contactItem';
import { contactsSelectors } from '../../redux/contacts';
import { useFetchContactQuery } from '../../redux/contactsApi/contactSlice';
import s from './contactlist.module.css';

const ContactsList = () => {
  const { data: contacts } = useFetchContactQuery();
  const filter = useSelector(contactsSelectors.filter);
  const trimFilter = filter.trim() === '';

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  };

  return (
    <div className={s.container}>
      <ul>
        {trimFilter
          ? contacts &&
            contacts.map(({ id, name, number }) => (
              <ContactItem key={id} id={id} name={name} number={number} />
            ))
          : getVisibleContacts().map(({ id, name, number }) => (
              <ContactItem key={id} id={id} name={name} number={number} />
            ))}
      </ul>
    </div>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.array,
  onDeleteContact: PropTypes.func,
};

export default ContactsList;
