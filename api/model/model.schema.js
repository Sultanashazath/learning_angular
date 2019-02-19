var mongoose=require('mongoose');
var AuthorDetails=new mongoose.Schema({
    name:String,
    authorid:{type:Number, unique : true, required :true,dropDups: true},
    comments:[{status:String,date:Date}]
   // date:{type:Date,default:Date.now}

})

module.exports=mongoose.model("AuthorDetails",AuthorDetails)
