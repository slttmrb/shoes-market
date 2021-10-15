import cls from './Search.module.css'
import { AiOutlineSearch } from 'react-icons/ai'

const Search = () => {
    return (
    <section className={cls.search}>
        <input type='text' placeholder='Поиск' />
        <button>
            <AiOutlineSearch/>
            Найти 
        </button>
    </section>
    )
}

export default Search