import React from 'react'
import './GoodsFeature.scss'

let GoodsFeature = () =>{
    return (
        <div className='GoodsFeature'>
            <a href='##'>
                <img src={ require("assets/img/home/feature.png") } alt='商品特写'/>
            </a>
        </div>
    )
}

export default GoodsFeature