import React, { Component } from 'react'
import './List.scss'
//引入组件
import HeaderNav from 'components/header/HeaderNav'
import Swiper from 'components/swiper/Swiper'
import Prefer from './Preference/Prefer'
import Feature from './Feature/Feature'
import Tab from 'components/tab/Tab'
import FooterNav from 'components/footer/FooterNav'


class List extends Component {
    constructor() {
        super();
        this.state = {
            swiper: [
                {
                    text: "001",
                    imgurl: require('assets/img/swiper/003.jpg')
                },{
                    text: "002",
                    imgurl: require('assets/img/swiper/004.jpg')
                },{
                    text: "003",
                    imgurl: require('assets/img/swiper/006.jpg')
                },{
                    text: "004",
                    imgurl: require('assets/img/swiper/007.jpg')
                },{
                    text: "005",
                    imgurl: require('assets/img/swiper/008.jpg')
                },{
                    text: "006",
                    imgurl: require('assets/img/swiper/010.jpg')
                },
            ],
            tabs: [
                {
                    name: 'tb',
                    title: '淘宝',
                    goods_type:'buy_taobao',
                    url: 'http://5deli.com/?mod=wap&act=goods_msg&ctrl=cate'
                },{
                    name: 'jd',
                    title: '京东',
                    goods_type:'buy_jingdong',
                    url: 'http://5deli.com/?mod=wap&act=goods_msg&ctrl=cate'
                },{
                    name: 'pdd',
                    title: '拼多多',
                    goods_type:'buy_pinduoduo',
                    url: 'http://5deli.com/?mod=wap&act=goods_msg&ctrl=cate'
                },
            ],
        }
    }
    //在卸载的时候对所有的操作进行清除
    componentWillUnmount(){
        this.setState = (state,callback)=>{
            return;
        };
    }
    render() {
        let { swiper,tabs } = this.state
        return (
            <div className='List'>
                <HeaderNav/>
                <div className='brickTOP'></div>
                <Swiper banner={swiper}/>
                <Prefer/>
                <Feature/>
                <div className='brickBot'></div>
                <Tab tabs={tabs}/>
                <FooterNav/>
            </div>
        )
    }
}

export default List