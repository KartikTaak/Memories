import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    title: mongoose.Schema.Types.String,
    message : mongoose.Schema.Types.String,
    creator : mongoose.Schema.Types.String,
    tags:[String],                  //arrays of strings
    selectedFile: String,         // convert image to string type using base64 
    likeCount : {
         // object bc we want to give more detail set initally zero
         type : Number,
         default:0
         
    },
    createdAt:{
        // object bc we want to give more detail set initally zero
        type:Date,
        default:new Date()      // give default value from date() function  
    }
});


// syntax of export mongoose schema 
const PostMessage = mongoose.model('PostMessage' , postSchema )
export default PostMessage; 