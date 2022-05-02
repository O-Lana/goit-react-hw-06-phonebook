//  import { useState, useEffect } from 'react';
import { GlobalStyle } from '../GlobalStyled/GlobalStyle';
import ContactForm from './ContactForm/ContactForm';
import { Container, Title, Subtitle } from './App.styled';
import { ContactList } from './ContactList/ContactList';
import { nanoid } from 'nanoid';
// import { Filter } from './Filter/Filter';

import { useSelector, useDispatch } from 'react-redux';
import { addContact, deleteContact } from 'redux/itemsSlice';

// TODO
// - сделать reducer - набор методов которыми мы будем использовать deleteContact, changeFilter;
// - filter ???
// -изменить методы и пропсы




export default function App() { 
  const contacts = useSelector(state => state.contacts.items);
  const dispatch = useDispatch();

  // const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   const contacts = localStorage.getItem('contacts');
  //   const parsedContacts = JSON.parse(contacts);

  //   if (parsedContacts) {
  //     setContacts(parsedContacts);
  //   };
  // }, []);


  // useEffect(() => {
  //   window.localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts])

  const addContacts = ({ name, number }) => {
      const normalizedName = name.toLowerCase();
      const isName = contacts.find(
        (contact) => contact.name.toLowerCase() === normalizedName
      );
        
      if (isName) {
        return alert(`${name} is already in contacts.`);
      }
 
      const contact = {
        id: nanoid(6),
        name,
        number,
      };

      dispatch(addContact(contact));
  };

  // const changeFilter = e => {
  //   setFilter(e.currentTarget.value);
  // };

  // const getContact = () => {
  //   const normalizedFilter = filter.toLowerCase();

  //   return contacts.filter((contact) =>
  //     contact.name.toLowerCase().includes(normalizedFilter)
  //   );
  // };

  //????????????????
  // const deleteContact = contactId => {
  //   // setContacts(contacts.filter(contact => contact.id !== contactId));
  //   dispatch(deleteContact(contactId));
  // };

  // const visibleContact = getContact();
  

    return (
      <Container>
        <GlobalStyle />
        <Title>Phonebook</Title>
        <ContactForm onSubmit={addContacts}/>

        <Subtitle>Contacts</Subtitle>
        {/* <Filter value={filter} onChange={changeFilter} /> */}
        <ContactList
          // contacts={visibleContact}
          // onDeleteContact={deleteContact}
          // onDeleteContact={dispatch(deleteContact())}
        />
      </Container>
    );
  }

  // return (
  //     <Subtitle>Contacts</Subtitle>
  //     <Filter value={filter} onChange={changeFilter} />
  //     <ContactList
  //       contacts={visibleContact}
  //       onDeleteContact={deleteContact}
  //     />
