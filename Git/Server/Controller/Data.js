import Data from '../Schema/Data.js'

const DataCreate = async(req,res) =>{
    console.log(req.user);
    console.log(req.body);
       try {
         let user=new Data({
            UserID:req.user.id,
            Food:req.body.Food,
            Amount:req.body.Amount,
        })
     
        const result=await user.save()
        res.send(result)
       } catch (error) {
         res.status(400).send(error.message)
       }

    }
  


export default {DataCreate}