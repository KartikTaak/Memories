import mongoose from "mongoose";
import PostMessage from "../models/postMessage.js"      // import model

export  const getPosts = (req,res)=>{
    PostMessage.find()
    .then((message)=>{
        res.status(200).json(message);
    })
    .catch((error)=>{
        res.status(404).json({message:error.message})
    })
}

export const createPost=(req,res)=>{
    const post = req.body;
    const newPost = new PostMessage(post);  // cerate new objcet from Model
    newPost.save()    //use to update in mongo sever return two promises
    .then((message)=>{
        res.status(201).json({message})
    })
    .catch((err)=>res.status(409).json({err}));
}

// export const putPost=(req,res)=>{
//     const postId = req.params.postId
//     const updated_post= {
//         _id :mongoose.Schema.Types.ObjectId,
//         title: req.body.title,
//         message : req.body.message,
//         creator : req.body.creator,
//         tags:req.body.tags,     
//         selectedFile: req.title.selectedFile        
//     }
//     PostMessage.findByIdAndUpdate(postId,updated_post)
//     .then((message)=> res.status(200).json(message))
//     .catch((err)=>  res.status(500).json(err))
// }


// export const deletePost=(req,res)={

// }


 