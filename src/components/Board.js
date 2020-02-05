import React from 'react';
import Square from './Square';

const style = {
    border: '5px solid darkblue',
    borderRadius: '10px',
    width: '500px',
    height: '500px',
    margin: '0 auto',
    display: 'grid',
    gridTemplate: 'repeat(3, 1fr) / repeat(3, 1fr)'
};

const Board = ({ squares, winLocations, onClick }) => (
    <div style={style}>
        {squares.map((square, i) => (
            <Square 
                key={i} // TODO key should not be index
                value={square}
                isWinLocation={winLocations.includes(i)}
                onClick={() => onClick(i)}
            />
        ))}
    </div>
);

export default Board;