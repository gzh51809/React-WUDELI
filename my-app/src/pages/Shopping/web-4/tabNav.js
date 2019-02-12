import React, {Component} from 'react'
import './tabNav.scss'
import axios from 'axios'
class TabNav extends Component {
    constructor(){
        super();
        this.state = {
            menuNum: 0,
            goodsList: [
                {}
            ]
        }
        this.handleClick = this.handleClick.bind(this)
        this.setWidth = this.setWidth.bind(this)
        this.liRef = ref => {this.refDom = ref}
    }
    componentWillMount(){
        let url = `http://5deli.com/?mod=wap&act=hot&ctrl=getshangcheng&cid=0`
        axios.get(url).then(res=>{
            console.log(res)
            const goodsList = res.data
            this.setState({
                goodsList
            })
        })
        .catch(error=>{
            console.log(error)
        })
    }
    componentDidMount(){
        this.setWidth()
        
    }
    //在卸载的时候对所有的操作进行清除
    componentWillUnmount(){
        this.setState = (state,callback)=>{
            return;
        };
    }
    //根据不同平台动态设置商品分类栏(.nav_ul)的宽度
    setWidth(){
        let ul = document.querySelector('ul.nav_ul')
        let {clientWidth} = this.refDom;            
        let length = this.props.cateList.length    
        ul.style.width = (clientWidth*length)+'px'; 
    }

    //点击不同分类
    handleClick(id){
        this.setState({
            menuNum: id
        })
        let url = `http://5deli.com/?mod=wap&act=hot&ctrl=getshangcheng&cid=${id}`
        axios.get(url).then(res=>{
            console.log(res)
            const goodsList = res.data
            this.setState({
                goodsList
            })
        })
        .catch(error=>{
            console.log(error)
        })
    }
    render(){
        let {menuNum} = this.state
        let {cateList} = this.props
        return (
            <div className={`TabNav`}>
                <div className='nav_cont'>
                    <ul className='nav_ul'> 
                    {
                        cateList.map(item=>{
                            return (
                                <li 
                                key={item.id}
                                cid={item.id}
                                className='nav_li'
                                ref={this.liRef}
                                >
                                    <div 
                                    cid={item.id}
                                    className={`nav_card ${menuNum===item.id?'active':null}`} 
                                    onClick={()=>this.handleClick(item.id)}
                                    >
                                        <p className='nav_name'>{item.catename}</p>
                                    </div>
                                </li>
                            )
                        })
                    }
                    </ul>
                </div>
            </div>
        )
    }
}
export default TabNav