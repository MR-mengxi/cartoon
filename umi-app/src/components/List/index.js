import React, { Component } from 'react'
import './index.css'

export default class Lis extends Component {
    render() {
        const lis = [];
        const news = this.props.data.map((item, i) => {
            if (i === 0 || i === 1 || i === 2) {
                lis.push(
                    <li key={item.id}>
                        <span className="number on">{item.id}</span>
                        <a href="">
                            {item.news}
                        </a>
                    </li>
                )
            }
            else{
                lis.push(
                    <li key={item.id}>
                        <span className="number">{item.id}</span>
                        <a href="">
                            {item.news}
                        </a>
                    </li>
                )
            }
        })
        return (
            <ul className="news">
                {lis}
            </ul>
        )
    }
}