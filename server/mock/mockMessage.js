const Mock = require("mockjs");

const result = Mock.mock({
    "datas|356": [
        {
            "id|+1": 1,
            "avatar|1": [
                "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar6.jpg",
                "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar4.jpg",
                "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar8.jpg",
                "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar2.jpg"
            ],
            nickname: "@cname",
            content: "@cparagraph(1,2)",
            time: Date.now(),
            "ModId|1-75":1
        }
    ]
}).datas;

const Message = require("../models/Message");
Message.bulkCreate(result);