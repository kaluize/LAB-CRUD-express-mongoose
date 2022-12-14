import express from "express";
import PurchaseModel from "../models/purchase.model.js";

const purchaseRoute = express.Router();


// ROTA POST PURCHASES
purchaseRoute.post("/purchases/:albumId", async (req, res) => {
    try {
        const { albumId } = req.params;
        const form = req.body;
        const newPurchase = await PurchaseModel.create({
            ...form,
            album: albumId});

        return res.status(201).json(newPurchase);

    } catch (error) {
        console.log(error);
        return res.status(400).json(error.errors);
    }
})


// ROTA GET PURCHASE BY ID
purchaseRoute.get("/purchases/:purchaseId", async (req,res) => {
    try{
        const { purchaseId } = req.params;
        const purchase = await PurchaseModel.findById(purchaseId).populate("album");
        console.log(purchase);
        return res.status(200).json(purchase);

    } catch (error) {
        console.log(error);
        return res.status(400).json(error.errors);
    }
})


export default purchaseRoute;