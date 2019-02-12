import React, { Component } from 'react'
import './Tab.scss'
//引入axios请求文件
// import {ReqCateList} from 'api'
import axios from 'axios'

import Spinner from 'components/spinner/Spinner'//加载组件
import { Tabs } from 'antd'
const TabPane = Tabs.TabPane



class Tab extends Component {
    constructor() {
        super();
        this.state = {
            webSite: 'buy_taobao',
            current: '',
            menuNum: 0,
            sortId:'zonghe',
            fixedClass: '',
            contentClass:'show',
            cateList: [
                {
                    id: 0,
                    catename:'全部',
                    category_name: '全部'
                },{
                    id: 5010,
                    catename: '户外',
                    category_name: '户外'
                },{
                    id: 5009,
                    catename: '鞋包',
                    category_name: '鞋包'
                },{
                    id: 5012,
                    catename: '母婴',
                    category_name: '母婴'
                },{
                    id: 5007,
                    catename: '女装',
                    category_name: '女装'
                },{
                    id: 7008,
                    catename: '男装',
                    category_name: '男装'
                },{
                    id: 7013,
                    catename: '内衣内裤',
                    category_name: '内衣内裤'
                },{
                    id: 5011,
                    catename: '汽配',
                    category_name: '汽配'
                },{
                    id: 5008,
                    catename: '化妆',
                    category_name: '化妆'
                },{
                    id: 7010,
                    catename: '童装',
                    category_name: '童装'
                },{
                    id: 5015,
                    catename: '图书',
                    category_name: '图书'
                },{
                    id: 5014,
                    catename: '医药',
                    category_name: '医药'
                },{
                    id: 5006,
                    catename: '家居',
                    category_name: '母婴'
                },{
                    id: 5003,
                    catename: '电器',
                    category_name: '电器'
                },{
                    id: 6380,
                    catename: '办公',
                    category_name: '办公'
                },{
                    id: 5004,
                    catename: '数码',
                    category_name: '数码'
                },{
                    id: 7031,
                    catename: '美食',
                    category_name: '美食'
                },{
                    id: 7032,
                    catename: '种养',
                    category_name: '种养'
                }
            ],
            goodsList:[
                {
                    "id": "7285102",
                    "fnuo_id": "7285102",
                    "goods_title": "一加手机6 8GB+128GB 墨岩黑 高通骁龙845 全面屏双摄游戏手机 全网通4G 双卡双待",
                    "isFreeShipping": "2",
                    "isFreeFreightRisk": "0",
                    "commission": "0.6375",
                    "start_time": "1475251200",
                    "end_time": "4102416000",
                    "isJdSale": "1",
                    "dp_id": "1000001947",
                    "cid": "9987",
                    "cid1": "653",
                    "cid2": "655",
                    "cate_name": "手机通讯",
                    "cate2_name": "手机",
                    "cate3_name": "手机",
                    "pc_goods_price": "2699",
                    "goods_price": "2699",
                    "goods_cost_price": "2699",
                    "goods_img": "http://img14.360buyimg.com/n1/jfs/t23017/140/2310086726/216270/b3d72dcc/5b7bd343N1abeea38.jpg",
                    "goods_max_img": "http://img14.360buyimg.com/n1/jfs/t23017/140/2310086726/216270/b3d72dcc/5b7bd343N1abeea38.jpg",
                    "shop_title": "",
                    "goods_sales": "4.1万",
                    "goods_group_price": "0",
                    "yhq": "0",
                    "yhq_span": "0元券",
                    "yhq_price": "0",
                    "yhq_url": "",
                    "shop_id": "3",
                    "jd": "1",
                    "getGoodsType": "buy_jingdong",
                    "pg_url": "",
                    "fcommission": "1.72",
                    "fbili": "0.06",
                    "zhe": "10折",
                    "fcommissionshow": "1.72",
                    "fnuo_url": "http://5deli.com/?mod=wap&act=gotojingdong&ctrl=index&gid=7285102",
                    "tdj_data": "",
                    "goods_types": "buy_jingdong",
                    "shop_type": "京东",
                    "goods_ico_one": "http://5deli.com/View/index/img/appapi/comm/list_discount_quan.png",
                    "open_iid": "7285102",
                    "is_mylike": "0",
                    "is_support": "1",
                    "jindu": "95",
                    "qgStr": "已抢41979件",
                    "is_qiangguang": "0",
                    "goods_sales_ico": "http://5deli.com/View/index/img/wap/comm/goods_sales_ico.png?time=1549464152",
                    "home_share_ico": "http://5deli.com/View/index/img/wap/comm/home_share.png",
                    "goods_store_img": "http://5deli.com/View/index/img/wap/comm/goods_store_img.png?time=1549464152",
                    "goods_fanli_bjimg": "http://5deli.com/View/index/img/wap/comm/goods_fanli_bjimg.png?time=1549464152",
                    "goods_quanfont_bjimg": "http://5deli.com/View/index/img/wap/comm/goods_quanfont_bjimg.png?time=1549464152",
                    "goods_quanbj_bjimg": "http://5deli.com/View/index/img/wap/comm/goods_quanbj_bjimg.png?time=1549464152",
                    "goods_sharezhuan_img": "http://5deli.com/View/index/img/wap/comm/goods_sharezhuan_img.png?time=1549464152",
                    "fxz": "",
                    "fx_commission": "",
                    "share_on": "",
                    "provcity": "",
                    "pdd": "0",
                    "str_count": "4",
                    "shop_img": "http://5deli.com/View/index/img/wap/comm/jd1.png?time=1549464152",
                    "fan_all_str": "存",
                    "share_img": "http://5deli.com/View/index/img/wap/comm/home_share.png?time=1549464152",
                    "goodsyhqstr_color": "f43e79",
                    "goodsfcommissionstr_color": "f43e79",
                    "taoqianggou_quan_color": "FFFFFF",
                    "is_qg": "0",
                    "remind": "0",
                    "qg_time": "",
                    "taoqianggou_quan_img": "http://5deli.com/View/index/img/wap/comm/taoqianggou_quan_img.png?time=1549464152",
                    "taoqianggou_remind_img": "http://5deli.com/View/index/img/wap/comm/taoqianggou_remind_img.png?time=1549464152",
                    "taoqianggou_cancelremind_img": "http://5deli.com/View/index/img/wap/comm/taoqianggou_cancelremind_img.png?time=1549464152",
                    "goodssharestr_color": "FFFFFF",
                    "f_str": "",
                    "ico": "http://5deli.com/Upload/slide/1533007267_1_5.png",
                    "is_hide_fl": "0",
                    "is_hide_sharefl": "0",
                    "zhanwei": "fan",
                    "shop_on": "",
                    "yhq_on": "",
                    "price_str": "到手价",
                    "fanli_on": "on",
                    "weizhi_on": "",
                    "updates": "1",
                    "fanli_on1": "fanli"
                }
            ],
            sortList:[
                {
                    name: '综合',
                    type: 'zonghe',
                    
                },{
                    name: '人气',
                    type: 'popular',
                },{
                    name: '佣金',
                    type: 'commision'
                }
            ],
            sortImg: [
                {
                    text: '纵向排列',
                    imgurl: require('assets/img/home/leixing1.png'),
                },{
                    text: '横向排列',
                    imgurl: require('assets/img/home/leixing2.png'),
                }
            ],
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.handleType = this.handleType.bind(this)
        this.setWidth = this.setWidth.bind(this)
        this.liRef = ref => {this.refDom = ref}
    }
    // async componentWillMount() {
    //     const cateListRes = await ReqCateList()
    //     //更新主页最后部分列表显示的state
    //     if (cateListRes.success===1){
    //         const cateList = cateListRes.data
    //         this.setState({
    //         cateList
    //         })
    //     }
    // }
    
    componentDidMount(){
        this.setWidth()
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
        if(scrollTop>800){
            _this.setState({
                fixedClass: 'fixed',
                contentClass: 'show'
            })
        }else{
            _this.setState({
                fixedClass: '',
                contentClass: ''
            })
        }
    }

    //根据不同平台动态设置商品分类栏(.nav_ul)的宽度
    setWidth(){
        let ul = document.querySelector('ul.nav_ul')
        let {clientWidth} = this.refDom;            //55
        let length = this.state.cateList.length     //18
        ul.style.width = (clientWidth*length)+'px'; //990  
    }

    //点击不同平台(淘宝...)
    handleChange(key){
        this.setWidth()
        this.setState({
            webSite:key
        })
        /**
         * 
         let url = 'http://5deli.com/?mod=wap&act=goods_msg&ctrl=cate'
         axios.post(url).then(res=>{
             console.log(res)
             const cateList = res.data
             this.setState({
                 cateList
             })
         })
         .catch(error=>{
             console.log(error)
         })
         
         let suburl = `http://5deli.com/?mod=wap&act=wapgoods&ctrl=comm_goods&goods_type=${webSite}&cid=0&is_index=1`
         axios.get(suburl).then(res=>{
            console.log(res)
            const goodsList = res.data
            this.setState({
                goodsList
            })
        })
        .catch(error=>{
            console.log(error)
        })
         */
    }

    //点击不同分类
    handleClick(id){
        this.setState({
            menuNum: id
        })
        let webSite = this.state.webSite
        let url = `http://5deli.com/?mod=wap&act=wapgoods&ctrl=comm_goods&goods_type=${webSite}&cid=${id}&is_index=1`
        axios.get(url).then(res=>{
            console.log(res)
            const goodsList = res.data
            this.setState({
                goodsList
            })
        })
        .catch(error=>{
            console.log(error)
        })
    }

    //点击不同的排序方式
    handleSort(sortId){
        this.setState({
            sortId
        })
    }

    //点击切换不同的商品布局方式
    handleType(e){
        let targetImg = e.target.src
        let defaultImg = this.state.sortImg[0].imgurl
        let defaultTxt = this.state.sortImg[0].text
        if(targetImg===defaultImg){
            e.target.src =  this.state.sortImg[1].imgurl
            e.target.alt = this.state.sortImg[1].text
        }else{
            e.target.src =  defaultImg
            e.target.alt =  defaultTxt
        }
    }

    render() {
        let { cateList, menuNum, sortId, sortImg, sortList, goodsList, fixedClass, contentClass } = this.state
        let { tabs } = this.props
        return (
            <div className='Tab'>
                <div className={`ceilTop ${contentClass}`}></div>
                <div className={`ceil ${fixedClass}`}>
                    <Tabs 
                    tabPosition='top'
                    defaultActiveKey='buy_taobao'
                    onChange={this.handleChange} 
                    className='tab_head'
                    >
                    {
                        tabs.map(tab=>{
                            return (
                                <TabPane 
                                tab={tab.title} 
                                key={tab.goods_type}
                                />
                            )
                        })
                    }
                    </Tabs>
                    <div className={`tab_nav`}>
                        <div className='nav_cont'>
                            <ul className='nav_ul'> 
                            {
                                cateList.map(item=>{
                                    return (
                                        <li 
                                        key={item.id}
                                        cid={item.id}
                                        className='nav_li'
                                        ref={this.liRef}
                                        >
                                            <div 
                                            cid={item.id}
                                            className={`nav_card ${menuNum===item.id?'active':null}`} 
                                            onClick={()=>this.handleClick(item.id)}
                                            >
                                                <p className='nav_name'>{item.catename}</p>
                                            </div>
                                        </li>
                                    )
                                })
                            }
                            </ul>
                        </div>
                    </div>
                    <div className={`tab_bot`}>
                    {
                        sortList.map(item=>{
                        return (
                            <div className="bot_item" key={item.type}>
                                <span 
                                type={item.type}
                                className={`bot_name ${sortId===item.type?'active':null}`}
                                onClick={()=>this.handleSort(item.type)}
                                >{item.name}</span>
                            </div>
                        )
                        })
                    }
                        <div className="bot_Sitem" cid='popular'>
                            <img 
                            src={sortImg[0].imgurl} 
                            alt={sortImg[0].text}
                            onClick={this.handleType}
                            />
                        </div>

                    </div>

                </div>
                <div className='tab_goodsList'>
                    <ul className='list_ul'>
                    {
                        goodsList.map(item=>{
                            return (
                                <li className='list_li' key={item.id}>
                                    <a href='##' className='goods_pic'>
                                        <img src={item.goods_img} alt={item.goods_title} className='goods_img'/>
                                    </a>
                                    <div className='goods_inf'>
                                        <div className='inf_item'>
                                            <p className='goods_name'>
                                                <img src={item.shop_img} alt={item.shop_type} className='ditch_icon'/>
                                                <span>{item.goods_title}</span>
                                            </p>
                                        </div>
                                        <div className='inf_item'>
                                            <div className='quan on fanli'>
                                                <img src={item.goods_fanli_bjimg} alt={item.shop_type}/>
                                                <p className='fanli_font col'>{item.fcommission}</p>
                                            </div>
                                        </div>
                                        <div className='inf_item item_sale'>
                                            <p className="sale_text col">到手价:<span className="price_font">￥{item.goods_price}</span></p>
                                        </div>
                                        <div className='inf_item cost_price'>
                                            <p className="sale_text1">京东价:￥{item.goods_cost_price}</p>
                                        </div>
                                        <div className='hot_sale'>
                                            <img src={item.goods_sales_ico} alt={item.shop_type} className='hot_img'/>
                                            <span className="hot_text ">热销{item.goods_sales}</span>
                                        </div>
                                    </div>
                                </li>
                            )
                        })
                    }
                    </ul>
                    <Spinner/>
                </div>
            </div>
        )
    }
}

export default Tab