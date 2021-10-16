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
                <div className={cls.Navbar_1}>
                    <button><BsPerson/></button>
                    <button><BsCart3/></button>
                </div>
            </section>
             <Menu/>
        </div>
    )
}

export default Navbar