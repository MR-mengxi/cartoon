import React, { Component } from 'react'
import Rank from '.'

export default class RankTest extends Component {
    state = {
        rank:[
            {id:1,msg:"作者也子首部悬疑漫画《夜笙》将于今日上午10点发布，请动动手指留下你的叮当币吧"},
            {id:2,msg:"《三分》的同人曲三分热血归来"},
            {id:3,msg:"在阳光下生长的人们，在黑暗里远行着"},
            {id:4,msg:"我们渴望着在不为人知的岁月里，有着惊世骇俗的经历。"},
            {id:5,msg:"生如夏花，愿世界如你我一般，这样寂静。"},
            {id:6,msg:"夜晚升起的时候，每一个星光都会洒满大地。"},
            {id:7,msg:"一只小礼帽的线下签售会在京顺利举行"},
            {id:8,msg:"运动题材漫画《三分》进行漫改，让我们期待再次与篮球的邂逅"},
            {id:9,msg:"IP共创计划正式启动，首批入围的作品有《诡术》"},
            {id:10,msg:"《卡哇伊》出售动画版权"},

        ]
    }
    render() {
        return (
            <>
                <Rank rank={this.state.rank} />     
            </>
        )
    }
}
