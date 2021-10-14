import Logo from '../UI/Logo'
import cls from './Navbar.module.css'

const Navbar = () => {
    return (
        <section className={cls.navbar}>
            <Logo/>
        </section>
    )
}

export default Navbar