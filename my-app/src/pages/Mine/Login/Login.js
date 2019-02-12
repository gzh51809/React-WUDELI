import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import './Login.scss'

import HeadBar from '../Head/Head'

class Login extends Component {
    constructor(){
        super();
        this.state = {
            title: '登录'
        }
        this.backClick = this.backClick.bind(this)
    }
    
    backClick(){
        this.props.history.go(-1)
    }
    render(){
        let {title} = this.state
        return (
            <div className='Login'>
                <form method='post'>
                    <HeadBar title={title} back={this.backClick}/>
                    <div className='Contant'>
                        <div className='input-div'>
                            <input className="cont-input" name="loginname" type='text' placeholder="请输入登陆账号" autoComplete="off"/>
                        </div>
                        <div className='input-div'>
                            <input className="cont-input" name="password" type='password' placeholder="请输入密码" autoComplete="off"/>
                        </div>
                        <div className='checkbox-div'>
                            <label className='choose-label'>
                                <input className="checkbox-input" name='auto-login' type="checkbox"/>
                            </label>
                            <p className="checkbox-input-text">自动登录</p>
                        </div>
                        <div className='button-div'>
                            <button className='cont-btn' name="loginbtn" type="submit" defaultValue='submit'>登录</button>
                        </div>
                        <div className='rem-div'>
                            <a className="rem-a" href='javascript:;'>
                                <p className="rem-text">忘记密码</p>
                            </a>
                            <a className='reg-a' href='javascript:;'>
                                <p className="reg-text">注册新用户</p>
                            </a>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default withRouter(Login)