import cls from './App.module.css'
import Navbar from './components/Navbar'

const App = () => {
    return (
        <section className={cls.root}>
            <Navbar/>
        </section>
    )
}

export default App