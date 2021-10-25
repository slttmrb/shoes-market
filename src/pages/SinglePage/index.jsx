import cls from './SinglePage.module.css'
import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Loader from '../../components/UI/Loader'


const SinglePage = () => {
    const { id } = useParams()
    const [item, setItem] = useState([])
    const [ loading, setLoading ] = useState(false)

    useEffect(() => {
        fetch(`https://market-8c79b-default-rtdb.asia-southeast1.firebasedatabase.app/shoes/${id}.json` , {
            method: 'GET'
        })
        .then(res => res.json() , setLoading(true))
        .then(r => {
            setLoading(false)
            setItem(r)
        })
    }, [])

    const { img, title, price, size, color } = item 

    console.log(item);

    return (
        <section className={cls.single}>
            <div className={cls.single_title}>
                <Link exact to='/'>Назад на главную</Link>
            </div>

            {
                loading ? <Loader/> : 
                <div className={cls.single_body}>
                    <div className={cls.single_body_image}>
                        <img src={img} alt="inner" />
                    </div>

                    <div className={cls.single_body_content}>
                        <h1>{title}</h1>
                        <div>Размер: <span>{size}</span></div>
                        <div>Цвет: <span>{color}</span></div>
                        <div>Цена: <span>{price}</span></div>
                </div>
            </div> 
            }
        </section>
    )
}

export default SinglePage