
import { createContext, useContext } from "react";

interface IColorContext {
    color: string,
    getNewColor: () => void
}

export const defaultState = {
    color: '#112233',
    getNewColor: () => {}
}

const ColorContext = createContext<IColorContext>(defaultState);

const useColor = () => useContext(ColorContext)

export { ColorContext, useColor };