import React, { Component } from 'react'

import './Mall.scss'

class Mall extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        let { ads } = this.props
        return (
            <div className={ads[0].cls}>
            {
                ads.map(item=>{
                    return (
                        <a href='##' key={item.idx}>
                            <img src={item.imgurl} alt={item.text}/>
                        </a>
                    )
                })
            }
            </div>
        )
    }
}

export default Mall