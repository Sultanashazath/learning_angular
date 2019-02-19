var autherSchema=require("../model/model.schema");

exports.api = (req,res)=>{
    res.send("get method connected");
    }  
exports.authorDetailsInsert=(req,res)=>{
 
    var authordetails=new autherSchema({
        name:req.body.name,
        authorid:req.body.authorid,
        comments:[{status:req.body.status,date:Date.now()}]
    })
    authordetails.save(function(err,res1){
        if(err){
            res.json(err);
          
        console.log("err");
               }
        if(res1){
            console.log("sucess");
            res.json("sucess");
         
            console.log("res");
        }  
    })
    //.then((result)=>{
      //         console.log("saved",result);
    //         res.send("saved");
    //   res.end();
    // }).catch(err=>{
    //             if(err){
    //         console.log("error on save");
    //             } })
    // res.end();
}

exports.getAlldata=(req,res)=>{

    autherSchema.find().then(data=>{
        if(data){
            res.json(data);
            console.log(data)
        }
    }).catch(err=>{
        console.log("err");
        res.send("error")
    })
}
