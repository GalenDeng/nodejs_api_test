var rootDir = __dirname.replace(/[/\\]+handles$/, "");

module.exports = {

	// 主页
	index: function (req, res) {
		console.log("test");
		res.sendFile(rootDir + "/static/index.html");
	}

};