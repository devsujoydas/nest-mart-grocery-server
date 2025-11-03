const mongoose = require("mongoose");

const productDetailsSchema = new mongoose.Schema({
  Sale: { type: String, default: "Off" },
  quantity: { type: Number, default: 0 },
  sold: { type: Number, default: 0 },
  description: { type: String, default: "" },
  type: { type: String, default: "" },
  mfg: { type: String, default: "" },
  life: { type: String, default: "" },
  sku: { type: String, default: "" },
  tags: { type: String, default: "" },
  stock: { type: Number, default: 0 },
  TypeOfPacking: { type: String, default: "" },
  Color: [{ type: String }],
  QuantityPerCase: { type: String, default: "" },
  Alcohol: { type: String, default: "" },
  PieceInOne: { type: String, default: "" },
  packagingDelivery: { type: String, default: "" },
  suggestedUse: { type: String, default: "" },
  otherIngredients: { type: String, default: "" },
  warnings: { type: String, default: "" },
  delivery: { type: String, default: "" },
  returnAndWarranty: {
    authentic: { type: String, default: "" },
    return: { type: String, default: "" },
    warranty: { type: String, default: "" },
  },
}, { _id: false });

const productSchema = new mongoose.Schema({
  SL: { type: String, required: true, unique: true },
  img1: { type: String, required: true },
  img2: { type: String },
  status: { type: String, default: "" },
  categories: { type: String, default: "" },
  title: { type: String, required: true },
  path: { type: String, required: true, unique: true },
  ratings: { type: String, default: "0" },
  by: { type: String, default: "" },
  price: { type: Number, required: true },
  prevPrice: { type: Number },
  discountPercent: { type: String, default: "" },
 
  vendor: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },

  productDetails: { type: productDetailsSchema, default: {} },
}, { timestamps: true });

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
