import React, {useState} from 'react';
import {calculateWinner} from '../helpers';
import Board from './Board';
import Button from '@material-ui/core/Button';

const style = {
    width: '200px',
    margin: '20px auto',
    fontFamily: 'verdana',
    textAlign: 'center'
};

const Game = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [whoIs, whoIsS] = useState(true);
    const winner = calculateWinner(board);
    const xo = whoIs ? 'X': 'O';
    const handleClick = i => {
        const boardCopy = [...board];
        if(winner || boardCopy[i]) return;
        boardCopy[i] = whoIs ? 'X' : 'O';
        setBoard(boardCopy);
        whoIsS(!whoIs);
    }
      
    const renderMoves = () => {
        if (winner) {
               return <Button variant="contained" onClick={() => setBoard( Array(9).fill(null) )}>Replay !</Button>
        } else {
               return <Button variant="contained" onClick={() => setBoard( Array(9).fill(null) )}>Start !</Button>
        }
    }
    let stateBoard;
    if(winner){
        if(winner === 'draw'){
            stateBoard = 'Match Draw !';
        }
        else{
            if(xo === 'X'){
                stateBoard = 'Player O won !';
            }
            else{
                stateBoard = 'Player X won !';
            }
        }
    }
    else{
        stateBoard = 'Next is ' + xo;
    }
    return (
        <>
            <Board squares={board} onClick={handleClick} />
                <div style={style}>
                    <p> {stateBoard} </p>
                    {/* <p> {winner ? 'The Player ' + winner + ' Won!': 'Next Player is ' + (whoIs ? 'X' : 'O')} </p> */}
                    {renderMoves()}
                </div>
        </>
    )
}

export default Game;