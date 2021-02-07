const main = require('./page.js')
const api = require('./api.js')

module.exports = function (app) {
	// 访问主页
	app.get("/", main.index);

	// 获取数据
	app.get("/api/data", api.data);

	// 提交表单
	app.post("/api/form", api.form);
}