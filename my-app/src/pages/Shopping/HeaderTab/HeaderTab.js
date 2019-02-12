import React, { Component } from 'react'
import './HeaderTab.scss'

import {Route,Switch,withRouter,Redirect} from 'react-router-dom'

import TB from '../web-1/tb'
import JD from '../web-2/jd'
import PDD from '../web-3/pdd'
import MarKet from '../web-4/market'
class HeaderNav extends Component {
    constructor (){
        super();
        this.state = {
            current:'/tb',
            tab:[
                {
                    name:'taobao',
                    text: '淘宝',
                    path:'/tb'
                },{
                    name:'jingdong',
                    text: '京东',
                    path:'/jd'
                },{
                    name:'pinduoduo',
                    text: '拼多多',
                    path:'/pdd'
                },{
                    name:'market',
                    text: '商城',
                    path:'/sc'
                }
            ],
            data: [],
            filter_text: '教程',
            filter_img: require('assets/img/list/course.png')
        }
        this.handleChange = this.handleChange.bind(this)
    }

    //刷新后保持高亮
    componentDidMount(){
        let hash = window.location.hash                                   
        hash = hash.replace('#'+this.props.match.url,'')   //  #/shopping/jd => /jd
        this.setState({
            current: hash //jd
        })
    }

    //点击切换不同路由
    handleChange(path){
        let {history,match} = this.props
        this.setState({
            current: path
        })
        history.push(match.url+path)
    }

    render(){
        let {tab,filter_text,filter_img,current} = this.state
        let {match} = this.props
        return (
            <div className='HeaderNav'>
                <div className='HeaderNav_box'>
                    <div className='haederNav_tab'>
                        <div className='tab_sbox col'>
                        {
                            tab.map(item=>{
                                return (
                                    <span 
                                    className={`tab_name ${current===item.path?'active':null}`} 
                                    key={item.name}
                                    onClick={()=>{this.handleChange(item.path)}}
                                    >{item.text}</span>
                                )
                            })
                        }
                        </div>
                    </div>
                    <a href='##' className='filter'>
                        <span>{filter_text}</span>
                        <img src={filter_img} alt={filter_text}/>
                    </a>
                </div>
                <Switch>
                    <Route path={match.path+'/tb'} component={TB} replace/>
                    <Route path={match.path+'/jd'} component={JD} replace/>
                    <Route path={match.path+'/pdd'} component={PDD} replace/>
                    <Route path={match.path+'/sc'} component={MarKet} replace/>
                    <Redirect from={match.path} to={match.path+'/tb'} replace/>
                </Switch>
            </div>
        )
    }
}

export default withRouter(HeaderNav)