import React, { Component } from 'react'
import './HeaderNav.scss'

class HeaderNav extends Component {
    constructor (){
        super();
        this.state = {
            title_text: '优选',
            filter_text: '筛选',
            filter_img: require('assets/img/header/filter.png')
        }
    }

    render(){
        let {title_text,filter_text,filter_img} = this.state
        return (
            <div className='HeaderNav'>
                <div className='HeaderNav_box'>
                    <p className='HeaderNav_title'>
                        <span className='col'>{title_text}</span>
                    </p>
                    <a href='##' className='filter'>
                        <span>{filter_text}</span>
                        <img src={filter_img} alt={filter_text}/>
                    </a>
                </div>
            </div>
        )
    }
}

export default HeaderNav