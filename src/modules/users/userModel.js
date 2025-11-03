const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },

    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },

    dateOfBirth: { type: Date },

    password: { type: String, required: true, minlength: 6 },
    refreshToken: { type: String },

    role: {
      type: String,
      enum: ["customer", "vendor", "admin"],
      default: "customer",
      index: true,
    },
 
    store: {
      description: { type: String, default: "" },
      logo: { type: String, default: "/images/default-store.png" },
      location: { type: String, default: "" },
      socialLinks: {
        facebook: { type: String, default: "" },
        instagram: { type: String, default: "" },
        twitter: { type: String, default: "" },
        linkedin: { type: String, default: "" },
        youtube: { type: String, default: "" },
      },
      isApproved: { type: Boolean, default: false },
      createdAt: { type: Date, default: Date.now },
    },

    profilePhoto: { type: String, default: "/images/default-user.jpg" },
    phone: { type: String, trim: true },

    address: {
      fullName: { type: String, trim: true },
      phone: { type: String, trim: true },
      street: { type: String, trim: true },
      city: { type: String, trim: true },
      state: { type: String, trim: true },
      postalCode: { type: String, trim: true },
      country: { type: String, trim: true },
    },

    location: {
      from: { type: String, default: "" },
      livesIn: { type: String, default: "" },
    },

    cart: [
      {
        product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
        quantity: { type: Number, default: 1 },
        addedAt: { type: Date, default: Date.now },
      },
    ],

    wishlist: [
      {
        product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
        addedAt: { type: Date, default: Date.now },
      },
    ],

    order: [
      {
        orderId: { type: mongoose.Schema.Types.ObjectId, ref: "Order" },
        placedAt: { type: Date, default: Date.now },
      },
    ],

    isVerified: { type: Boolean, default: false },
    securityCode: { type: String },

    passwordReset: {
      token: { type: String },
      expires: { type: Date },
    },
  },
  { timestamps: true }
);

userSchema.index({
  name: "text",
  username: "text",
  email: "text",
  role: "text",
});

const User = mongoose.model("User", userSchema);
module.exports = User;
