import React, {useEffect, useState} from "react";
import "./style.css";
import List from "./List";
import Form from "./Form";

function Contacts () {
    const [contacts, setContacts] = useState([
        {
            fullname: "Ali",
            phone_number: 1234
        },
        {
            fullname: "Veli",
            phone_number: 5678
        },
        {
            fullname: "Ayşe",
            phone_number: 9012
        },
        {
            fullname: "Fatma",
            phone_number: 3456
        },
    ]);

    useEffect(() => {
        console.log(contacts)
    }, [contacts])

    return (
        <div id={"container"}>
            <h1>Contacts</h1>
            <List contacts={contacts}/>
            <p>Total contacts: {contacts.length}</p>
            <Form addContact={setContacts} contacts={contacts}/>
        </div>
    );
}


export default Contacts