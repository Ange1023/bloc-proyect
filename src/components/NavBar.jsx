export function NavBar(){
    return (
    <div className='navBar'>
        <section className='logos'>

        <div className='loginLogo'>
            <img src="/accountLogo.svg" alt="" />
            </div>

        <div className='addNoteLogo'>
            <img src="/addLogo.svg" alt="" />
            </div>
        </section>
        <section style={{
            textAlign: 'center',
            width: '60%',
            right: '0'
        }}>

            <label>Proyecto #1, Bloc de Notas, Manejo de Frameworks 2024B</label>
            <label>Idiar Chacin, Angelina Pineda</label>
        </section>
    </div>
    )
}