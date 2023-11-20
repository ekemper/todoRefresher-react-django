import { FC } from "react"
import { useColor } from "./ColorGenerator"

const Header: FC = () => {

    const {color, getNewColor} = useColor()

    console.log({headerColor: color})

    return (
        <header className="App-header" onClick={() => getNewColor()}>
            <h1 className="App-logo" style={{color}}>Todos!</h1>
        </header>
    )
}

export default Header