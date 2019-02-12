import React, { Component } from 'react'
import './App.scss'
import {HashRouter,Route,Switch} from 'react-router-dom'
// import {Provider} from 'react-redux'
import Main from './pages'
// import axios from 'axios';	
//把axios写入Vue的原型对象，方便后面调用
// Vue.prototype.$axios = axios;
class App extends Component {
  render() {
    return (
      // <Provider>
        <HashRouter>
          <Switch>
            <Route path="/" exact component={Main}/>
            <Route path='/home' component={Main}/>
            <Route component={Main}/>
          </Switch>
        </HashRouter>
      // </Provider>
    );
  }
}

export default App;
