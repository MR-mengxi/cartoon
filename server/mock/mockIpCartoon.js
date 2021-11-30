const Mock = require("mockjs");

const result = Mock.mock({
    "datas|88": [
        {
            "id|+1": 1,
            "card|1": [
                "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar6.jpg",
                "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar4.jpg",
                "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar8.jpg",
                "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar2.jpg"
            ],
            desc: "@cparagraph(1,2)",
            author: "@cname"
        }
    ]
}).datas;

const IpCartoon = require("../models/ipCartoon");
IpCartoon.bulkCreate(result);