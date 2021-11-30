import React from 'react'
import formatDate from '@/utils/formatDate'
import "./index.css"

export default function List(props) {
    const lis = props.datas && props.datas.map((item, i) => (
        <li className="comment-item" key={item.id}>
            <img className="avatar" src={item.avatar} alt="" />
            <div className="data">
                <div className="nickname">
                    {item.nickname}
                </div>
                <div className="content">
                    {item.content}
                </div>
                <div className="time">
                    {formatDate(item.time,true)}
                </div>
            </div>
        </li>
    ))
    return (
        <>
            {lis}
        </>
    )
}
