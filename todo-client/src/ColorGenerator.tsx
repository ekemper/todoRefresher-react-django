
import { ReactNode, createContext, useContext, useState } from "react";

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

interface ColorProviderProps {
    children: ReactNode
}

const ColorProvider = ({children}: ColorProviderProps) => {

  const [color, setColor] = useState<string>(defaultState.color);

  const getNewColor = () => {
      var letters = '0123456789ABCDEF';
      var color = '#';
      for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
      }
      return setColor(color);
  }

  setInterval(() => getNewColor(), 10000)

  return (
    <ColorContext.Provider value={{ color, getNewColor }}>
        {children}
    </ColorContext.Provider>
  )
}


export { ColorProvider, useColor };