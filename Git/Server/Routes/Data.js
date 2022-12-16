import express from 'express';
import Data from '../Controller/Data.js'
import Auth from '../Config/Auth.js'


const router=express.Router()


router.post('/Data/Create',Auth,Data.DataCreate)





export default router;
