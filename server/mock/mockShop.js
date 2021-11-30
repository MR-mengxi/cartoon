const Mock = require("mockjs");

const result = Mock.mock({
    "datas|58": [
        {
            "id|+1": 0,
            src: "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar6.jpg",
            desc: "@cparagraph(1,2)",
            "val|1-100": 1
        }
    ]
}).datas;

const Shop = require("../models/Shop");
Shop.bulkCreate(result);