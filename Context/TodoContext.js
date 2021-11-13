import React, { createContext, useReducer } from 'react';
import { reducer, initalState } from '../Reducer/reducer';

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initalState);

    return (
        <TodoContext.Provider value={{ state, dispatch }}>
            {children}
        </TodoContext.Provider>
        )
}