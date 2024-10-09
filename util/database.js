const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

// am nawa labar amaya ka bzanin ama tanha lanaw xoda kar dakat.
let _db;
const mongoConnect = callback => {
  MongoClient.connect(process.env.DATABASE_URL)
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
