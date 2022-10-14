import { createSlice } from "@reduxjs/toolkit";
import { socket } from "../../socket.client";

const initialState = {
    start: false,
    go: false,
    cells: [],
    occupiedPCells: [],
    occupiedCCells: [],
    latestCellUpdated: null,
    WIDTH: 400,
    HEiGHT: 400,
    username: "",
    id: "",
    oppsName: "",
    oppId: "",
    room: "",
    xo: "",
    turn: false,
    msgs: [],
};

const tttSlice = createSlice({
    name: "ttt",

    initialState,

    reducers: {
        renderCells: (state, { payload }) => {
            state.cells = payload;
        },

        markCell: (state, { payload }) => {
            if (state.turn) {
                state.cells = state.cells.map((el) => {
                    if (el.id === payload && !el.children) {
                        return {
                            ...el,
                            children: state.xo,
                        };
                    }
                    return el;
                });
                state.latestCellUpdated = payload;
                state.occupiedPCells.push(payload);
                state.turn = false;
                socket.emit("marked", { id: payload, room: state.room });
            }
        },

        updateCell: (state, { payload }) => {
            state.cells = state.cells.map((cell) => {
                if (cell.id === payload) {
                    return { ...cell, children: state.xo === "X" ? "O" : "X" };
                }
                return cell;
            });
            state.occupiedCCells.push(payload);
            state.turn = true;
        },

        setRoomName: (state, { payload }) => {
            state.room = payload;
        },
        setName: (state, { payload }) => {
            state.username = payload;
        },
        setOppsName: (state, { payload }) => {
            state.oppsName = payload;
        },
        setId: (state, { payload }) => {
            state.id = payload;
        },
        setOppsId: (state, { payload }) => {
            state.oppId = payload;
        },
        setGo: (state) => {
            state.go = true;
        },
        setXo: (state, { payload }) => {
            state.xo = payload;
        },
        setTurn: (state, { payload }) => {
            state.turn = payload;
        },
        setStart: (state, { payload }) => {
            state.start = payload;
        },

        setMsgs: (state, { payload }) => {
            state.msgs = payload;
        },
    },
});

export const {
    renderCells,
    markCell,
    setId,
    setName,
    setOppsId,
    setOppsName,
    setRoomName,
    setGo,
    setTurn,
    setXo,
    setStart,
    updateCell,
    setMsgs,
} = tttSlice.actions;

export default tttSlice.reducer;
