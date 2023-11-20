
import React, { FC, createContext, useContext, useState } from "react";

interface IColorContext {
    color: string,
    getNewColor: () => void
}

export const defaultState = {
    color: '#112233',
    getNewColor: () => {}
}

const ColorContext = createContext<IColorContext>(defaultState);

type ColorProviderProps = {
    children: React.ReactNode
}

const useColor = () => useContext(ColorContext)

export { ColorContext, useColor };