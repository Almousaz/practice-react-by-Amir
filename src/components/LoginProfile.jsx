import { useState } from "react"







export const LoginProfile = () =>{

    const [profile , setProfile] = useState({
        name : "",
        lastName : "",
    })

    const handleLogin = () => {

        setProfile({...profile , name :"Ali" , lastName : "mohammadi"})

        
    };

    

    return(
        <div>

            <h2>hello {profile.name} {profile.lastName}</h2>
            <p>welcome to the world of React</p>
            <button onClick={handleLogin}>Login</button>

        </div>
    )
}