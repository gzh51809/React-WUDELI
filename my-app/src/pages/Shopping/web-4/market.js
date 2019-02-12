import React, {Component} from 'react'
import './market.scss'

import Swiper from 'components/swiper/Swiper'
import TabNav from './tabNav'

class market extends Component {
    constructor(){
        super();
        this.state = {
            banner: [
                {
                    text: "啤酒",
                    imgurl: require('assets/img/market/football.png')
                },{
                    text: "粽子",
                    imgurl: require('assets/img/market/zongzi.png')
                }
            ],
            cateList: [
                {
                    id: 0,
                    nav: 0,
                    catename:'全部',
                    category_name: '全部'
                },{
                    id: 14,
                    nav: 1,
                    catename: '综合商城',
                    category_name: '综合商城'
                },{
                    id: 15,
                    nav: 2,
                    catename: '服装服饰',
                    category_name: '服装服饰'
                },{
                    id: 16,
                    nav: 3,
                    catename: '数码/家电',
                    category_name: '数码/家电'
                },{
                    id: 17,
                    nav: 4,
                    catename: '美容化妆',
                    category_name: '美容化妆'
                },{
                    id: 18,
                    nav: 5,
                    catename: '家居家饰',
                    category_name: '家居家饰'
                },{
                    id: 19,
                    nav: 6,
                    catename: '女性/内衣',
                    category_name: '女性/内衣'
                },{
                    id: 20,
                    nav: 7,
                    catename: '儿童用品',
                    category_name: '儿童用品'
                },{
                    id: 21,
                    nav: 8,
                    catename: '图书音像',
                    category_name: '图书音像'
                },{
                    id: 22,
                    nav: 9,
                    catename: '鲜花礼品',
                    category_name: '鲜花礼品'
                },{
                    id: 23,
                    nav: 10,
                    catename: '珠宝首饰',
                    category_name: '珠宝首饰'
                },{
                    id: 24,
                    nav: 11,
                    catename: '食酒/茶叶',
                    category_name: '食酒/茶叶'
                },{
                    id: 25,
                    nav: 12,
                    catename: '医药健康',
                    category_name: '医药健康'
                },{
                    id: 26,
                    nav: 13,
                    catename: '成人保健',
                    category_name: '成人保健'
                },{
                    id: 27,
                    nav: 14,
                    catename: '运动户外',
                    category_name: '运动户外'
                },{
                    id: 28,
                    nav: 15,
                    catename: '箱包/鞋类',
                    category_name: '箱包/鞋类'
                },{
                    id: 29,
                    nav: 16,
                    catename: '教育培训',
                    category_name: '教育培训'
                },{
                    id: 30,
                    nav: 17,
                    catename: '票务旅游',
                    category_name: '票务旅游'
                },{
                    id: 31,
                    nav: 18,
                    catename: '金融理财',
                    category_name: '金融理财'
                },{
                    id: 32,
                    nav: 19,
                    catename: '网络服务',
                    category_name: '网络服务'
                },{
                    id: 33,
                    nav: 20,
                    catename: '宠物生活',
                    category_name: '宠物生活'
                },{
                    id: 34,
                    nav: 21,
                    catename: '办公文具',
                    category_name: '办公文具'
                }
            ],
        }
    }
    
    render(){
        let { banner, cateList } = this.state;
        return (
            <div className='market'>
                <Swiper banner={banner}/>
                {/* <input type='text' /> */}
                <TabNav cateList={cateList}/>
            </div>
        )
    }
}

export default market