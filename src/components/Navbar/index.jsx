import Logo from '../UI/Logo'
import cls from './Navbar.module.css'
import Search from '../Search'

const Navbar = () => {
    return (
        <section className={cls.navbar}>
            <Logo/>
            <Search/>
        </section>
    )
}

export default Navbar