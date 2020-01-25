const mongoose = require('mongoose');
var DB_URL = 'mongodb://127.0.0.1:27017/costco'; /** * mongoDb Url */
mongoose.connect(DB_URL);
var db = mongoose.connection;
var faker = require('faker');
db.on('open', function () {// connection success
  console.log('MongoDB Connection Successed');
});

db.on('error', function () {// connection faild
  console.log('MongoDB Connection Error');
});


let repoSchema = mongoose.Schema({ //Step1: Create database schema
  product_id: { type: Number, unique: true },
  product_name: String,
  Product_features:String,
  product_main_description: String,
  Product_url: String,
  Product_features_title: String,
  Product_features_des: String,
  Product_features_list: [String],
  Product_features_smallPic:String
});

var productData = [];
  for(var i = 0; i< 100; i++){ //Step2: use faker to  create 100 fake data, and push it to productData
    let newProduct = {
      product_id:i,
      product_name: faker.commerce.productName(),
      Product_features:faker.lorem.words(8),
      Product_main_description: faker.lorem.paragraphs(2),
      Product_url: faker.image.business(),
      Product_features_title:faker.lorem.sentence(1),
      Product_features_des:faker.lorem.paragraph(1),
      Product_features_list:[faker.lorem.words(5),faker.lorem.words(10),faker.lorem.words(8)],
      Product_features_smallPic:faker.image.business()
    }
    productData.push(newProduct)
  }
  console.log(productData)

var ReviewDetail = mongoose.model('reviewDetail', repoSchema);

let save = (userData, callback) => {
  var gits = new Array();
  for (i = 0; i < userData.length; i++) {
    let git = new ReviewDetail({
       product_id: userData[i].product_id,
      product_name: userData[i].product_name,
      Product_features:userData[i].Product_features,
      Product_main_description: userData[i].Product_main_description,
      Product_url: userData[i].Product_url,
      Product_features_title:userData[i].Product_features_title,
      Product_features_des:userData[i].Product_features_des,
      Product_features_list:userData[i].Product_features_list,
      Product_features_smallPic:userData[i].Product_features_smallPic,
    })
    gits.push(git);
  }
  ReviewDetail.insertMany(gits, (err, res) => {
    if (err) {
      callback(err, null)
    } else {
      callback(null, true)
    }
  });
}

save(productData,(err,result)=>{
  if(err){
    console.log(err)
  }else{
    console.log('seeding success:'+result)
  }
})
