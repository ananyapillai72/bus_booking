import express from "express";
import Bus from "../models/Bus.js"

const router = express.Router();

//CREATE
router.post("/", async(req, res)=>{

    const newBus = new Bus(req.body)
    try{
    const savedBus = await newBus.save()
    res.status(200).json(savedBus)
    }
    catch(err){
        res.status(500).json(err)
    }
})
//UPDATE
router.put("/:id", async(req, res)=>{

    try{
    const updatedBus = await Bus.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true})
    res.status(200).json(updatedBus)
    }
    catch(err){
        res.status(500).json(err)
    }
})

//DELETE
router.delete("/:id", async(req, res)=>{

    try{
    await Bus.findByIdAndDelete(req.params.id)
    res.status(200).json("Hotel has been deleted");
    }
    
    catch(err){
        res.status(500).json(err)
    }
})
//GET
router.get("/:id", async(req, res)=>{

    try{
    const bus = await Bus.findById(req.params.id)
    res.status(200).json(bus);
    }
    
    catch(err){
        res.status(500).json(err)
    }
})
//GETALL

router.get("/", async(req, res)=>{

    try{
    const bus = await Bus.find();
    res.status(200).json(buses);
    }
    catch(err){
        res.status(500).json(err)
    }
})


export default router