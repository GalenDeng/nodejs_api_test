const path = require('path')
const root = path.resolve(__dirname, '../static/')

module.exports = {
	// 主页
	index: index
}

function index(req, res) {
	res.sendFile(root + '/index.html')
}