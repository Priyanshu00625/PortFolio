const mongoose = require("mongoose");
const { Schema } = mongoose;
const userSchema = new Schema({
    firstname:{type:String , required:true},
    lastname:{type:String , required:true},
    email:{type:String , required:true},
    message:{type:String}
})
const User = mongoose.model("user" , userSchema);
module.exports=User
