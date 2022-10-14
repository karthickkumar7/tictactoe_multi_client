import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setMsgs } from '../../app/features/tttSlice';
import { socket } from '../../socket.client';

import Board from './Board';

const Game = () => {
    const [msg, setMsg] = useState('');
    const { start, username, oppsName, turn, room, msgs } = useSelector(
        (s) => s.ttt
    );

    const sendMsgHandler = () => {
        socket.emit('msg', { room, msg });
        setMsg('');
    };

    return (
        <>
            <section className="w-1/3 h-full p-4 flex flex-col items-center">
                <div className="w-full h-[20%] flex flex-col items-center">
                    <h1 className="mb-4 text-3xl font-bold">Players</h1>
                    <h1
                        className={`${
                            turn
                                ? 'text-green-500 text-xl'
                                : 'text-slate-500 text-lg'
                        } font-semibold`}
                    >
                        {username}
                    </h1>
                    <h1
                        className={`${
                            !turn
                                ? 'text-green-500 text-xl'
                                : 'text-slate-500 text-lg'
                        } font-semibold`}
                    >
                        {oppsName}
                    </h1>
                </div>
                <div className="w-full h-[80%] p-1 relative rounded border border-blue-600">
                    {msgs.map((m) => (
                        <article
                            key={m.id}
                            className={`${
                                m.author === socket.id
                                    ? 'text-slate-400'
                                    : 'text-blue-600'
                            } flex flex-col p-1 my-1 border-b`}
                        >
                            <p>{m.msg}</p>
                        </article>
                    ))}

                    <div className="absolute h-[40px] w-full flex justify-between bottom-1">
                        <input
                            type="text"
                            placeholder="type message"
                            value={msg}
                            onChange={(e) => setMsg(e.target.value)}
                            className="px-2 w-[80%] h-full bg-slate-100 outline-none"
                        />
                        <button
                            className="w-[15%] h-full bg-blue-500 px-2 rounded text-white mx-2"
                            onClick={sendMsgHandler}
                        >
                            send
                        </button>
                    </div>
                </div>
            </section>

            <section className="w-2/3 h-full p-4 flex flex-col items-center justify-center">
                {start ? (
                    <Board />
                ) : (
                    <div>waiting for the other player to join...</div>
                )}
            </section>
        </>
    );
};

export default Game;
