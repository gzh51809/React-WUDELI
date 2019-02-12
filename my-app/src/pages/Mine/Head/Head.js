import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import './Head.scss'

const HeadBar = (props) =>{
    let {title,back} = props
    return (
        <div className='HeadBar' onClick={back}>
            <a href='javascript:;'>
                <img  className='head-return-img' src={require('assets/img/header/return.png')} alt='返回上一级'/>
            </a>
            <p className="head-title-text">{title}</p>
        </div>
    )
}

export default withRouter(HeadBar)