import cls from './Menu.module.css'
import { HiOutlineMenuAlt1 } from 'react-icons/hi'

const Menu = () => {
    return (
        <div className={cls.menu}>
            <button><HiOutlineMenuAlt1/></button>
            <button>каталог</button>
            <button>контакты</button>
            <button>обратная связь</button>
            <button>о компании</button>
        </div>
    )
}

export default Menu