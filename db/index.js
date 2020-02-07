const mongoose = require('mongoose');

const DB_URL = 'mongodb://127.0.0.1:27017/costcoReview';
/** * mongoDb Url */
mongoose.connect(DB_URL);

const db = mongoose.connection;

db.on('open', () => {
  // connection success
  console.log('MongoDB Connection Successed');
});

db.on('error', () => {
  // connection faild
  console.log('MongoDB Connection Error');
});

let repoSchema = mongoose.Schema({
  // Step1: Create database schema
  product_id: { type: Number, unique: true },
  product_name: String,
  Product_features: String,
  product_main_description: String,
  Product_url: String,
  Product_features_title: String,
  Product_features_des: String,
  Product_features_list: [String],
  Product_features_smallPic: String,
  Product_features_detial: [Object],
  Product_Warranty: String,
  Product_Size: {
    Long: Number,
    Width: Number,
    Height: Number
  },
  Product_Last: [
    {
      Product_features_title: String,
      Product_features_des: String
    }
  ],
  Specifications: Object,
  Review: [Object]
});

const ReviewDetail = mongoose.model('reviewDetail', repoSchema);

const allData = (query, callback) => {
  console.log(query);
  const ID = { product_id: query };

  ReviewDetail.findOne(ID).exec((err, result) => {
    if (err) {
      callback(err);
    } else {
      callback(result);
    }
  });
};

module.exports.allData = allData;
