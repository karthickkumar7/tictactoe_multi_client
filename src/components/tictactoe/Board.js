import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { markCell } from "../../app/features/tttSlice";
import { socket } from "../../socket.client";

const Board = () => {
    const { WIDTH, HEIGHT, cells } = useSelector((s) => s.ttt);
    const dispatch = useDispatch();

    const mark = (id) => {
        dispatch(markCell(id));
    };

    return (
        <div
            className="flex flex-wrap"
            style={{
                width: `${WIDTH + 2}px`,
                height: `${HEIGHT + 1}px`,
            }}
        >
            {cells.map((c) => (
                <div
                    key={c.id}
                    id={c.id}
                    className="w-[129px] h-[129px] flex justify-center items-center cursor-pointer text-3xl font-semibold border border-black hover:bg-slate-100"
                    style={{
                        height: `${HEIGHT / 3}px`,
                        width: `${WIDTH / 3}px`,
                    }}
                    onClick={() => mark(c.id)}
                >
                    {c.children}
                </div>
            ))}
        </div>
    );
};

export default Board;
