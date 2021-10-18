import cls from './Shoes.module.css'
import { useState } from 'react'

const base = [
    {
        title: 'Puma shoes',
        price: 150,
        size: 40,
        color: 'blue',
        img: 'https://cache.mrporter.com/variants/images/3983529959609399/e1/w960_q80.jpg',
    },
    {
        title: 'Adida shoes',
        price: 500,
        size: 40,
        color: 'black',
        img: 'https://cache.mrporter.com/variants/images/3983529959609399/e1/w960_q80.jpg',
    },
    {
        title: 'Reebok shoes',
        price: 200,
        size: 39,
        color: 'white',
        img: 'https://cache.mrporter.com/variants/images/3983529959609399/e1/w960_q80.jpg',
    },
    {
        title: 'NewBalance shoes',
        price: 300,
        size: 43,
        color: 'black',
        img: 'https://cache.mrporter.com/variants/images/3983529959609399/e1/w960_q80.jpg',
    }
]


const Shoes = () => {
    const [data, setData] = useState(base)

    return (
        <section className={cls.shoes}>
            <div className={cls.shoes_title}>
                <h2>Товары</h2>
            </div>
            <div className={cls.shoes_wrapper}>
                {
                    data.map(({ title, size, price, color, img }, index) => {
                        return <div key={index}>
                            <div className={cls.shoes_child_title}>
                                <img src={img} alt="abc"/>
                                <h4>{title}</h4>
                            </div>
                            <div className={cls.shoes_child_body}>
                                <h3>Size: <span>{size}</span></h3>
                                <h3>Price: <span>{price}</span></h3>
                                <h3>Color: <span>{color}</span></h3>
                            </div>
                            <div className={cls.shoes_child_footer}>
                                <button>
                                    Добавить в корзину
                                </button>
                            </div>
                        </div>
                    })
                }
            </div>
        </section>
    )
}

export default Shoes