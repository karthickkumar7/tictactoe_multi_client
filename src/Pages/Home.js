import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Login from '../components/Login';
import Game from '../components/tictactoe/Game';

import { connectSocket, socket } from '../socket.client';
import {
    renderCells,
    setMsgs,
    setOppsName,
    setStart,
    setTurn,
    setXo,
    updateCell,
} from '../app/features/tttSlice';

const winConditions = {
    1: [
        [1, 2, 3],
        [1, 4, 7],
        [1, 5, 9],
    ],
    2: [
        [2, 5, 8],
        [1, 2, 3],
    ],
    3: [
        [3, 6, 9],
        [1, 2, 3],
        [3, 5, 7],
    ],
    4: [
        [1, 4, 7],
        [4, 5, 6],
    ],
    5: [
        [2, 5, 8],
        [4, 5, 6],
        [3, 5, 7],
    ],
    6: [
        [3, 6, 9],
        [4, 5, 6],
    ],
    7: [
        [1, 4, 7],
        [7, 8, 9],
        [7, 5, 3],
    ],
    8: [
        [2, 5, 8],
        [7, 8, 9],
    ],
    9: [
        [3, 6, 9],
        [1, 5, 9],
        [7, 8, 9],
    ],
};

const Home = () => {
    const {
        username,
        room,
        occupiedPCells,
        occupiedCCells,
        latestCellUpdated,
    } = useSelector((s) => s.ttt);
    const dispatch = useDispatch();

    const createCells = () => {
        const els = [];
        for (let i = 0; i < 9; i++) {
            els.push({ id: i + 1, children: '' });
        }
        return els;
    };

    useEffect(() => {
        if (latestCellUpdated) {
            for (let i = 0; i < winConditions[latestCellUpdated].length; i++) {
                if (
                    winConditions[latestCellUpdated][i].every((el) =>
                        occupiedPCells.includes(el)
                    )
                ) {
                    socket.emit('won', { room, username });
                }
            }
        }
    }, [occupiedPCells]);

    useEffect(() => {
        if (latestCellUpdated) {
            for (let i = 0; i < winConditions[latestCellUpdated].length; i++) {
                if (
                    winConditions[latestCellUpdated][i].every((el) =>
                        occupiedCCells.includes(el)
                    )
                ) {
                    socket.emit('won', { room, username });
                }
            }
        }
    }, [occupiedCCells]);

    useEffect(() => {
        dispatch(renderCells(createCells()));
        connectSocket();

        socket.on('start', ({ first, players }) => {
            dispatch(setStart(true));
            dispatch(
                setOppsName(
                    players.filter((el) => el.id !== socket.id)[0].username
                )
            );
            if (first === socket.id) {
                dispatch(setTurn(true));
                dispatch(setXo('X'));
            } else {
                dispatch(setTurn(false));
                dispatch(setXo('O'));
            }
        });

        socket.on('update', (id) => {
            console.log('update');
            dispatch(updateCell(id));
        });

        socket.on('msg', (msg) => alert(msg));

        socket.on('msgs', (msgs) => {
            dispatch(setMsgs(msgs));
        });
    }, []);

    return (
        <div className="h-screen w-screen flex justify-center items-center bg-slate-100">
            <div className="w-[1400px] h-[800px] flex shadow rounded bg-white">
                {username && room ? <Game /> : <Login />}
            </div>
        </div>
    );
};

export default Home;
