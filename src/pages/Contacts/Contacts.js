import { ContactList } from "../../components/ContactList/ContactList";
import ContactForm from "../../components/ContactForm/ContactForm";
import Filter from "../../components/Filter/Filter";

import css from './Contacts.module.css';
import { ProgressBar } from 'react-loader-spinner';
import { RiContactsBook2Fill } from 'react-icons/ri';
import { useDispatch, useSelector } from "react-redux";
import { selectLoading } from "redux/contacts/selectors";
import { useEffect } from "react";
import { fetchContacts } from "redux/contacts/operations";


const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return <div className={css.container}>
    <div>
      <Filter/>
      <ContactForm/>
    </div>
    <div>
      <h2 className={css.title}>
        Contacts
        <RiContactsBook2Fill className={css.icon} />
      </h2>
      <div> {isLoading && <ProgressBar
          height="80"
          width="80"
          ariaLabel="progress-bar-loading"
          wrapperStyle={{}}
          wrapperClass="progress-bar-wrapper"
          borderColor = '#F4442E'
          barColor = '#51E5FF'
        />}
      </div>
      <ContactList/>
    </div>
  </div>
}

export default Contacts;