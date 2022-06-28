import { useState } from "react"
import "./style.css"


function TrafficLight () {
    const arrColor = ["red" , "yellow" , "green"]
    const [possition , setPossition] = useState(0)

    const handleOnclick = () => {
        if (possition > 2 ) {
            setPossition(0)
        }else {
            setPossition((prev) => {return(prev+1)})
        }
    }

    return (

        <div>
            <button onClick={handleOnclick}>Next</button>
            {
                arrColor.map((value , index) => {
                    const classColor = index === possition ? `traffic ${value}` : "traffic" 
                    return(
                        <div key={index} className = {classColor}></div>
                    )
                })
            }
        </div>


    )
}

export default TrafficLight