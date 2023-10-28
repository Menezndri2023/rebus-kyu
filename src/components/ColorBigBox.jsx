import Box from "./Box";
import './ColorBigBox.css'

function ColorBigBox({colors}) {
    const myBox = []
    for(let i = 0 ; i < 25 ; i++){
        myBox.push(<Box colors ={colors} />)
    }
    return (
        
        <>
            <div className="Component">
            {myBox}
            </div>
        </>
    )

}
export default ColorBigBox