const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = callback => {
  MongoClient.connect(
    "mongodb+srv://suhayb:yzZmmOhatogKdEs0@cluster0.nhc1c.mongodb.net/shop?retryWrites=true&w=majority&appName=Cluster0",
  )
    .then(client => {
      console.log("Connected");
      _db = client.db();
      callback(client);
    })
    .catch(err => {
      console.log(err);
      throw err;
    });
};

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw "No Database Found!";
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
