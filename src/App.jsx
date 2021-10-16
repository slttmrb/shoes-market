import cls from './App.module.css'
import Navbar from './components/Navbar'
import { Route, Switch } from 'react-router'
import Shoes from './components/Shoes'

const App = () => {
    return (
        <section className={cls.root}>
            <Navbar/>
            <Switch>
                <Route exact path='/' component={Shoes} />
            </Switch>
        </section>
    )
}

export default App