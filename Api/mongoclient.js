var fs = require("fs");
// fs.writeFileSync('ram.png',buff1,function(err,data){
//    if(err)
//    console.log(err)
//    else
//    console.log("created sucessfully")
// })


var MongoClient = require('mongodb').MongoClient;

  MongoClient.connect('mongodb://127.0.0.1:27017', function(err, db) {
    if(err){console.log(err)}
    if(db){
      var dbo = db.db('hp')
      var table = dbo.collection('tableone');;
//   // var col = db.('tableone');
  // let buff = fs.readFileSync('./index.jpeg');
// let base64data = buff.toString('base64');
// let buff1 = new Buffer(base64data, 'base64');
// var a ={
//   images:base64data
// }
//   table.insert(a, function(err, r) {
//    if(err){
//      console.log(err)
//    }
//    if(r){
//      console.log("saved")
//    }
//   });

table.findOne({_id:"5c2df9699c748f1dbc20f4f0"},function(err,data){
  if(data)
  {
    console.log(data)
  }
})
    }
});


























// // var MongoClient = require('mongodb').MongoClient,
// // test = require('assert');
// // var db=MongoClient.connect('mongodb://127.0.0.1:27017/test');











// // var col = db.createCollection('insert_many');
// // col.insertMany([{a:1}, {a:2}], function(err, r) {
// //   test.equal(null, err);
// //   test.equal(2, r.insertedCount);

// //   db.close();
// // })
