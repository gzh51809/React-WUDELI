import React from 'react'
import './Feature.scss'

const Feature = () =>{
    return (
        <div className='Feature'>
            <div className='adver_box'>
                <a href='##'>
                    <img src={require('assets/img/list/feature.png')} alt='广告'/>
                </a>
            </div>
        </div>
    )
}

export default Feature