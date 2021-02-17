import { connectToDatabase } from "../../../util/mongodb";

//delete doc
export default async (req, res, next) => {
   try{
    const {db} = await connectToDatabase()
    console.log(req.body.name)
    const query = {"name": `${req.body.name}`}
    await db.collection("products").deleteOne(query)
    res.status(200).send("item deleted succesfully")
   }
   catch(error){
       //res.status(400).json({msg: error.message})
       console.log(error)
   }
  };
  