import React from 'react'
import './index.css'

export default function Layout(props) {
    return (
        <div className="layout" style={{
            width: props.minWidth,
            height:props.minHeight,
            ...props.style
        }}>
            <div className="main" style={{
                width: props.mainWidth
            }}>
                {props.children}
            </div>
            <div className="aside-right" style={{
                width: props.rightWidth,
                marginLeft: props.gap
            }}>
                {props.right}
            </div>
        </div>
    )
}


Layout.defaultProps = {
    minWidth: 1100,
    mainWidth: 603,
    rightWidth: 200,
    gap: 0,
    style: {}
}