// import "./App.css";
import React, { useEffect, useState } from "react";
import CreateForm from "./components/CreateForm";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CardForm from "./components/CardForm";

function App() {
    const [input, setInput] = useState({ name: "", text: "" });
    const [contactList, setContactList] = useState([]);

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
        setInput({ name: "", text: "" });
    }

    async function deleteContact(id) {
        console.log(id);
        await request(`http://localhost:5000/api/${id}`, "DELETE", null);
        setContactList(contactList.filter((contact) => id !== contact.id));
    }
    console.log(contactList);
    async function request(url, method = "GET", data = null) {
        try {
            const headers = {};
            let body;

            if (data) {
                headers["Content-Type"] = "application/json";
                body = JSON.stringify(data);
            }

            const response = await fetch(url, {
                method,
                headers,
                body,
            });
            return await response.json();
        } catch (e) {
            console.log(e.message);
        }
    }

    useEffect(() => {
        fetch("http://localhost:5000/api")
            .then((res) => res.json())
            .then((data) => setContactList(data));
    }, []);

    return (
        <div className="App">
            <CreateForm
                name={input.name}
                text={input.text}
                onChange={handleChange}
                onClick={(e) => createContact(e)}
            />

            {contactList.map((contact, index) => (
                <CardForm
                    key={index}
                    title={contact.name}
                    text={contact.text}
                    id={contact.id}
                    marked={contact.marked}
                    delete={deleteContact}
                />
            ))}
        </div>
    );
}

export default App;

// const [dataBackend, setDataBackend] = useState({});

// useEffect(() => {
//     fetch("/api")
//         .then((res) => res.json())
//         .then((data) => setDataBackend(data));
// }, []);

// {typeof dataBackend.users === "undefined" ? (
//     <p> Loading...</p>
// ) : (
//     dataBackend.users.map((person, index) => (
//         <CardForm key={index} title={person.name} text={person.age} />
//     ))
// )}
