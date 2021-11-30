const Mock = require("mockjs");

const result = Mock.mock({
    datas: [
        { id: 1, img: "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar6.jpg" },
        { id: 2, img: "http://localhost:5008/upload/1638084355627-tbsl2l.jpg" },
        { id: 3, img: "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar8.jpg" },
        { id: 4, img: "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar2.jpg" },
    ]
}).datas;

const Banner = require("../models/Banner");
Banner.bulkCreate(result);