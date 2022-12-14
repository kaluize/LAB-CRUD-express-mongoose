import { Schema, model } from "mongoose";

const purchaseSchema = new Schema ({
    shippingAddress: {type: String},
    album: {type: Schema.Types.ObjectId, ref: "Album"},
})

const PurchaseModel = model ("Purchase", purchaseSchema);

export default PurchaseModel;