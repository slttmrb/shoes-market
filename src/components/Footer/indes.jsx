import cls from './Footer.module.css'

const Footer = () => {
    return (
        <section className={cls.footer}>
            <div className={cls.footer_conteiner}>
                <h4>Подписывайтесь на новости</h4>
                <div className={cls.footer_conteiner_input}>
                    <input type='search' placeholder='Введите ваш email'/>
                    <button>Отправить</button>
                </div>
                <div className={cls.footer_conteiner_links}>
                    <ul>
                        <li>
                            <a href='https://myshop-bot422.myinsales.ru/'>

                            </a>
                        </li>
                        <li>
                        <a href='https://myshop-bot422.myinsales.ru/'>
                                
                                </a>
                        </li>
                        <li>
                        <a href='https://myshop-bot422.myinsales.ru/'>
                                
                                </a>
                        </li>
                        <li>
                        <a href='https://myshop-bot422.myinsales.ru/'>
                                
                                </a>
                        </li>
                        <li>
                        <a href='https://myshop-bot422.myinsales.ru/'>
                                
                                </a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Footer