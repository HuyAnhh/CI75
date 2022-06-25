import { useState } from "react"

function Index () {

    const [count , setCount] = useState(0)

    const handleClick = () => {
        setCount((prev) => {
            return(
                ++prev
            )
        })
    }
    
    return (
        <div style={{marginTop: "300px"}}>
            <button onClick = {handleClick}>Click</button>
            <p>{count}</p>
        </div>
    )
}

export default Index