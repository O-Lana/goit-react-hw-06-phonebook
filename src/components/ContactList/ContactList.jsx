// import PropTypes from 'prop-types';
import { Container, Item } from './ContactList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { removeContact, getContacts } from 'redux/itemsSlice';
import { getFilterValue } from 'redux/filterSlice';

export const ContactList = () => {
    const contacts = useSelector(getContacts);
    const dispatch = useDispatch();

    const filter = useSelector(getFilterValue);

    // const getContact = () => {
        const normalizedFilter = filter.toLowerCase();
    
        const filteredContacts = contacts.filter((contact) =>
          contact.name.toLowerCase().includes(normalizedFilter)
        );
    //   };
    
    //   const visibleContact = getContact();

    return (
        <Container>
            <ul>
                {filteredContacts.map(({ id, name, number }) => (
                    <Item key={id}>
                        {name}: {number}
                        <button type="button" onClick={() => dispatch(removeContact(id))}>Delete</button>
                    </Item>
                ))}
                </ul>
        </Container>
    );
};

// ContactList.propTypes = {
//     contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
//     onDeleteContact: PropTypes.func.isRequired,
// }