import React, {Component} from 'react'

import { Carousel } from 'antd'
import './Swiper.scss'
class Swiper extends Component {
    constructor(){
        super();
        this.state = {
            
        }
    }

    render(){
        let { banner } = this.props; 
        return(
            <div className='Swiper'>
                <Carousel autoplay>
                    {
                        banner.map(item=>{
                            return <div key={item.text}>
                                <img src={item.imgurl} alt={item.text}/>
                            </div>
                        })
                    }
                </Carousel>
            </div>
        )
    }
}

export default Swiper;