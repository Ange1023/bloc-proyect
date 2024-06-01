export function LogIn () {
    return (
        <form >
            <input type="text" name="username" required placeholder="Introduzca su nombre de usuario"/>
            <input type="text" name="pwd" placeholder="Introduzca su contraseña"/>
        </form>
    )
}