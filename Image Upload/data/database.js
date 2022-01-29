const mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;

let database;

async function connectToDatabase() {
  const client = await MongoClient.connect(
    "mongodb+srv://count:0258@count-east.wypwi.mongodb.net/count-imageupload?retryWrites=true&w=majority"
  );
  database = client.db("count-imageupload");
}

function getDb() {
  if (!database) {
    throw { message: "Database not connected!" };
  }
  return database;
}

module.exports = {
  connectToDatabase: connectToDatabase,
  getDb: getDb,
};
