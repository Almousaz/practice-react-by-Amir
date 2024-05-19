import { useState } from "react"



const Counter = () => {

    const [counter , setCounter] = useState(10)

    const increaseCounter = () => {
        setCounter(counter + 1)
    }

    const decreaseCounter = () => {
        setCounter(counter - 1)
    }



    return(
        <div>
            <button onClick={increaseCounter}>+</button>
            <span>{counter}</span>
            <button onClick={decreaseCounter}>-</button>
        </div>

    )
}

export default Counter