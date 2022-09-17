import React, { useEffect, useState } from "react";

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
    const [cells, setCells] = useState([]);
    const [turn, setTurn] = useState(true);
    const [player, setPlayer] = useState([]);
    const [opp, setOpp] = useState([]);
    const [markedCells, setMarkedCells] = useState([]);

    const HEIGHT = 400;
    const WIDTH = 400;

    const createCells = () => {
        const ids = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        return ids.map((id) => (
            <div
                className="border border-black cursor-pointer hover:bg-slate-100"
                id={id}
                style={{ height: `${HEIGHT / 3}px`, width: `${WIDTH / 3}px` }}
            ></div>
        ));
    };

    const mark = (c) => {
        if (!c.props.children) {
            setTurn((pv) => !pv);
            setMarkedCells((pv) => [...pv, c.props.id]);

            if (turn) {
                setPlayer((pv) => [...pv, c.props.id]);
            } else {
                setOpp((pv) => [...pv, c.props.id]);
            }

            setCells(
                cells.map((cell) => {
                    if (cell.props.id === c.props.id) {
                        return (
                            <div
                                className="flex justify-center items-center text-2xl font-semibold border border-black cursor-pointer hover:bg-slate-100"
                                id={c.props.id}
                                style={{
                                    height: `${HEIGHT / 3}px`,
                                    width: `${WIDTH / 3}px`,
                                }}
                            >
                                {turn ? "X" : "O"}
                            </div>
                        );
                    }
                    return cell;
                })
            );
        }
    };

    useEffect(() => {
        if (player.length)
            for (
                let i = 0;
                i < winConditions[player[player.length - 1]].length;
                i++
            ) {
                if (
                    winConditions[player[player.length - 1]][i].every((el) =>
                        player.includes(el)
                    )
                ) {
                    alert("player won");
                }
            }
    }, [player]);

    useEffect(() => {
        if (opp.length)
            for (
                let i = 0;
                i < winConditions[opp[opp.length - 1]].length;
                i++
            ) {
                if (
                    winConditions[opp[opp.length - 1]][i].every((el) =>
                        opp.includes(el)
                    )
                ) {
                    alert("opp won");
                }
            }
    }, [opp]);

    useEffect(() => {
        setCells(createCells());
    }, []);

    return (
        <div className="h-screen w-screen flex justify-center items-center bg-slate-100">
            <div className="w-[1400px] h-[800px] flex shadow rounded bg-white">
                <section className="w-1/3 h-full p-4 flex flex-col items-center">
                    <div className="w-full h-[20%] flex flex-col items-center">
                        <h1 className="mb-4 text-3xl font-bold">Players</h1>
                        <h1 className="my-1 text-xl font-semibold">Nigger</h1>
                        <h1 className="my-1 text-xl font-semibold">Whore</h1>
                    </div>
                    <div className="w-full h-[80%] p-1 relative rounded border border-blue-600">
                        <article className="p-1 my-1 border-b text-slate-500">
                            <p>hey man leave her alone</p>
                        </article>
                        <article className="p-1 my-1 border-b text-blue-600">
                            <p>this is react</p>
                        </article>

                        <div className="absolute h-[40px] w-full flex justify-between bottom-1">
                            <input
                                type="text"
                                placeholder="type message"
                                className="px-2 w-[80%] h-full bg-slate-100 outline-none"
                            />
                            <button className="w-[15%] h-full bg-blue-500 px-2 rounded text-white mx-2">
                                send
                            </button>
                        </div>
                    </div>
                </section>

                <section className="w-2/3 h-full flex justify-center items-center">
                    <div
                        className={`flex flex-wrap`}
                        style={{
                            width: `${WIDTH + 2}px`,
                            height: `${HEIGHT + 1}px`,
                        }}
                    >
                        {cells.map((c) => (
                            <div key={c.props.id} onClick={() => mark(c)}>
                                {c}
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Home;
