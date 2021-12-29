import React, { Component } from 'react'
import List from '.'
import src1 from '@/assets/img/play/1.jpg'
import src2 from '@/assets/img/play/2.jpg'
import src3 from '@/assets/img/play/3.jpg'
import src4 from '@/assets/img/play/4.jpg'
import src5 from '@/assets/img/play/5.jpg'
import src6 from '@/assets/img/play/6.jpg'
import src7 from '@/assets/img/play/7.jpg'
import src8 from '@/assets/img/play/8.jpg'

export default class ListTest extends Component {
    state = {
        list: [
            { id: 1, src: src1 },
            { id: 2, src: src2 },
            { id: 3, src: src3 },
            { id: 4, src: src4 },
            { id: 5, src: src5 },
            { id: 6, src: src6 },
            { id: 7, src: src7 },
            { id: 8, src: src8 },
        ]
    }
    render() {
        return (
            <>
                <List list={this.state.list} />
            </>
        )
    }
}
