const mongoose = require('mongoose');
var DB_URL = 'mongodb://127.0.0.1:27017/costco'; /** * mongoDb Url */
mongoose.connect(DB_URL);
var db = mongoose.connection;
db.on('open', function () {// connection success
  console.log('MongoDB Connection Successed');
});

db.on('error', function () {// connection faild
  console.log('MongoDB Connection Error');
});

let repoSchema = mongoose.Schema({ //Step1: Create database schema
  product_id: { type: Number, unique: true },
  product_name: String,
  Product_features: String,
  product_main_description: String,
  Product_url: String,
  Product_features_title: String,
  Product_features_des: String,
  Product_features_list: [String],
  Product_features_smallPic: String
});

var ReviewDetail = mongoose.model('reviewDetail', repoSchema);

let allData = (callback) => {
  ReviewDetail.find()
    .exec((err, result) => {
      if (err) {
        callback(err)
      } else {
        callback(result)
      }
    })
}


module.exports.allData = allData;

