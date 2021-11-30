import React, { Component } from 'react'
import './index.css'


/**
 * 需要传递的属性：
 * 1. current：当前页码
 * 2. total：总量
 * 3. limit：页容量，每页显示的数据量
 * 4. panelNumber：数字页码最多显示多少个
 * 5. onPageChange：页码改变时触发的事件
 */
export default class Pager extends Component {
    // 计算总页数 
    getPageNumber() {
        return Math.ceil(this.props.total / this.props.limit)
    }

    // 计算显示的最小数字
    getMinNumber() {
        let min = this.props.current - Math.floor(this.props.panelNumber / 2);
        if (min < 1) {
            min = 1;
        }
        return min;
    }


    // 计算显示的最大数字
    getMaxNumber(min, pageNumber) {
        let max = min + this.props.panelNumber - 1;
        if (max > pageNumber) {
            max = pageNumber;
        }
        return max;
    }

    /**
     * 跳转到某一页
     * @param {*} target 
     */
    toPage(target) {
        if (this.props.current === target) {
            return;
        }
        this.props.onPageChange && this.props.onPageChange(target);
    }

    render() {
        const pageNumber = this.getPageNumber();
        if (pageNumber === 0) {
            return null;
        }
        const min = this.getMinNumber();
        const max = this.getMaxNumber(min, pageNumber);
        const numbers = [];
        for (let i = min; i <= max; i++) {
            numbers.push(
                <span
                    className={i === this.props.current ? "item active" : "item"}
                    key={i}
                    onClick={() => { this.toPage(i) }}
                >
                    {i}
                </span>)
        }
        return (
            <>
                <span
                    className={this.props.current === 1 ? "item disabled" : "item"}
                    onClick={() => { this.toPage(1) }}
                >首页</span>
                <span
                    className={this.props.current === 1 ? "item disabled" : "item"}
                    onClick={() => { this.toPage(this.props.current - 1 < 1 ? 1 : this.props.current - 1) }}
                >上一页</span>
                {numbers}
                <span
                    className={this.props.current === pageNumber ? "item disabled" : "item"}
                    onClick={() => { this.toPage(this.props.current + 1 > pageNumber ? pageNumber : this.props.current + 1) }}
                >下一页</span>
                <span
                    className={this.props.current === pageNumber ? "item disabled" : "item"}
                    onClick={() => { this.toPage(pageNumber) }}
                >尾页</span>
                <span
                    className="current">{this.props.current}</span>
                /
                <span>
                    {pageNumber}
                </span>
            </>
        )
    }
}
