import React, { Component } from 'react'
import { Link } from 'umi'
import "./index.css"

export default class Mod extends Component {

    static defaultProps = {
        modWidth: 183,
        modHeight: 257,
        style: {},
        data: {}
    }

    render() {
        const mod = this.props.mod.data;
        const mods = mod.map(item => (
            <li className="mod-item" key={item.id} style={{
                width: this.props.modWidth,
                height: this.props.modHeight,
                ...this.props.style
            }}>
                <Link to={this.props.mod.router + "/" + item.id} className="figure">
                    <img src={item.thumb} alt="" />
                </Link>
                <div className="author">
                    <span>
                        {item.author}
                    </span>
                    <span>
                        {item.macaron}
                    </span>
                </div>
                <div className="cartoon-name" style={{color:item.color}}>
                    {item.modName}
                </div>
            </li>
        ))
        return (
            <div className="mod-list">
                <h2>
                    <span>{this.props.mod.modTitle}</span>
                    <span className={this.props.isShow ? "more" : "more hidden"}><Link to="/more">更多</Link></span>
                </h2>
                <ul>
                    {mods}
                </ul>
            </div>

        )
    }
}
