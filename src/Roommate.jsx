import React from 'react';
import './App.css'

const Roommate = ({roommate}) => {
    return (
        <div className='person'>
            <h1>name:{roommate.name}</h1>
            <p>type:{roommate.type}</p>
        </div>
    );
};

export default Roommate;