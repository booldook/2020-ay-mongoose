const mongoose = require('mongoose');
module.exports = () => {
	const connect = () => {
		// mongoose.connect('주소', '옵션', '콜백');
		mongoose.connect('mongodb://localhost:15000/sample', {}, (err) => {
			if(err) console.log(err);
			else console.log("몽고디비 연결 성공");
		});
	}
	connect();

	mongoose.connection.on('error', (err) => {
		console.log(err);
	});

	mongoose.connection.on('disconnected', () =>{
		console.log("몽고디비 다시 연결");
		connect();
	});

	require('./user');
	// require('./comment');
}


