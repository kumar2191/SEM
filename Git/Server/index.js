import express from 'express';
import config from './Config/Config.js'
import bodyParser from 'body-parser'
import cors from 'cors'
import dotenv from 'dotenv'
import User from './Routes/User.js'
import Data from './Routes/Data.js'
dotenv.config()
const app = express();
app.use(cors())
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

config()






app.use('/api',User)
app.use('/api',Data)


const port=process.env.PORT || 5000
app.listen(process.env.PORT || 5000,() =>{
    console.log(`server is running in port ${port}`);
})