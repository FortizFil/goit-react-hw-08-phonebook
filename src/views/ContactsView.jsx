import ContactForm from '../components/ContactForm/contactForm';
import Filter from '../components/Filter/filter';
import ContactsList from '../components/ContactsList/contactsList';

const ContactsView = () => {
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />

      <>
        <h2>Contacts</h2>
        <Filter />
        <ContactsList />
      </>
    </div>
  );
};

export default ContactsView;
