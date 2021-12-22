import React, { Component } from 'react'
import NavMenu from './NavMenu'

export default class NavMenuContainer extends Component {
    state = {
        menu: [
            { link: "首页", router: "/" },
            { link: "动漫剧本", router: "/play" },
            { link: "漫画", router: "/cartoon" },
            // {link:"",router:"/"},
            { link: "同人制作", router: "/fancreate" },
            { link: "IP开发", router: "/ip" },
            { link: "手办周边", router: "/peripheral" },
            { link: "作者小屋", router: "/forum" },
        ]
    }
    render() {
        return (
            <>
                <NavMenu menu={this.state.menu} />
            </>
        )
    }
}
