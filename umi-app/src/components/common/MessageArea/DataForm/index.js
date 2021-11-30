import React, { Component } from 'react'
import  styles from './index.css'

export default class DataForm extends Component {

    state = {
        error: {
            nickname: '',
            content: ''
        }
    }

    getText = el => {
        this.text = el;
    }

    getArea = el => {
        this.area = el;
    }

    handleSumbit = e => {
        e.preventDefault();
    }

    onSubmit() {
        const nickname = this.text.value ? "" : "请填写昵称";
        const content = this.area.value ? "" : "请填写内容";
        const newError = {
            nickname,
            content
        }
        this.setState({
            ...this.state,
            error: newError
        });
        // 有错误
        if (!this.text.value || !this.area.value) {
            return;
        }
        const formData = {
            nickname: this.text.value,
            content: this.area.value
        }
        this.props.onValueChange && this.props.onValueChange(formData);
    }

    render() {
        return (
            <form onSubmit={this.handleSumbit} id="data-form-container" className={styles["data-form-container"]}>
                <div className={styles["form-item"]}>
                    <div className={styles["input-area"]}>
                        <input ref={this.getText} type="text" placeholder="用户昵称" />
                        <span className={styles["tip"]}>0/10</span>
                    </div>
                    <div className={styles["error"]}>
                        {this.state.error.nickname}
                    </div>
                </div>
                <div className={styles["form-item"]}>
                    <div className={styles["text-area"]}>
                        <textarea ref={this.getArea} placeholder="输入内容">
                        </textarea>
                        <span className={styles["tip"]}>0/300</span>
                    </div>
                    <div className={styles["error"]}>
                        {this.state.error.content}
                    </div>
                </div>
                <div className={styles["form-item"]}>
                    <div className={styles["button-area"]}>
                        <button onClick={() => {
                            this.onSubmit()
                        }}>提交</button>
                    </div>
                </div>
            </form>
        )
    }
}
