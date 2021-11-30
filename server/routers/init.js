const express = require("express")
const app = express();

// 映射public目录中的静态资源
const path = require("path");
const staticRoot = path.resolve(__dirname, "../public");
app.use(express.static(staticRoot));

// 跨域

// 加入cookie-parser 中间件
// 加入之后，会在req对象中注入cookies属性，用于获取所有请求传递过来的cookie
// 加入之后，会在res对象中注入cookie方法，用于设置cookie
const cookieParser = require("cookie-parser");
app.use(cookieParser());


// 应用token中间件
app.use(require("./tokenMiddleware"));

// 解析 application/x-www-form-urlencoded 格式的请求体
app.use(express.urlencoded({ extended: true }));
// 解析 application/json 格式的请求体
app.use(express.json());

// 处理api的请求
app.use("/api/banner",require("./api/banner"));
app.use("/api/card",require("./api/card"));
app.use("/api/mod",require("./api/mod"));
app.use("/api/cartoon/author",require("./api/author"));
app.use("/api/ip/cartoon",require("./api/ipCartoon"));
app.use("/api/ip/play",require("./api/ipPlay"));
app.use("/api/ip/per",require("./api/ipPer"));
app.use("/api/shop", require("./api/shop"));
app.use("/api/list",require("./api/list"));
app.use("/api/message",require("./api/message"));
app.use("/api/admin",require("./api/admin"));

// 处理错误的中间件
app.use(require("./errorMiddleware"));

const port = 5008;
app.listen(port, () => {
    console.log(`server listen on ${port}`);
})