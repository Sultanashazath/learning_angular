var express=require('express');
var app=express()
var mongoose=require('mongoose');
var bodyparser=require('body-parser');
var cors=require('cors');



var db=require('./databaseConnectio/db');

//mogodb connection
mongoose.connect(db.url,function(err,res){
    if(err){
        console.log("error")
    }
    else{
        console.log("connected")
    }
})
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json());
app.use(cors());
require("./routing/routing")(app);

var port = process.env.PORT || 3000;
app.listen(port);
console.log(port);


