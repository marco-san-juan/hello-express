import "dotenv/config";
import express from "express";
import cors from 'cors';
import bodyParser from "body-parser";
import models from './models';
import route from "./routes";

console.log("Hello World! Running my first Node.js project.");

const app = express();

app.listen(3000, ()=>{
    console.log(process.env.Environment);
})
app.use(cors());
app.use((req, res, next) => {
    req.context ={
     models
    };
    next();
 });
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/users',route.user);
app.use('/messages',route.message);
app.use('/quotes',route.quote);


