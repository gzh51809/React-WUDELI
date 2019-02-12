import React, { Component } from 'react'

import './GoodsPanel.scss'
class GoodsPanel extends Component {
    constructor() {
        super();
        this.state = {
            items: [
                {
                    title: '品牌特卖',
                    imgurl: require('assets/img/home/ticket.png'),
                },{
                    title: '商品',
                    imgurl: require('assets/img/home/goods.png'),
                },{
                    title: '淘宝9块9',
                    imgurl: require('assets/img/home/TB-9.9.png'),
                },{
                    title: '京东9块9',
                    imgurl: require('assets/img/home/JD-9.9.png'),
                },{
                    title: '拼多多9块9',
                    imgurl: require('assets/img/home/PDD-9.9.png'),
                },{
                    title: '淘宝20元',
                    imgurl: require('assets/img/home/TB-20.png'),
                },{
                    title: '京东20元',
                    imgurl: require('assets/img/home/JD-20.png'),
                },{
                    title: '拼多多20元',
                    imgurl: require('assets/img/home/PDD-20.png'),
                },{
                    title: '关于我们',
                    imgurl: require('assets/img/home/US.png'),
                },{
                    title: '消息',
                    imgurl: require('assets/img/home/US.png'),
                },
            ] 
        }
    }

    render() {
        let { items } = this.state
        return (
            <div className='GoodsPanel'>
                <div className='PanelContainer'>
                    <ul>
                    {
                    items.map(item=>{
                        return (
                            <li key={item.title}>
                                <a href='##'>
                                    <img src={item.imgurl} alt={item.title}/>
                                    <p>{item.title}</p>
                                </a>
                            </li>
                        )
                    })
                    }
                    </ul>
                </div>
            </div>
        )
    }
}

export default GoodsPanel;