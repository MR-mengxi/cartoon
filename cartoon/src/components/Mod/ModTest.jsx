import React, { Component } from 'react'
import Mod from '.'
import src1 from '@/assets/img/mod/1.webp'
import src2 from '@/assets/img/mod/2.webp'
import src3 from '@/assets/img/mod/3.webp'
import src4 from '@/assets/img/mod/4.webp'
import src5 from '@/assets/img/mod/5.webp'
import src6 from '@/assets/img/mod/6.webp'
import src7 from '@/assets/img/mod/7.webp'
import src8 from '@/assets/img/mod/8.webp'

export default class ModTest extends Component {
    state = {
        data: [
            { id: 1, title: "草莓棉花糖", time: "第20话", thumb: src1 },
            { id: 2, title: "工作细胞", time: "第12话", thumb: src2 },
            { id: 3, title: "中二病也要谈恋爱", time: "全集20", thumb: src3 },
            { id: 4, title: "肥志百科", time: "第1话", thumb: src4 },
            { id: 5, title: "火云", time: "已完结", thumb: src5 },
            { id: 6, title: "阿衰 第5季", time: "第24话", thumb: src6 },
            { id: 7, title: "令人害羞的那件事", time: "第5话", thumb: src7 },
            { id: 8, title: "兔子已就位", time: "第13话", thumb: src8 },
            { id: 9, title: "兔子已就位", time: "第13话", thumb: src8 },
            { id: 10, title: "工作细胞", time: "第13话", thumb: src2 },
            { id: 11, title: "肥志百科", time: "第13话", thumb: src4 },
            { id: 12, title: "草莓棉花糖", time: "第13话", thumb: src1 },
            { id: 13, title: "中二病也要谈恋爱", time: "第13话", thumb: src3 },
            { id: 14, title: "阿衰 第5季", time: "第13话", thumb: src6 },
            { id: 15, title: "火云", time: "第13话", thumb: src5 },
        ]
    }
    render() {
        return (
            <div>
                <Mod data={this.state.data} />
            </div>
        )
    }
}
