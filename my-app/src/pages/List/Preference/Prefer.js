import React from 'react'
import './Prefer.scss'

const Prefer = () =>{
    return (
        <div className='Prefer'>
            <div className='prefer_fl'>
                <div className='prefer_goods_inf'>
                    <p className='prefer_goods_title col'>优选图文位</p>
                    <p className='preder_goods_name'>优惠券</p>
                </div>
                <div className='prefer_goods_pic'>
                    <img className='prefer_goods_img' src={require('assets/img/list/prefer_fl.png')} alt='' />
                </div>
            </div>
            <div className='prefer_fr'>
                <div className='prefer_item'>
                    <div className='prefer_goods_inf prefer_fr_inf'>
                        <p className='prefer_goods_title col'>优选图文位</p>
                        <p className='preder_goods_name'>优惠券</p>
                    </div>
                    <div className='prefer_goods_pic'>
                        <img className='prefer_goods_img' src={require('assets/img/list/prefer_fr_1.png')} alt='' />
                    </div>
                </div>
                <div className='prefer_item'>
                    <div className='prefer_goods_inf prefer_fr_inf'>
                        <p className='prefer_goods_title col'>优选图文位</p>
                        <p className='preder_goods_name'>优惠券</p>
                    </div>
                    <div className='prefer_goods_pic'>
                        <img className='prefer_goods_img' src={require('assets/img/list/prefer_fr_2.png')} alt='' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Prefer