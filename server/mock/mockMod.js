const Mock = require("mockjs");

const result = Mock.mock({
    "datas|75": [
        {
            "id|+1": 1,
            "modName|1": ["夜笙", "阳光下", "卡哇伊", "三分", "诡术", "漫画家", "红色雾霾", "二十四时", "筱筱"],
            color: "#f1707d",
            "thumb|1": [
                "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar6.jpg",
                "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar4.jpg",
                "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar8.jpg",
                "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar2.jpg",
            ],
            "author|1": ["也子", "一只小礼帽", "清风不解", "会说话的小鬼", "铁锅烙饼", "梦过天涯", "梦夕", "随风", "谁是谁非", "三分", "茶壶", "我爱喝青梅绿茶"],
            "macaron|0-100": 0,
            desc:"@cparagraph(1,5)"
        }
    ]
}).datas;

const Mod = require("../models/Mod");
Mod.bulkCreate(result);