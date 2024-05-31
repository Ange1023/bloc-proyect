import { EditSection } from './editSection.jsx'
import { SideBar } from './SideBar.jsx'

export function MainSection (){
    return (
        <section className='mainSection'>
        <SideBar/>
        <EditSection/>
      </section>
    )
}