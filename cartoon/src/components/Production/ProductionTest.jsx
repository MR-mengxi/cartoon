import React, { Component } from 'react'
import Production from '@/components/Production'
import src1 from '@/assets/production/1.webp'
import src2 from '@/assets/production/2.webp'
import src3 from '@/assets/production/3.webp'
import src4 from '@/assets/production/4.webp'

export default class ProductionTest extends Component {
    state = {
        data: [
            { id: 1, title: "草莓棉花糖", time: "第20话", thumb: src1 },
            { id: 2, title: "工作细胞", time: "第12话", thumb: src2 },
            { id: 3, title: "中二病也要谈恋爱", time: "全集20", thumb: src3 },
            { id: 4, title: "肥志百科", time: "第1话", thumb: src4 },
        ]
    }
    render() {
        return (
            <div style={{
                width:990,
                margin:"0 auto"
            }}>
                <Production data={this.state.data} />
            </div>
        )
    }
}
