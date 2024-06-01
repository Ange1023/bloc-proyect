export function LogIn () {
    const handleClick = (e)=>{
        e.preventDefault
    }

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    

    return (
        <div className="logIn">
            <form onSubmit={handleClick}>
                <h2>Introduzca sus credenciales</h2>
                <input type="text" name="username" required placeholder="Introduzca su nombre de usuario"/>
                <input type="text" name="pwd" required placeholder="Introduzca su contraseña"/>
                <button className="loginButton">Iniciar Sesion</button>
                {

                }
            </form>
        </div>

    )
}