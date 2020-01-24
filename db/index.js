const mongoose = require('mongoose');
var DB_URL = 'mongodb+srv://luis:c82806817@cluster0-vv08g.mongodb.net/GitTestApi?retryWrites=true&w=majority'; /** * mongoDb Url */
mongoose.connect(DB_URL);
var db = mongoose.connection;

db.on('open', function () {// connection success
    console.log('MongoDB Connection Successed');
  });
  db.on('error', function () {// connection faild
    console.log('MongoDB Connection Error');
});


