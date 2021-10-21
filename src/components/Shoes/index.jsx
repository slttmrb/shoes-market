import cls from './Shoes.module.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Shoes = () => {
    const [data, setData] = useState([])

    fetch('https://market-8c79b-default-rtdb.asia-southeast1.firebasedatabase.app/shoes.json' , {
        method: 'GET'
    })
    .then(res => res.json())
    .then(r => {
        const data = Object.entries(r).map(item => {
            const id = item[0]

            return {
                ...item[1],
                id
            }
        })

        setData(data)
    })



    return (
        <section className={cls.shoes}>
            <div className={cls.shoes_title}>
                <h2>Товары</h2>
            </div>
            <div className={cls.shoes_wrapper}>
                {
                    data.map(({ title, size, price, color, img, id }) => {
                        return <div key={id}>
                            <div className={cls.shoes_child_title}>
                                <img src={img} alt="abc"/>
                                <h4>{title}</h4>
                            </div>
                            <div className={cls.shoes_child_body}>
                                <h3>Size: <span>{size}</span></h3>
                                <h3>Price: <span>{price}</span></h3>
                                <h3>Color: <span>{color}</span></h3>
                            </div>
                            <div className={cls.shoes_btn}>
                                <Link to={`/single/${id}`} key={id}>Подробнее</Link>
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