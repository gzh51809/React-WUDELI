import React, {Component} from 'react'

import Main from 'components/contanier/Contanier'

class pdd extends Component {
    constructor(){
        super();
        this.state = {
            hot: [
                {
                    keyword: '美食',
                    imgurl: require('assets/img/pdd/meishi.png'),
                    goodsname: '美食'
                },{
                    keyword: '鞋包',
                    imgurl: require('assets/img/jd/huwai.png'),
                    goodsname: '鞋包'
                },{
                    keyword: '母婴',
                    imgurl: require('assets/img/pdd/muying.png'),
                    goodsname: '母婴'
                },{
                    keyword: '水果',
                    imgurl: require('assets/img/pdd/shuiguo.png'),
                    goodsname: '水果'
                },{
                    keyword: '服饰',
                    imgurl: require('assets/img/pdd/fushi.png'),
                    goodsname: '服饰'
                },{
                    keyword: '百货',
                    imgurl: require('assets/img/pdd/baihuo.png'),
                    goodsname: '百货'
                },{
                    keyword: '美妆',
                    imgurl: require('assets/img/pdd/meizhuang.png'),
                    goodsname: '美妆'
                },{
                    keyword: '电器',
                    imgurl: require('assets/img/pdd/dianqi.jpg'),
                    goodsname: '电器'
                },
            ]
        }
    }
    
    render(){
        let {hot} = this.state
        return (
            <div className='pdd'>
                <Main hot={hot}/>
            </div>
        )
    }
}

export default pdd