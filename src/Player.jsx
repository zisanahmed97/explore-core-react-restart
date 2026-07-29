import React from 'react';

const Player = ({player}) => {
    return (
        <div>
            <h2>Name:{player.name}</h2>
            <h5>title:{player.title}</h5>
        </div>
    );
};

export default Player;