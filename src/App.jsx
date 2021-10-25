import cls from './App.module.css'
import Navbar from './components/Navbar'
import { Route, Switch } from 'react-router'
import Shoes from './components/Shoes'
import Footer from './components/Footer/indes'
import SinglePage from './pages/SinglePage'


const App = () => {
    return (
        <section className={cls.root}>
            <Navbar/>
            <Switch>
                <Route exact path='/' component={Shoes} />
                <Route exact path='/single/:id' component={SinglePage}/>
            </Switch>
            <Footer/>
        </section>
    )
}

export default App