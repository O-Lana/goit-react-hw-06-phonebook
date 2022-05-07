import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getContacts } from "redux/itemsSlice";
import { addContact } from 'redux/itemsSlice';
import { nanoid } from 'nanoid';
import { Form, Input, Button } from './ContactForm.styled';

export function ContactForm() {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const contacts = useSelector(getContacts);
    const dispatch = useDispatch();


    const handleInputChange = event => {
        const { name, value } = event.target;

        switch (name) {
            case 'name':
                setName(value);
                break;
            
            case 'number':
                setNumber(value);
                break;
            default: return;
        }

    };

    const formSubmitContact = ({ name, number }) => {
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

    const handleSubmit = event => {
        event.preventDefault();

        formSubmitContact({name, number});
        setName('');
        setNumber('');
    };  


        return (
            <Form onSubmit={handleSubmit}>
                <label>
                    Name
                    <Input
                    type="text"
                    name="name"
                    value={name}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    onChange={handleInputChange}
                    />
                </label>
                <label>
                    Number
                    <Input
                    type="tel"
                    name="number"
                    value={number}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    onChange={handleInputChange }
                    />
                </label>
                <Button type="submit">Add contact</Button>
            </Form>
        )
}
