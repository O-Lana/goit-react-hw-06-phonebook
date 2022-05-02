// import PropTypes from 'prop-types';
import { Container, Item } from './ContactList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/itemsSlice';

export const ContactList = () => {
    const contacts = useSelector(state => state.contacts.items);
    const dispatch = useDispatch();
    console.log(contacts);

    return (
        <Container>
            <ul>
                {contacts.map(({ id, name, number }) => (
                    <Item key={id}>
                        {name}: {number}
                        <button type="button" onClick={() => dispatch(deleteContact(id))}>Delete</button>
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