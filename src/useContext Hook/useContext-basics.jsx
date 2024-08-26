/* eslint-disable react/prop-types */
import React, { useState, useContext } from 'react';
import { data } from '../data/data';

const PersonContext = React.createContext();

const UseContextBasics = () => {
    const [people, setPeople] = useState(data);

    const removePerson = (id) => {
        setPeople((people) => people.filter((person) => person.id !== id));
    };

    return (
        <PersonContext.Provider value={{ removePerson, people }}>
            <div className="p-6 bg-gray-100 min-h-screen">
                <h3 className="text-2xl font-semibold mb-4">Context API / useContext</h3>
                <List />
            </div>
        </PersonContext.Provider>
    );
};

const List = () => {
    const { people } = useContext(PersonContext);

    return (
        <div className="space-y-4">
            {people.map((person) => (
                <SinglePerson key={person.id} {...person} />
            ))}
        </div>
    );
};

const SinglePerson = ({ id, firstName }) => {
    const { removePerson } = useContext(PersonContext);

    return (
        <div className="flex items-center justify-between p-4 bg-white shadow-md rounded-lg">
            <h4 className="text-lg font-medium">{firstName}</h4>
            <button onClick={() => removePerson(id)} className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition">Remove</button>
        </div>
    );
};

export default UseContextBasics;
