import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    price: {
        type: Number,
        required: true
    },
    thumbnail: {
        type: String
    },
    images: {
        type: [String]
    }
}, { timestamps: true });

export const ProductModel = mongoose.model("ProductTest2", ProductSchema);
