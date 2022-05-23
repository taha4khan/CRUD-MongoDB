const { type } = require('express/lib/response');
const mongoose =require('mongoose');
const { stringify } = require('nodemon/lib/utils');
const schema=mongoose.Schema;


const users= new schema({
    "user_id":{type:Number},
    "username":{type:String},
    "password":{type:String},
    "Nationality":{type:String},
    "phone":Number

})

const user=mongoose.model('users',users)

module.exports=user