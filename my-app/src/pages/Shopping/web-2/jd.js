import React, {Component} from 'react'

import Main from 'components/contanier/Contanier'

class jd extends Component {
    constructor(){
        super();
        this.state = {
            hot: [
                {
                    keyword: '珠宝首饰',
                    imgurl: require('assets/img/jd/zhubao.png'),
                    goodsname: '珠宝首饰'
                },{
                    keyword: '手机',
                    imgurl: require('assets/img/jd/shouji.png'),
                    goodsname: '手机'
                },{
                    keyword: '艺术品',
                    imgurl: require('assets/img/jd/yishupin.png'),
                    goodsname: '艺术品'
                },{
                    keyword: '家庭清洁/纸品',
                    imgurl: require('assets/img/jd/qingjiepin.jpg'),
                    goodsname: '家庭清洁/纸品'
                },{
                    keyword: '服饰内衣',
                    imgurl: require('assets/img/jd/fushineiyi.png'),
                    goodsname: '服饰内衣'
                },{
                    keyword: '美妆个护',
                    imgurl: require('assets/img/jd/meizhuang.png'),
                    goodsname: '美妆个护'
                },{
                    keyword: '运动户外',
                    imgurl: require('assets/img/jd/huwai.png'),
                    goodsname: '运动户外'
                },{
                    keyword: '母婴',
                    imgurl: require('assets/img/jd/muying.png'),
                    goodsname: '母婴'
                },
            ]
        }
    }
    
    render(){
        let {hot} = this.state
        return (
            <div className='jd'>
                <Main hot={hot}/>
            </div>
        )
    }
}

export default jd