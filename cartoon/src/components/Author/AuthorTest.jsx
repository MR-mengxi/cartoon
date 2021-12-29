import React, { Component } from 'react'
import Author from '.'
import src1 from '@/assets/img/author/1.jpg'
import src2 from '@/assets/img/author/2.jpg'
import src3 from '@/assets/img/author/7.jpg'
import src4 from '@/assets/img/author/8.jpg'
import src5 from '@/assets/img/author/9.jpg'
import src6 from '@/assets/img/author/10.jpg'

export default class AuthorTest extends Component {
    state = {
        author: [
            { id: 1, src: src1, name: "卡哇伊", desc: "" },
            { id: 2, src: src2, name: "", desc: "" },
            { id: 3, src: src3, name: "", desc: "" },
            { id: 4, src: src4, name: "", desc: "" },
            { id: 5, src: src5, name: "", desc: "" },
            { id: 6, src: src6, name: "", desc: "" },
        ]
    }
    render() {
        return (
            <>
                <Author author={this.state.author} />
            </>
        )
    }
}
