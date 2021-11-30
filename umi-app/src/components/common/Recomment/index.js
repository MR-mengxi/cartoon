import React, { Component } from 'react'
import './index.css'

export default class Recomment extends Component {
    render() {
        const lis = this.props.author.map(it=>(
            <li key={it.id} className="author-item">
                <a href="" className="author-img">
                    <img src={it.avatar} alt="" />
                </a>
                <div className="author-name">
                    {it.author}
                </div>
            </li>
        ))
        return (
           <ul className="author-list">
               {lis}
           </ul>
        )
    }
}
