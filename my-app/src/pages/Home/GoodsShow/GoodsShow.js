import React from 'react'

import './GoodsShow.scss'

let GoodsShow = () =>{
    return (
        <div className='GoodsShow'>
            <div className='left_cont'>   
                <img className='graphic_tit' src={ require("assets/img/home/rob.png") } alt='今日必抢'/>
                <p>今日必抢</p>
                <a href='##' className='graphic1_img'>
                    <img src={ require("assets/img/home/today-rob.png") } alt='今日必抢'/>
                </a>
            </div>
            <div className='right_cont'>
                <div className='top_cont'>
                    <div className='topLeft_cont'>
                        <img className='graphic_tit' src={ require("assets/img/home/new.png") } alt='今日上新'/>
                        <p>今日上新</p>
                    </div>
                    <a href='##' className='graphic2_img'>
                        <img src={ require("assets/img/home/today-new.png") } alt='今日上新'/>
                    </a>
                </div>
                <div className='bottom_cont'>
                    <div className='botLeft_cont'>
                        <img className='graphic_tit' src={ require("assets/img/home/discount.png") } alt='白菜价'/>    
                        <p>白菜价</p>
                        <a href='##' className='graphic3_img'>
                            <img src={ require("assets/img/home/today-discount.png") } alt='白菜价'/>  
                        </a>
                    </div>
                    <div className='botRight_cont'>
                        <img className='graphic_tit' src={ require("assets/img/home/brand.png") } alt='大牌驾到'/>    
                        <p>大牌驾到</p>
                        <a href='##' className='graphic3_img'>
                            <img src={ require("assets/img/home/today-brand.png") } alt='大牌驾到'/>  
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GoodsShow