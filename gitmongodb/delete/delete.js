var express=require("express");
var router=express.Route();
var mongodb=require("mongodb");
var nareshIT= mongodb.mongoClient;

router.post("/",(req,res)=>{
var e_id= req.body.e_id;
var obj={ "e_id":e_id }
nareshIT.connect("mongodb://localhost:27017/curd",(err,db)=>{
    db.collection("employees").updateone(obj1,obj2,(err,result)=>{  if(err){
        req.send({"delete":"success"})
    }else{
        req.send({"delete":"fail"})
    }})
  
})

})
module.exports = router;