import React, {Component} from 'react'
import './Contanier.scss'

class Contanier extends Component {
    constructor(){
        super();
        this.state = {
            
        }
    }

    render(){
        let {hot} = this.props
        return (
            <div className='Contanier'>
                <div className='top'>
                    <img src={require('assets/img/tb/1534744480_1_1.png')} alt='' className='shop_bk_img'/>
                    <div className='top_sbox'>
                        <div className='top_search'>
                            <input type='text' style={{margin:0}} placeholder='搜索商品' defaultValue='男装' className="top_search_input"/>
                            <img src={require('assets/img/tb/shop_search@2x.png')} alt='' className="search_img"/>
                            <input type='button' className="search_btn"  defaultValue='搜索'/>
                        </div>
                    </div>
                </div>
                <div className='main'>
                    <div className='hot_nav'>
                        <img src={require('assets/img/tb/shop_classly@2x.png')} alt='' className='hot_nav_icon'/>
                        <span className='hot_nav_name'>商品分类</span>
                    </div>
                    <div className='hot_cont hot_swiper'>
                        <div className='swiper-wrapper'>
                            <ul className='hot_ul swiper-slide'>
                            {
                                hot.map(item=>{
                                    return (
                                        <li className='hot_li' key={item.keyword}>
                                            <a href='##' className='li_bread'>
                                                <div className='hot_pic'>
                                                    <img src={item.imgurl} alt={item.keyword}/>
                                                </div>
                                                <p className='hot_name'>{item.goodsname}</p>
                                            </a>
                                        </li>
                                    )
                                })
                            }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contanier