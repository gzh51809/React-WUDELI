import React, {Component} from 'react'
// import {Route,Redirect,Switch,Link,NavLink,withRouter} from 'react-router-dom'
// import PropTypes from 'prop-types'

import './HeaderSearch.scss'

class HeaderSearch extends Component {
    constructor(){
        super();
        this.state = {
            contentClass: 'header'
        }
    }
    componentDidMount(){
        this.handleScroll()
        window.addEventListener('scroll',this.handleScroll)
    }
    //在卸载的时候对所有的操作进行清除
    componentWillUnmount(){
        this.setState = (state,callback)=>{
            return;
        };
    }
    handleScroll=(event)=>{
        let _this = this;
        let scrollTop = document.documentElement.scrollTop;//滚动条滚动高度
        if(scrollTop>60){
            _this.setState({
                contentClass: 'header bk'
            })
        }else{
            _this.setState({
                contentClass: 'header'
            })
        }
    }
    render(){
        let { contentClass } = this.state
        return(
            <div className={contentClass}>
                <div className='HeadSearch_box'>
                    <a href="##">
                        <div className='Search_box'>
                            <span className='Search_icon'></span>
                            <input type='text' className='Search_input' placeholder='搜索商品'></input>
                        </div>
                    </a>
                    <a href="##">
                        <i className='message_icon'></i>
                    </a>
                </div>
            </div>
        )
    }
}

export default HeaderSearch;