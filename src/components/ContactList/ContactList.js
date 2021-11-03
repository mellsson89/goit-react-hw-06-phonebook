import React from "react";
import style from './styles/contactList.module.scss';
import {deleteContact} from '../../redux/actions';
import {useDispatch, useSelector} from "react-redux";
import {getVisibleContacts} from "./getVisibleContacts";
import PropTypes from 'prop-types';

export default function ContactList()  {
    const contacts=useSelector(({contacts:{filter,items}}) => getVisibleContacts(filter,items));
    const dispatch=useDispatch();
    const onDelete= id => dispatch(deleteContact(id));
    return (
        <ul>
            {contacts.map(({id,name,number})=> (

                <li key={id} className={style.contactList_item}>{name}: {number} <button onClick={() => onDelete(id)}>Delete</button></li>

            ))}
        </ul>
    )
}

ContactList.propTypes = {
    contacts:PropTypes.arrayOf(PropTypes.shape({
        id:PropTypes.string.isRequired,
        name:PropTypes.string.isRequired,
        number:PropTypes.string.isRequired
    }))
}