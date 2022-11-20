import express from 'express'
import nodemon from 'nodemon'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import cors from 'cors';
import PostRoutes from './routes/posts.js'
const app = express();
app.use('/posts',PostRoutes);


app.use(bodyParser.json({limit: "30mb",extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb",extended: true}));
app.use(bodyParser.json());
app.use(cors());

const CONNECTION_URL ="mongodb+srv://KartikTaak:darkriderk@cluster0.mk6zqde.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000 ;

mongoose.connect(CONNECTION_URL,{useNewUrlParser:true})
.then(()=>app.listen(PORT, ()=>console.log(`SERVER RUNNING On Port : ${PORT}`)))
.catch((err)=>console.log(err.message));

// mongoose.set('useFindAndModify',false);
