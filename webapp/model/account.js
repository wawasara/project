var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//passport-local-mongoose 는 자동으로 password 관련한 salting/hashing 를 처리함 
var passportLocalMongoose = require('passport-local-mongoose');

var Account = new Schema({
    username: String,
    password: String
});
Account.plugin(passportLocalMongoose);

module.exports = mongoose.model('Account', Account);