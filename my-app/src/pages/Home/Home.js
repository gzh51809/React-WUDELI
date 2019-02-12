import React, { Component } from 'react'

//引入组件
import FooterNav from 'components/footer/FooterNav'
import HeaderSearch from 'components/header/HeaderSearch'
import Swiper from 'components/swiper/Swiper'
import GoodsPanel from './GoodsPanel/GoodsPanel'
import GoodsFeature from './GoodsFeature/GoodsFeature'
import Mall from './Mall/Mall'
import GoodsShow from './GoodsShow/GoodsShow'
import Tab from 'components/tab/Tab'

class Home extends Component {
    constructor(){
        super();
        this.state = {
            banner: [
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
            ads: [
                [
                    {
                        cls: 'Mall-1',
                        idx: '001-1',
                        text: '成为代言人',
                        imgurl: require('assets/img/home/mall-1.1.png')
                    },{
                        cls: 'Mall-1',
                        idx: '001-2',
                        text: '必中抽奖',
                        imgurl: require('assets/img/home/mall-1.2.png')
                    }
                ],
                [
                    {
                        cls: 'Mall-2',
                        idx: '002-1',
                        text: '成为代言人',
                        imgurl: require('assets/img/home/mall-2.1.png')
                    },{
                        cls: 'Mall-2',
                        idx: '002-2',
                        text: '必中抽奖',
                        imgurl: require('assets/img/home/mall-2.2.png')
                    },{
                        cls: 'Mall-3',
                        idx: '002-3',
                        text: '成为代言人',
                        imgurl: require('assets/img/home/mall-2.3.png')
                    }
                ]
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
      let { banner, ads, tabs } = this.state;
      return (
        <div className="Home">
            <HeaderSearch/>
            <Swiper banner={banner}/>
            <GoodsPanel/>
            <GoodsFeature/>
            <Mall ads={ads[0]}/>
            <Mall ads={ads[1]}/>
            <GoodsShow/>
            <Tab tabs={tabs}/>
            <FooterNav/>
        </div>
      );
    }
  }
  
  export default Home;