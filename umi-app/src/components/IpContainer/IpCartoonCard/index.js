import React, { Component } from 'react'

export default class IpCartoonCard extends Component {
    render() {
        const cards = this.props.cards.map(item => (
            <li key={item.id}>
                <div className="cover">
                    <img src={item.card} alt="" />
                </div>
                <div className="desc">
                    {item.desc}
                </div>
                <div className="title">
                    {item.author}
                </div>
            </li>
        ))
        return (
            <>
             {cards}   
            </>
        )
    }
}
