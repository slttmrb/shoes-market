import cls from './SinglePage.module.css'
import { useParams, Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react/cjs/react.development'


const SinglePage = () => {
    const { id } = useParams()
    const [item, setItem] = useState([])

    useEffect(() => {
        fetch(`https://market-8c79b-default-rtdb.asia-southeast1.firebasedatabase.app/shoes/${id}.json` , {
            method: 'GET'
        })
        .then(res => res.json())
        .then(r => {
            setItem(r)
        })
    }, [])

    const { img, title, price, size, color } = item 

    console.log(item);

    return (
        <section className={cls.single}>
            <div>
                <Link exact to='/'>Назад на главную</Link>
            </div>
                <h1>{title}</h1>
            <div className={cls.img_div}>
                <img src={img} alt="inner" />
                <div className={cls.description}>
                    <div>Размер: {size}</div>
                    <div>Цвет: {color}</div>
                    <div>Цена: {price}</div>
            </div>
            </div>
        </section>
    )
}

export default SinglePage