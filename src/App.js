import React, {useState} from "react";
import Filter from "./components/Filter";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import Modal from "./components/Modal";


export default function App(){

    const [showModal,setShowModal]=useState(false);


   const toggleModal =() => {
       setShowModal(!showModal);
    }

        return (
            <div>
                <button type='button' onClick={toggleModal}>Add contacts</button>
                <h1>Phonebook</h1>
                <h2>Contacts</h2>
                <Filter/>
                <ContactList/>
                {showModal && <Modal onClose={toggleModal}><ContactForm onSave={toggleModal}/></Modal>}
            </div>
        )
    }


