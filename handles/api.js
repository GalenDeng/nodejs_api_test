var random = require("../lib/random.js");

// 获取数据
function data(req, res) {

	// 获取get请求头参数的数据
	var query = req.query;

	// 生成随机数据
	var data = {
		id: random.number(10000),
		name: random.string(null, 16)
	}

	// 输出get请求头参数
	console.log("query: ", query);

	// 返回响应
	res.json({
		code: 20000,
		query: query,
		data: data
	});
}

// 提交表单
function form(req, res) {

	// 获取post请求正文的数据
	var data = req.body;

	// 生成随机状态码
	var randomCode = random.element([20000, 20001, 40000]);

	// 输出post请求正文
	console.log("data: ", data);

	// 返回响应
	res.json({
		result: {
			code: randomCode,
			data: data
		}
	});
}

module.exports = {
	data: data,
	form: form
};