import { ContactList } from "../../components/ContactList/ContactList";
import ContactForm from "../../components/ContactForm/ContactForm";
import Filter from "../../components/Filter/Filter";

import css from './Contacts.module.css';
import { RiContactsBook2Fill } from 'react-icons/ri';


const Contacts = () => {
  return <div className={css.container}>
    <div>
      {/* <h2 className="title">Phonebook</h2> */}
      <Filter/>
      <ContactForm/>
    </div>
    <div>
      <h2 className={css.title}>
        Contacts
        <RiContactsBook2Fill className={css.icon} />
      </h2>
      <ContactList/>
    </div>
  </div>
}

export default Contacts;