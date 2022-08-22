// import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
    const [dataBackend, setDataBackend] = useState({});

    useEffect(() => {
        fetch("/api")
            .then((res) => res.json())
            .then((data) => setDataBackend(data));
    }, []);

    return (
        <div className="App">
            {typeof dataBackend.users === "undefined" ? (
                <p> Loading...</p>
            ) : (
                dataBackend.users.map((person, index) => (
                    <p key={index}>
                        {person.name}, {person.age}
                    </p>
                ))
            )}
        </div>
    );
}

export default App;
