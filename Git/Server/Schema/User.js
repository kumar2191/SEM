import mongoose from 'mongoose'
import Joi from 'joi'

const UserSchema={
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
  
}




const User=mongoose.model('User',UserSchema)
const validateUser = (value) => {
    const schema = Joi.object({
      name:Joi.string(),
      email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
      password: Joi.string().required().min(3),
    
    });
    const result = schema.validate(value)
  
    return result  
  };

export default User
export {validateUser}