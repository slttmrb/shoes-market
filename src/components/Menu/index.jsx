import cls from './Menu.module.css'

const Menu = () => {
    return (
        <div className={cls.menu}>
            <div className={cls.burger_btn}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className={cls.menu_links}>
                <ul>
                    <li>
                        <a href='https://myshop-bot422.myinsales.ru/'>КАТАЛОГ</a>
                    </li>
                    <li>
                        <a href='https://myshop-bot422.myinsales.ru/'>КОНТАКТЫ</a>
                    </li>
                    <li>
                        <a href='https://myshop-bot422.myinsales.ru/'>ОБРАТНАЯ СВЯЗЬ</a>
                    </li>
                    <li>
                        <a href='https://myshop-bot422.myinsales.ru/'>О КОМПАНИИ</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Menu