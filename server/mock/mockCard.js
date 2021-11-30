const Mock = require("mockjs");

const result = Mock.mock({
    "datas|4": [
        {
            "id|+1": 1,
            bg: "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar6.jpg",
            title: "@ctitle",
            subTitle: "@cparagraph(1,2)"
        }
    ]
}).datas;

const Card = require("../models/Card");
Card.bulkCreate(result);