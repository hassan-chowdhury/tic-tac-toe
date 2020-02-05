import React, { useState } from 'react';
import { calculateWinner } from '../helpers';
import Board from './Board';

const style = {
    width: '200px',
    margin: '20px auto'
};

const Game = () => {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [stepNumber, setStepNumber] = useState(0);
    const [xIsNext, setXIsNext] = useState(true);
    const winner = calculateWinner(history[stepNumber]);

    const handleClick = i => {
        const historyToCurrentStep = history.slice(0, stepNumber + 1);
        const current = historyToCurrentStep[stepNumber];
        const squares = [...current];

        // return if user clicks occupied square, or if game is won.
        if (winner || squares[i]) {
            return;
        }

        // put X or O in the clicked square.
        squares[i] = xIsNext ? "X" : "O";
        setHistory([...historyToCurrentStep, squares]);
        setStepNumber(historyToCurrentStep.length);
        setXIsNext(!xIsNext);
    };

    const status = () => {
        let s;
        if (winner) {
            s = `Winner: ${winner}`;
        } else {
            s = `Next player: ${xIsNext ? "X" : "O"}`;
        }
        return s;
    };

    const jumpTo = step => {
        setStepNumber(step);
        setXIsNext(step % 2 === 0);
    };

    const renderMoves = () => {
        
        return history.map((_, move) => {
            const destination = move ? `Go to move #${move}` : "Go to game start";
            return (
                <li key={move}>
                    <button onClick={() => jumpTo(move)}>{destination}</button>
                </li>
            );
        })
    };

    return (
        <>
            <Board 
                squares={history[stepNumber]}
                onClick={handleClick}
            />
            <div style={style}>
                {status()}
                {renderMoves()}
            </div>
        </>
    );
};

export default Game;