import { FC } from "react"
import './CoolDot.css'
import { useColor } from "./ColorGenerator"

const CoolDot: FC = () => {
    const {color, getNewColor} = useColor()
    return <div 
        className="cool-dot" 
        style={{'backgroundColor': color}}
        onClick={() => getNewColor()}>do a click!</div>
}

export default CoolDot