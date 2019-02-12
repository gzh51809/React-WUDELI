import React, { Component } from 'react'
//引入组件
import HeaderTab from './HeaderTab/HeaderTab'
import FooterNav from 'components/footer/FooterNav'

class Shopping extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <HeaderTab/>
                <FooterNav/>
            </div>
        )
    }
}

export default Shopping