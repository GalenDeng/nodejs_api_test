// 引入全局模块
var cp = require("child_process"),
	express = require("express"),
	bodyParser = require("body-parser"),
	routes = require("./handles/routes.js");

// 创建express实例
var app = express();

// 设置服务器监听3000端口
app.set("port", process.env.PORT || 3000);

// 网站路径重定向到/static文件夹
app.use(express.static(__dirname + "/static"));

// 使用bodyParser解析请求
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// 路由
routes(app);

// 404
app.use(function (req, res) {
	res.status(404)
		.send("404");
});

// 500
app.use(function (err, req, res) {
	console.error(err.stack);
	res.status(500)
		.send("500");
});

// 开启服务器监听端口
app.listen(app.get("port"), function () {
	var uri = "http://localhost:" + app.get("port");
	console.log("Server is running.");
	cp.exec("start " + uri);
});
