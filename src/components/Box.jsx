import { useState } from "react";
import './Box.css'

const Box = ({colors})=>{
    
    const [box , setBox] = useState(colors[0]);
    
    let x = Math.floor((Math.random() * 15));


    // console.log(colors[x])

    const changeColor = ()=>{
        console.log(colors[x])
        setBox(colors[x])
    }

    return (
    
            
            <div onClick={changeColor} className="Box" style={{backgroundColor : box}}></div>
        
    )
}

export default Box