const Mock = require("mockjs");

const result = Mock.mock({
    "datas|4": [
        {
            "id|+1": 1,
            "avatar|1": [
                "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar6.jpg",
                "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar4.jpg",
                "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar8.jpg",
                "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar2.jpg"
            ],
            author:"@cname"
        }
    ]
}).datas;

const Author = require("../models/Author");
Author.bulkCreate(result);