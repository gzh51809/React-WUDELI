import React, {Component} from 'react'
import {Route, Switch,withRouter} from 'react-router-dom'
// import {connect} from 'react-redux'

// import FooterNav from 'components/footer/FooterNav'
import Home from './Home/Home'
import List from './List/List'
import Shopping from './Shopping/Shopping'
import Cart from './Cart/Cart'
import Mine from './Mine/Mine'
import Error from './Error/Error';

//引入全局样式
import './index.scss'

class Main extends Component {
    render() {
        return(
            <div className='root'>
                <Switch>
                    <Route path="/" exact component={Home}/>        
                    <Route path='/home' component={Home}/>
                    <Route path='/list' component={List}/>
                    <Route path='/shopping' component={Shopping}/>
                    <Route path='/cart' component={Cart}/>
                    <Route path='/mine' component={Mine}/>
                    <Route component={Error}/>
                </Switch>
                {/* <footer>
                    <FooterNav/>
                </footer> */}
            </div>
        )
    }
}

export default withRouter(Main)