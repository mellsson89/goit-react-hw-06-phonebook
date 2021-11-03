import React, {useState} from "react";
import {v4 as uuidv4} from "uuid";
import style from './styles/contactForm.module.scss';
import {addContact} from '../../redux/actions';
import {useDispatch} from "react-redux";

export default function ContactForm({onSave}) {

    const [name,setName]=useState('');
    const [number,setNumber]=useState('')

    const dispatch=useDispatch();
    const onSubmit=(value) => dispatch(addContact(value));

    const handleChange = (e) => {
        const {name,value}=e.currentTarget;

      switch (name) {
          case 'name' :
              setName(value)
              return;
          case 'number' :
              setNumber(value)
              return;
          default:return;
      }
    }



   const handleSubmit =(e) => {
        e.preventDefault();

        const contact = {
            id:uuidv4(),
            name,
            number
        }

        onSubmit(contact);
        onSave();
        resetForm();

    }

    const resetForm =() => {
        setName('');
        setNumber('');
    }


    return (
        <form onSubmit={handleSubmit} className={style.form}>
            <label className={style.formLabel}>
                Name
                <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={handleChange}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                    required
                    className={style.formInput}
                />
            </label>
            <label className={style.formLabel}>
                Number
                <input
                    type="tel"
                    name="number"
                    value={number}
                    onChange={handleChange}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                    required
                    className={style.formInput}
                />
            </label>
            <button type='submit'>Add contact</button>
        </form>

    )
}

