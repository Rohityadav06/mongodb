var express= require("express");

var mongodb=require("mongodb");
var router= express.Router();
let nareshIT= mongodb.mongoClient;

 router.get("/",(req,res)=>{

  nareshIT.connect("mongodb://localhost:27017/curd",
  (err,db)=>{
db.collection("employess").find().toArray((err,array)=>{
    req.send(array);
});

})


     })
     module.exports=router;
