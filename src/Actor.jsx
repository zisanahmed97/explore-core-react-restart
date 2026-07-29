import React from 'react';

const Actor = ({actor}) => {
    return (
        <div>
            <p>name:{actor.name}</p>
            <p>Star Type:{actor.heroType}</p>
        </div>
    );
};

export default Actor;