const express = require('express')

const users = require('./model/users.js')

const routers = express.Router()
const bodyparser = require('body-parser')


routers.use(bodyparser.json())
routers.get('/hello', (req, res) => {
	res.json({ successful: true, data: "Hello World" })
})

routers.get('/create', (req, res) => {

	var array = [
		{
			"user_id": 2,
			"username": "haider",
			"password": "123",
			"Nationality": "Africa"
		}, {
			"user_id": 3,
			"username": "john",
			"password": "sdfg",
			"Nationality": "kenya"
		}, {
			"user_id": 4,
			"username": "kooo",
			"password": "farig",
			"Nationality": "bangladesh",
			"phone": 9233334543534324
		}];
	//var newUser = new model([{"userid":"asd","username":234},{"userid":"asd","username":234}]);
	users.create(array).then((data1, err) => {
		console.log(data1)
		console.log(err)
	})



	res.json({ success: true, data: "Hello World" });
})

routers.post('/delete', (req, res) => {
	users.deleteOne({
		user_id: req.body.user_id,
	}).exec()

	res.send("data deleted")

})

routers.post('/create', (req, res) => {
	users.insertMany({
		user_id: req.body.user_id,
		username: req.body.username,
		password: req.body.password,
		Nationality: req.body.Nationality

	})

	res.send(req.body)
})


	routers.post('/update', (req, res) => {
		users.findOneAndUpdate(
			{
				user_id: req.query.user_id,
			},
			{
				$set: {

					username: req.body.username,
				}
			}
		).exec()
		res.send("data updated")
	})



	module.exports = routers