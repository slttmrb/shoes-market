import Logo from '../UI/Logo'
import cls from './Navbar.module.css'
import Search from '../Search'
import Menu from '../Menu'
import { BsPerson } from 'react-icons/bs'
import { BsCart3 } from 'react-icons/bs'

const Navbar = () => {
    return (
        <div>
            <section className={cls.navbar}>
                <Logo/>
                <Search/>
                <button className='Person'><BsPerson/></button>
                <button className='Cart'><BsCart3/></button>
            </section>
            <section>
                <Menu/>
            </section>
        </div>
    )
}

export default Navbar