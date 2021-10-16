import cls from './Shoes.module.css'
import { useState } from 'react'

const base = [
    {
        title: 'Puma shoes',
        price: 150,
        size: 40,
        color: 'blue',
        img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.ietp.com%2Ffr%2Fdfecfyshop%2Fproducts%2Fadidas-originals-yeezy-boost-350-v2-core-blackred&psig=AOvVaw2y19AW9mgDkLLj4skwwllp&ust=1634483123574000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCLi0hqSaz_MCFQAAAAAdAAAAABAP',
    },
    {
        title: 'Adida shoes',
        price: 500,
        size: 40,
        color: 'black',
        img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.ietp.com%2Ffr%2Fdfecfyshop%2Fcollections%2Fyeezy-boost-350&psig=AOvVaw2y19AW9mgDkLLj4skwwllp&ust=1634483123574000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCLi0hqSaz_MCFQAAAAAdAAAAABAD',
    },
    {
        title: 'Reebok shoes',
        price: 200,
        size: 39,
        color: 'white',
        img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.ietp.com%2Ffr%2Fdfecfyshop%2Fcollections%2Fyeezy-boost-350&psig=AOvVaw2y19AW9mgDkLLj4skwwllp&ust=1634483123574000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCLi0hqSaz_MCFQAAAAAdAAAAABAD',
    },
    {
        title: 'NewBalance shoes',
        price: 300,
        size: 43,
        color: 'black',
        img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.ietp.com%2Ffr%2Fdfecfyshop%2Fcollections%2Fyeezy-boost-350&psig=AOvVaw2y19AW9mgDkLLj4skwwllp&ust=1634483123574000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCLi0hqSaz_MCFQAAAAAdAAAAABAD',
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
                                <h4>{title}</h4>
                                <img src={img} alt="photo"/>
                            </div>
                            <div className={cls.shoes_child_body}>
                                <h3>Size: {size}</h3>
                                <h3>Price: {price}</h3>
                                <h3>Color: {color}</h3>
                            </div>
                        </div>
                    })
                }
            </div>
        </section>
    )
}

export default Shoes