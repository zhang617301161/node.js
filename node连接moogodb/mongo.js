var express = require("express");
var mongoose = require("mongoose");

const DB_URL = "mongodb://localhost:27017/imooc"
mongoose.connect(DB_URL)
mongoose.connection.on("connected",function(){
    console.log("moogo connect success")
})
//mysql表
const User = mongoose.model("user",new mongoose.Schema({
    user:{type:String,require:true},
    age:{type:Number,require:true}
}))

//新增数据
/* User.create({
    user:'zhangsan',
    age:26,
},function(err,doc){
    if(!err){
        console.log(doc)
    }else{
        console.log(err)
    }
})
 */
//删除
/* User.remove({age:18},function(res,doc){
    console.log(doc)
}) */
//更新
/* User.update({'user':'xiaohua'},{'$set':{age:66}},function(err,doc){
    console.log(doc)
}) */
const app = express();
//查找
app.get('/data',function(req,res){
    User.findOne({'user':'xiaohua'},function(err,doc){
       res.json(doc)
    })
    
})

app.listen(9093,function(){
    console.log("Node app start at post 9093")
})