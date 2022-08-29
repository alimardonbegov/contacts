import React, { useEffect, useState, useMemo } from "react";
import CreateForm from "./components/CreateForm";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CardForm from "./components/CardForm";
import { request } from "./utils/request";

function App() {
    const [input, setInput] = useState({ name: "", text: "", marked: false });
    const [contactList, setContactList] = useState([]);
    const [isDisabled, setIsDisabled] = useState(true);

    useMemo(() => {
        input.name.length > 0 && input.text.length > 0 && setIsDisabled(false);
        (input.name.length === 0 || input.text.length === 0) && setIsDisabled(true);
    }, [input]);

    useEffect(() => {
        fetch("http://localhost:5000/api")
            .then((res) => res.json())
            .then((data) => setContactList(data));
    }, []);

    function handleChange(e) {
        const { name, value } = e;
        setInput((prevValue) => {
            return { ...prevValue, [name]: value };
        });
    }

    async function createContact(e) {
        e.preventDefault();
        const newContact = await request("http://localhost:5000/api", "POST", input);
        setContactList([...contactList, newContact]);
        setInput({ name: "", text: "", marked: false });
        setIsDisabled(true);
    }

    async function deleteContact(id) {
        await request(`http://localhost:5000/api/${id}`, "DELETE", null);
        setContactList(contactList.filter((contact) => id !== contact.id));
    }

    async function markContact(id) {
        const currentContact = contactList.find((c) => c.id === id);
        const updatedContact = await request(`http://localhost:5000/api/${id}`, "PUT", {
            ...currentContact,
            marked: !currentContact.marked,
        });
        currentContact.marked = updatedContact.marked;
        setInput({ name: "", text: "", marked: false });
    }

    return (
        <div className="App">
            <h1> Contact List</h1>
            <CreateForm
                name={input.name}
                text={input.text}
                disabled={isDisabled}
                onChange={handleChange}
                onClick={(e) => createContact(e)}
            />

            {contactList.length !== 0 ? (
                contactList.map((contact, index) => (
                    <CardForm
                        key={index}
                        title={contact.name}
                        text={contact.text}
                        id={contact.id}
                        marked={contact.marked}
                        mark={markContact}
                        delete={deleteContact}
                    />
                ))
            ) : (
                <h2> No contacts here yet </h2>
            )}
        </div>
    );
}

export default App;
