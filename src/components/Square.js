import React from 'react';

const style = {
    background: 'lightblue',
    border: '5px solid darkblue',
    fontSize: '50px',
    fontWeight: '800',
    cursor: 'pointer',
    outline: 'none'
};

const emphasis = {
    ...style,
    color: 'red'
};

const Square = ({ value, isWinLocation, onClick }) => {
    const chooseStyle = isWinLocation ? emphasis : style;
    return (
        <button style={chooseStyle} onClick={onClick}>
            {value}
        </button>
    )
};

export default Square;
