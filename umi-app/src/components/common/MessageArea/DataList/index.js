import React from 'react'
import List from '../List'
import "./index.css"

export default function Comment(props) {
    return (
        <div className="comment-container">
            <div className="comment-title">评论列表({props.datas.total})</div>
            <ul className="comment-list">
                <List datas={props.datas.datas} />
            </ul>
        </div>
    )
}
