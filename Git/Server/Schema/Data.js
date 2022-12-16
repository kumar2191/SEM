import mongoose from 'mongoose'
import Joi from 'joi'

const DataSchema={
    UserID:{
        type:String,
        required:true
    },
    Food:[String],
    Amount:{
        type:String,
        required:true
    },
  
}




const Data=mongoose.model('Data',DataSchema)
const validateData = (value) => {
    const schema = Joi.object({
      UserID:Joi.string(),
      Food: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
      Amount: Joi.string().required().min(3),
    
    });
    const result = schema.validate(value)
  
    return result  
  };

export default Data
export {validateData}