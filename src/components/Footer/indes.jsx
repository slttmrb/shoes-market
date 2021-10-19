import cls from './Footer.module.css'
import { AiOutlineInstagram } from 'react-icons/ai'
import { AiOutlineFacebook } from 'react-icons/ai'
import { AiOutlineTwitter } from 'react-icons/ai'
import { AiOutlineYoutube } from 'react-icons/ai'
import { FaTelegramPlane } from 'react-icons/fa'


const Footer = () => {
    return (
        <section className={cls.footer}>
            <div className={cls.footer_conteiner}>
                <h4>Подписывайтесь на новости!</h4>
                <div className={cls.footer_conteiner_input}>
                    <input type='search' placeholder='Введите ваш email'/>
                    <button>Отправить</button>
                </div>
                <div className={cls.footer_conteiner_links}>
                    <ul>
                        <li>
                            <a href='https://myshop-bot422.myinsales.ru/'>
                                <button><AiOutlineInstagram/></button>
                            </a>
                        </li>
                        <li>
                        <a href='https://myshop-bot422.myinsales.ru/'>
                                <button><AiOutlineFacebook/></button>
                                </a>
                        </li>
                        <li>
                        <a href='https://myshop-bot422.myinsales.ru/'>
                                <button><AiOutlineTwitter/></button>
                                </a>
                        </li>
                        <li>
                        <a href='https://myshop-bot422.myinsales.ru/'>
                                <button><AiOutlineYoutube/></button>
                                </a>
                        </li>
                        <li>
                        <a href='https://myshop-bot422.myinsales.ru/'>
                                <button><FaTelegramPlane/></button>
                                </a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Footer