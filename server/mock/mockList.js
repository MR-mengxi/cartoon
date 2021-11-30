const Mock = require("mockjs");

const result = Mock.mock({
    datas: [
        {
            id: 1,
            news:"《卡哇伊》出售动画版权"
        },
        {
            id: 2,
            news:"也子新作《夜笙》上线即售出动漫改编权"
        },
        {
            id: 3,
            news:"一只小礼帽的线下签售会在京顺利举行"
        },
        {
            id: 4,
            news:"运动题材漫画《三分》进行漫改，让我们期待再次与篮球的邂逅"
        },
        {
            id: 5,
            news:"IP共创计划正式启动，首批入围的作品有《诡术》"
        },
        {
            id: 6,
            news:"我爱喝青梅绿茶开通作者小屋，并于今日与粉丝进行首场互动"
        },
        {
            id: 7,
            news:"网友小白与作者清风的跨时空交流，同人曲《清风》获得作者本人的马卡龙小铃铛"
        },
        {
            id: 8,
            news:"本站将于近期上线个人作者创作计划"
        },
        {
            id: 9,
            news:"梦夕《漫画家》获得首个马卡龙称号"
        },
        {
            id: 10,
            news:"剧本《红色雾霾》与漫画作者筱筱达成合作协议，将共同参与漫画《红色雾霾》的创作"
        },
    ]
}).datas;

const List  = require("../models/List");
List.bulkCreate(result);