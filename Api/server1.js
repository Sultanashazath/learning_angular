var MongoClient = require("mongodb").MongoClient;

MongoClient.connect("mongodb://127.0.0.1:27017",{useNewUrlParser:true},function(err,data){
  if(err)
  {
    console.log(err)
  }
  if(data)
  {    
        var db = data.db('hp');
    // var dbo = db.createCollection("tableone");
    var dbo = db.collection("tableone");

    var a ={
      username:"1adasd23",
      password:"4asdasd56"
    }
    
    dbo.insert(a,function(err,result){
      if(err){
        console.log(err)
      }
      if(result){        
        if(result.result.ok ==1)
        {
          console.log("saved")
        }
      }
    })

    dbo.find().toArray(function(err,data){
      if(err){
        console.log(err)
      }
            
        if(data)
        {
          console.log(data)
        }
    })
    console.log("connected")
  }
})

// var db = MongoClient.connect
