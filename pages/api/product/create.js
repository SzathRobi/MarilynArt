import Product from "../../../models/Product"
import { connectToDatabase } from "../../../util/mongodb"
import mongoose from "mongoose"

//connectToDatabase()


export default async (req, res) => {
    try{
        const { db } = await connectToDatabase();
        const newProduct = new Product ({
            name: req.body.name,
            price: req.body.price,
            desc: req.body.desc,
            story: req.body.story,
            category: req.body.category,
            inStorage: req.body.inStorage,
            date: Date.now()
        }) 
        
        await db
        .collection("products")
        .insertOne(newProduct)
        
        res.status(200).json(newProduct)
    }
    catch(error){
        res.status(400).json({msg: error.message})
    }
    
    /*
    try {
        const note = await Product.create(req.body);

        res.status(201).json({ success: true, data: note })
    } catch (error) {
        res.status(400).json({ success: false });
    }
    */
    ///////////
   /* try{
        const file = new Product({
          name: req.body.name,
          price: req.body.price,
        });
        await file.save();
        res.status(201).send('File Uploaded Successfully');
      }catch(error) {
        res.status(400).send(error.message);
      }*/
}