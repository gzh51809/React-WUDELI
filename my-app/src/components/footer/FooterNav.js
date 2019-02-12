import React, {Component} from 'react'
import {NavLink,withRouter} from 'react-router-dom'
// import PropTypes from 'prop-types'

import './FooterNav.scss'
class FooterNav extends Component {
    constructor(){
        super();
        this.state = {
            
        }
        this.myRef = React.createRef();
        // this绑定
        // this.handleClick = this.handleClick.bind(this);
    }
    //新版本中Refs通过React.createRef()的方法创建，通过ref属性关联
    componentDidMount(){
        // console.log(this)
        let home = this.myRef.current.children[0];
        let path = this.props.location.pathname;
        if(path === '/'){
            home.classList.add('active')
        }
    }
    
    // replace 属性会使this.props.history.go(-1)失效
    render(){
        return(
            <nav className='footer'>
                <div className='foot-ul' ref={this.myRef}>
                    <NavLink className='li' to='/home'>
                        <span className='foot-sbox'>
                            <i className='foot-icon icon-home'></i>
                            <p className='foot-name'>首页</p>
                        </span>
                    </NavLink>
                    <NavLink className='li' to='/list'>
                        <span className='foot-sbox'>
                            <i className='foot-icon icon-money'></i>
                            <p className='foot-name'>超高返</p>
                        </span>
                    </NavLink>
                    <NavLink className='li' to='/shopping'>
                        <span className='foot-sbox'>
                            <i className='foot-icon icon-rebate'></i>
                            <p className='foot-name'>购物返利</p>
                        </span>
                    </NavLink>
                    <NavLink className='li' to='/cart'>
                        <span className='foot-sbox'>
                            <i className='foot-icon icon-cart'></i>
                            <p className='foot-name'>购物车</p>
                        </span>
                    </NavLink>
                    <NavLink className='li' to='/mine'>
                        <span className='foot-sbox'>
                            <i className='foot-icon icon-mine'></i>
                            <p className='foot-name'>我的</p>
                        </span>
                    </NavLink>
                            
                        
                </div>
            </nav>
        )
    }
}

// 利用withRouter高阶组件包装App组件
export default withRouter(FooterNav);

// 高阶组件的理解
// WidthRouter = (footer)=>{
//     return <footer history={xxxx}/>
// }