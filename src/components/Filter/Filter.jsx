import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addValue } from 'redux/filterSlice';
// import PropTypes from 'prop-types';
import { Label, Input } from './Filter.styled';


export const Filter = () => {
    const dispatch = useDispatch();
    const value = useSelector(state => state.contacts.filter);

    const handleChangeFilter = event => {
        dispatch(addValue(event.currentTarget.value));
    };


    return (
        <div>
            <Label>
            Find contacts by name
            <Input type="text" value={value} onChange={handleChangeFilter} />
            </Label>
        </div>
    );
}

// Filter.protoType = {
//     value: PropTypes.string.isRequired,
//     onChange: PropTypes.func.isRequired,
// };