import cls from './Search.module.css'
import { AiOutlineSearch } from 'react-icons/ai'
import { useEffect, useState } from 'react'

const Search = () => {
    const [data, setData] = useState([])
    const [value, setValue] = useState('')
    const [check, setCheck] = useState(false)


    useEffect(() => {
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
        }, [data])

    }, [check])





    return (
    <section className={cls.search}>
        <input 
            type='text' 
            placeholder='Поиск' 
            value={value}
            onChange={e => setValue(e.target.value)}      
        />
        <button>
            <AiOutlineSearch/>
            Найти 
        </button>
        <div className={cls.search_wrapper}>
           {
               data.map(({title, id, img}) => {
                   return  <div key={id} className={cls.search_wrapper_child}>
                   <img src={img} alt="inner" />
                   <div className={cls.search_wrapper_child_body}>
                       Title: <span>{title}</span>
                   </div>
               </div>
               })
           }
        </div>
    </section>
    )
}

export default Search