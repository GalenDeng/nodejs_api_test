module.exports = {

	// 主页
	index: function (req, res) {
		res.sendFile(__dirname + "/static/index.html");
	}

};