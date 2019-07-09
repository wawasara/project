var mongoose = require('mongoose');

function connectDB() {
    var dbUrl = 'mongodb://127.0.0.1:27017/bbsappdb';

    mongoose.Promise = global.Promise;
    mongoose.connect(dbUrl, {
        useNewUrlParser: true
    });

    var database = mongoose.connection;

    database.on('error', console.error.bind(console, 'mongoose connection error!'));
    database.on('open', function () {
        console.log('데이터베이스가 연결되었습니다.' + dbUrl);
    });
    database.on('disconnected', function () {
        console.log('연결이 끊어졌습니다. 5초 후 다시 연결합니다');
        setInterval(connectDB, 5000);
    });
    return database;
}

module.exports = connectDB();