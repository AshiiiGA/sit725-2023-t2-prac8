let client = require('../dbConnection');
const ObjectId = require('mongodb').ObjectId;
let collection = client.db().collection('Cats');

function postCat(cat,callback){
    collection.insertOne(cat,callback);
}

function getAllCats(callback){
    collection.find({}).toArray(callback);
}

function deleteCat(id, callback){
    const _id = new ObjectId(id);
    collection.deleteOne({ "_id": _id },callback);
}

module.exports = {postCat,getAllCats,deleteCat}