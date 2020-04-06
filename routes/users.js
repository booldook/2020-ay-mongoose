var express = require('express');
var router = express.Router();
var User = require('../schemas/user');

/* GET users listing. */
router.get('/', async(req, res, next) => {
	const result = await User.find();
	res.json(result);	
});

router.get('/wr', async (req, res, next) => {
	const body = {
		userid: "hong.k.ds3",
		userpw: "1234",
		name: "홍길동",
		age: 30
	};
	const { userid, userpw, name, age } = body;
	const result = await new User({
		userid, userpw, name, age
	}).save();
	res.json(result);
});

router.get("/delete/:userid", async (req, res, next) => {
	const userid = req.params.userid;
	const result = await User.remove({ userid });
	res.json(result);
});

router.get("/update",  async(req, res, next) => {
	const result = await User.update({
		userid: "hong.k.d"
	}, {
		age: 60
	});
	res.json(result);
});

module.exports = router;
