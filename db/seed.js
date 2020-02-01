const mongoose = require('mongoose');

const DB_URL = 'mongodb://127.0.0.1:27017/costco'; /** * mongoDb Url */
mongoose.connect(DB_URL);
const db = mongoose.connection;

const faker = require('faker');

db.on('open', function() {
  // connection success
  console.log('MongoDB Connection Successed');
});

db.on('error', function() {
  // connection faild
  console.log('MongoDB Connection Error');
});

const repoSchema = mongoose.Schema({
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

const productData = [];
for (let i = 0; i < 100; i + 1) {
  // Step2: use faker to  create 100 fake data, and push it to productData
  const newProduct = {
    product_id: i,
    product_name: faker.commerce.productName(),
    Product_features: faker.lorem.words(8),
    Product_main_description: faker.lorem.paragraphs(2),
    Product_url: faker.random.image(),
    Product_features_title: faker.lorem.sentence(1),
    Product_features_des: faker.lorem.paragraph(1),
    Product_features_list: [faker.lorem.words(5), faker.lorem.words(10), faker.lorem.words(8)],
    Product_features_smallPic: faker.random.image(),
    Product_features_detial: [
      {
        Product_features: faker.lorem.words(8),
        Product_main_description: faker.lorem.paragraphs(2),
        Product_features_list: [faker.lorem.words(5), faker.lorem.words(10), faker.lorem.words(8)],
        Product_features_smallPic: faker.random.image()
      },
      {
        Product_features: faker.lorem.words(8),
        Product_main_description: faker.lorem.paragraphs(2),
        Product_features_list: [faker.lorem.words(5), faker.lorem.words(10), faker.lorem.words(8)],
        Product_features_smallPic: faker.random.image()
      },
      {
        Product_features: faker.lorem.words(8),
        Product_main_description: faker.lorem.paragraphs(2),
        Product_features_list: [faker.lorem.words(5), faker.lorem.words(10), faker.lorem.words(8)],
        Product_features_smallPic: faker.random.image()
      }
    ],
    Product_Warranty: faker.lorem.paragraphs(2),
    Product_Size: {
      Long: faker.random.number(10),
      Width: faker.random.number(10),
      Height: faker.random.number(10)
    },
    Product_Last: [
      {
        Product_features_title: faker.lorem.sentence(1),
        Product_features_des: faker.lorem.paragraphs(2)
      },
      {
        Product_features_title: faker.lorem.sentence(1),
        Product_features_des: faker.lorem.paragraphs(2)
      },
      {
        Product_features_title: faker.lorem.sentence(1),
        Product_features_des: faker.lorem.paragraphs(2)
      }
    ],
    Specifications: {
      Brand: faker.commerce.productName(),
      Dimensions_Height: faker.random.number(100),
      Dimensions_Width: faker.random.number(100),
      Features: [
        { Feature: faker.lorem.words(8), id: faker.random.uuid() },
        { Feature: faker.lorem.words(2), id: faker.random.uuid() }
      ],
      Horsepower: faker.random.number(),
      Maximum_Incline: faker.random.number(),
      Maximum_Speed: faker.random.number(),
      Number_of_Programs: faker.random.number(),
      Running_Surface_Length: faker.random.number(),
      Running_Surface_Width: faker.random.number()
    },
    Review: [
      {
        Id: faker.random.uuid(),
        Overall: faker.random.number(2),
        UserImg: faker.image.avatar(),
        UserName: faker.internet.userName(),
        ago: faker.random.number(1),
        reviewBody: faker.lorem.paragraphs(5),
        recommend: faker.random.boolean(),
        Helpful: {
          Yes: faker.random.number(),
          No: faker.random.number()
        }
      },
      {
        Id: faker.random.uuid(),
        Overall: faker.random.number(2),
        UserImg: faker.image.avatar(),
        UserName: faker.internet.userName(),
        ago: faker.random.number(1),
        reviewBody: faker.lorem.paragraphs(5),
        recommend: faker.random.boolean(),
        Helpful: {
          Yes: faker.random.number(),
          No: faker.random.number()
        }
      },
      {
        Id: faker.random.uuid(),
        Overall: faker.random.number(2),
        UserImg: faker.image.avatar(),
        UserName: faker.internet.userName(),
        ago: faker.random.number(1),
        reviewBody: faker.lorem.paragraphs(5),
        recommend: faker.random.boolean(),
        Helpful: {
          Yes: faker.random.number(),
          No: faker.random.number()
        }
      },
      {
        Id: faker.random.uuid(),
        Overall: faker.random.number(2),
        UserImg: faker.image.avatar(),
        UserName: faker.internet.userName(),
        ago: faker.random.number(100),
        reviewBody: faker.lorem.paragraphs(5),
        recommend: faker.random.boolean(),
        Helpful: {
          Yes: faker.random.number(),
          No: faker.random.number()
        }
      },
      {
        Id: faker.random.uuid(),
        Overall: faker.random.number(2),
        UserImg: faker.image.avatar(),
        UserName: faker.internet.userName(),
        ago: faker.random.number(1),
        reviewBody: faker.lorem.paragraphs(5),
        recommend: faker.random.boolean(),
        Helpful: {
          Yes: faker.random.number(),
          No: faker.random.number()
        }
      }
    ]
  };
  productData.push(newProduct);
}

const ReviewDetail = mongoose.model('reviewDetail', repoSchema);

const save = (userData, callback) => {
  const gits = new Array();
  for (let i = 0; i < userData.length; i + 1) {
    const git = new ReviewDetail({
      product_id: userData[i].product_id,
      product_name: userData[i].product_name,
      Product_features: userData[i].Product_features,
      Product_main_description: userData[i].Product_main_description,
      Product_url: userData[i].Product_url,
      Product_features_title: userData[i].Product_features_title,
      Product_features_des: userData[i].Product_features_des,
      Product_features_list: userData[i].Product_features_list,
      Product_features_smallPic: userData[i].Product_features_smallPic,
      Product_features_detial: userData[i].Product_features_detial,
      Product_Warranty: userData[i].Product_Warranty,
      Product_Size: userData[i].Product_Size,
      Product_Last: userData[i].Product_Last,
      Specifications: userData[i].Specifications,
      Review: userData[i].Review
    });
    gits.push(git);
  }
  ReviewDetail.insertMany(gits, (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, true);
    }
  });
};

save(productData, (err, result) => {
  if (err) {
    console.log(err);
  } else {
    console.log('seeding success:' + result);
  }
});
