import cls from './Search.module.css'
import { AiOutlineSearch } from 'react-icons/ai'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Search = () => {
    const [data, setData] = useState([])
    const [value, setValue] = useState('')
    const [appear, setAppear] = useState(false)

    const handleSearch = () => {
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

            if(value !== ''){
                const filteredArray = data.filter(item => item.title.toUpperCase().includes(value.toUpperCase()))
                setData(filteredArray)
                setAppear(true)
            } else {
                setData(data)
            }
        })
    }

    useEffect(() => {
        if(value !== ''){
            setAppear(false)
        }
    }, [value])

    return (
    <section className={cls.search}>
        <input 
            type='text' 
            placeholder='Поиск' 
            value={value}
            onChange={e => setValue(e.target.value)}      
        />
        <button onClick={handleSearch}>
            <AiOutlineSearch/>
            Найти 
        </button>
        <div 
            className={cls.search_wrapper}
            style={{
                display: appear ? 'block' : 'none'
            }}
        >
           {
               data.map(({title, id, img}) => {
                   return  <div key={id} className={cls.search_wrapper_child}>
                   <img src={img} alt="inner" />
                   <div className={cls.search_wrapper_child_body}>
                       Title: <Link to={`/single/${id}`}>{title}</Link>
                   </div>
               </div>
               })
           }
        </div>
    </section>
    )
}

export default Search