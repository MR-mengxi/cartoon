import React, { Component } from 'react'
import styles from './index.css'
import { connect } from "umi"
import { routerRedux } from 'dva/router'

class Login extends Component {
    state = {
        user: "",
        pwd: ""
    }

    login(loginId, loginPwd) {
        this.props.handleLogin && this.props.handleLogin(loginId, loginPwd);
    }

    render() {
        return (
            <div className={styles["login-container"]}>
                <div className={styles["login"]}>
                    <div className={styles["login-item"]}>
                        <label>账号：</label>
                        <input placeholder="请输入账号" value={this.state.user} onChange={(e) => {
                            this.setState({
                                user: e.target.value
                            })
                        }} type="text" />
                    </div>
                    <div className={styles["login-item"]}>
                        <label>密码：</label>
                        <input placeholder="请输入密码" value={this.state.pwd} onChange={(e) => {
                            this.setState({
                                pwd: e.target.value
                            })
                        }} type="password" />
                    </div>
                    <div className={styles["login-item"]}>
                        <button onClick={() => {
                            this.login(this.state.user, this.state.pwd)
                        }}>登录</button>
                    </div>
                </div>
            </div>
        )
    }
}


const mapDispatchToProps = dispatch => ({
    handleLogin(loginId, loginPwd) {
        dispatch({
            type: "admin/setUser",
            payload: {
                loginId,
                loginPwd
            }
        })
        dispatch({
            type: "admin/login"
        });
        dispatch(routerRedux.push("/"));
    }
})

export default connect(null, mapDispatchToProps)(Login);
