import React, {Component} from 'react'

import Main from 'components/contanier/Contanier'

class tb extends Component {
    constructor(){
        super();
        this.state = {
            hot: [
                {
                    keyword: '运动户外',
                    imgurl: require('assets/img/tb/huwai.png'),
                    goodsname: '户外'
                },{
                    keyword: '鞋包',
                    imgurl: require('assets/img/tb/xiebao.png'),
                    goodsname: '鞋包'
                },{
                    keyword: '母婴、玩具、乐器',
                    imgurl: require('assets/img/tb/muying.png'),
                    goodsname: '母婴'
                },{
                    keyword: '男装',
                    imgurl: require('assets/img/tb/nanzhuang.png'),
                    goodsname: '男装'
                },{
                    keyword: '女装',
                    imgurl: require('assets/img/tb/nvzhuang.png'),
                    goodsname: '女装'
                },{
                    keyword: '汽车用品',
                    imgurl: require('assets/img/tb/qipei.png'),
                    goodsname: '汽配'
                },{
                    keyword: '化妆护理',
                    imgurl: require('assets/img/tb/huazhuang.png'),
                    goodsname: '化妆'
                },{
                    keyword: '图书音像',
                    imgurl: require('assets/img/tb/tushu.png'),
                    goodsname: '图书'
                },
            ]
        }
    }
    
    render(){
        let {hot} = this.state
        return (
            <div className='tb'>
                <Main hot={hot}/>
            </div>
        )
    }
}

export default tb