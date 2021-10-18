import cls from './App.module.css'
import Navbar from './components/Navbar'
import { Route, Switch } from 'react-router'
import Shoes from './components/Shoes'
import Footer from './components/Footer/indes'

const App = () => {
    return (
        <section className={cls.root}>
            <Navbar/>
            <Switch>
                <Route exact path='/' component={Shoes} />
            </Switch>
            <Footer/>
        </section>
    )
}

export default App