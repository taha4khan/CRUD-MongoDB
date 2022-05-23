const express =require ('express')
const mongoose=require('mongoose')
const bodyparser=require('body-parser')
const PORT=8000;

const routes = require('./routes')

const app=express();

mongoose.connect("mongodb://localhost:27017/express-mongoose")
.then((client)=>{

	console.log("MONGODB CONNECT SUCCESSFULLY")
   
    
    app.use('/api',routes)
    app.use(bodyparser.json())
 
    app.listen(PORT,()=>{
		console.log("Server SUCCESSFULLY Started at port number 8000")
	})
}).catch((err)=>{console.log("err13==>"+err)})