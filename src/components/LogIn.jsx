/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { usuarios } from "../Data/usersData"
import { useState } from "react"

export function LogIn ({loginSucces}) {
    const handleClick = (e)=>{
        e.preventDefault()

        const loginSecurity = (username, password)=>{
            console.log(username);
            console.log(password)
            const foundUser = username === usuarios.find(user => user.user === username).user
            const foundPwd = password === usuarios.find(user => user.password).password
            console.log(usuarios.find(user => user.user))
            console.log(usuarios.find(user => user.password))
            console.log(`encontro el user? ${foundUser}`)
            console.log(`encontro la password? ${foundPwd}`)
                if( !(foundUser) && !(foundPwd)){
                    setError('Usuario y password invalidas')
                    // alert('No');
                    return false
                }else if(!foundUser){
                    setError('Usuario invalido')
                    // alert('No');
                    return false
                }else if(!foundPwd){
                    setError('Password invalida')
                    // alert('No');
                    return false
                }else{
                    // alert('Si');
                    return true
                }
            }
        
            const isValid = loginSecurity(username, password)
            if(isValid){
                console.log(`logro iniciar sesion? ${isValid}`);
                loginSucces();
                
            }
            console.log(`logro iniciar sesion? ${isValid}`);
    }

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('');

    
    



    return (
        <div className="logIn">
            <form 
            onSubmit={handleClick}>
                <h2>Introduzca sus credenciales</h2>
                <input type="text" 
                name="username" 
                required 
                placeholder="Introduzca su nombre de usuario"
                onChange={(e)=>setUsername(e.target.value)}
                />

                <input type="text" 
                name="pwd" 
                required 
                placeholder="Introduzca su contraseña"
                onChange={(e)=>setPassword(e.target.value)}
                />
                <button className="loginButton">Iniciar Sesion</button>
                {

                }
            </form>
        </div>

    )
}