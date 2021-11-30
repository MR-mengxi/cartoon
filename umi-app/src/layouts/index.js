import React from 'react'
import Header from '@/components/Header'

export default function index(props) {
    const nav = [
        { id: 1, navTitle: "首页", to: "/" },
        { id: 2, navTitle: "动漫剧本", to: "/play" },
        { id: 3, navTitle: "漫画", to: "/cartoon" },
        { id: 4, navTitle: "同人创作", to: "/fancreate" },
        { id: 5, navTitle: "IP开发", to: "/ip" },
        { id: 6, navTitle: "手办周边", to: "/peripheral" },
        { id: 7, navTitle: "作者小屋", to: "/forum" },
    ]
    if (props.location.pathname === "/login") {
        return props.children;
    }
    else {
        return (
            <>
                <Header nav={nav} />
                {props.children}
            </>
        )
    }
}
