import { connectToDatabase } from "../../../util/mongodb";

export default async (req, res) => {
  try {
    const {db} = await connectToDatabase()
    const query = {"name": req.body.name}
    await db
    .collection("products")
    .updateOne(
      query,
      { $set: { 
          //"name" : req.body.name,
          "price" : req.body.price, 
          "desc": req.body.desc,
          "story": req.body.story, 
          "category": req.body.category,
          "inStorage": req.body.inStorage,
        } 
      }
    );
    res.status(200).send("item updated succesfully")
  } 
catch (error) {
  res.status(400).send(error.message)
 }
}
