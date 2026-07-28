import React from 'react';
import './App.css'

const Singer = ({singer}) => {
    return (
        <div className='person'>
            <p>Name:{singer.name}</p>
            <p>Age:{singer.age}</p>
        </div>
    );
};

export default Singer;