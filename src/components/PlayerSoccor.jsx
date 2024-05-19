import { useState } from "react"




const PlayerSoccor = () => {

    const [array , setArray] = useState(["Ali" , "Amir" , "Sajad"])

    const handleAddNewPlayers = () => {
        setArray([...array , "mmadd"])
    }

    const handleRemovePlayer = (index) => {
        setArray(array.filter((_ , i) => i !== index));
    }

    return(
        <div>
            <ul>
                {array.map((item, index) => {
                    return <li key={index}>{item}<button onClick={() => handleRemovePlayer(index)} >remove player</button></li>
                })}
            </ul>
            <button onClick={handleAddNewPlayers}>add new players</button>

        </div>

    )
}

export default PlayerSoccor