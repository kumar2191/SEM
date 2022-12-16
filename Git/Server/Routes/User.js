import express from 'express';
import User from '../Controller/User.js'

const router=express.Router()


router.post('/user/Register',User.register)
router.post('/user/Login',User.Login)





export default router;