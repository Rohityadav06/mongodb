var express= require("express");
var router=express.Router();
var mongodb= require("mongodb");
var nareshIT=mongodb.mongoClient;
 
router.post("/",(req,res)=>{
var e_id=req.body.e_id;
var e_name=req.body.e_name;
var e_sal=req.body.e_sal;
var obj={
'e_id':e_id,
'e_name':e_name,
'e_sal':e_sal
};

nareshIT.connect("mongodb://localhost:27017/curd"),
(err,db)=>{
db.collection("employees").insertOne(obj,
    (err,result)=>{
        if(err){
            res.send({"inset":"fail"});
        }else{
            res.send({"inset":"success"});
        }
    })

    
}

})
module.exports= router;
