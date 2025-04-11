import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

import ProductModel from "../models/Product.model.js";

await mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const seedProducts = [
  {
    name: "Acoustic Guitar",
    description: "Rich sound for all genres",
    image:
      "https://images.unsplash.com/photo-1588690224648-20426ab6274a?q=80&w=2018&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 299.99,
    category: "String",
    stock: 18,
  },
  {
    name: "Electric Guitar",
    description: "High performance, sleek design",
    image:
      "https://images.unsplash.com/photo-1568193755668-aae18714a9f1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 499.99,
    category: "String",
    stock: 12,
  },
  {
    name: "Digital Keyboard",
    description: "88 keys with weighted action",
    image:
      "https://images.unsplash.com/photo-1627919617040-281311750887?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fEtleWJvYXJkJTIwbXVzaWN8ZW58MHx8MHx8fDA%3D",
    price: 349.99,
    category: "Keyboard",
    stock: 6,
  },
  {
    name: "Drum Set",
    description: "Complete kit for professionals",
    image:
      "https://images.unsplash.com/photo-1543443258-92b04ad5ec6b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 599.99,
    category: "Percussion",
    stock: 15,
  },
  {
    name: "Violin",
    description: "Elegant design, superior sound",
    image:
      "https://images.unsplash.com/photo-1624367171718-14026220ee35?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fFZpb2xpbnxlbnwwfHwwfHx8MA%3D%3D",
    price: 199.99,
    category: "Orchestral",
    stock: 10,
  },
  {
    name: "Trumpet",
    description: "Bold sound, brass finish",
    image:
      "https://plus.unsplash.com/premium_photo-1679826780221-4dc34657fdb5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8VHJ1bXBldHxlbnwwfHwwfHx8MA%3D%3D",
    price: 149.99,
    category: "Wind",
    stock: 19,
  },
  {
    name: "Saxophone",
    description: "Smooth jazz, classic tones",
    image:
      "https://images.unsplash.com/photo-1598367772323-3ae346826817?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8U2F4b3Bob25lfGVufDB8fDB8fHww",
    price: 399.99,
    category: "Wind",
    stock: 8,
  },
  {
    name: "Ukulele",
    description: "Portable and fun to play",
    image:
      "https://images.unsplash.com/photo-1541447554742-4b7eff548fe1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VWt1bGVsZXxlbnwwfHwwfHx8MA%3D%3D",
    price: 89.99,
    category: "String",
    stock: 16,
  },
  {
    name: "DJ Mixer",
    description: "Control music like a pro",
    image:
      "https://plus.unsplash.com/premium_photo-1664457233868-d2a40c759998?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8REolMjBNaXhlcnxlbnwwfHwwfHx8MA%3D%3D",
    price: 249.99,
    category: "Accessories",
    stock: 13,
  },
  {
    name: "Microphone",
    description: "Crystal clear vocal recordings",
    image:
      "https://images.unsplash.com/photo-1531651008558-ed1740375b39?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8TWljcm9waG9uZXxlbnwwfHwwfHx8MA%3D%3D",
    price: 99.99,
    category: "Accessories",
    stock: 17,
  },
  {
    name: "Headphones",
    description: "Immersive sound experience",
    image:
      "https://plus.unsplash.com/premium_photo-1679513691474-73102089c117?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8SGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D",
    price: 79.99,
    category: "Accessories",
    stock: 20,
  },
  {
    name: "Bass Guitar",
    description: "Deep tones for every genre",
    image:
      "https://images.unsplash.com/photo-1619558041249-0523903712e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8QmFzcyUyMEd1aXRhcnxlbnwwfHwwfHx8MA%3D%3D",
    price: 329.99,
    category: "String",
    stock: 7,
  },
  {
    name: "Cajon Box Drum",
    description: "Compact percussion instrument",
    image:
      "https://media.istockphoto.com/id/176961720/photo/drawer.webp?a=1&b=1&s=612x612&w=0&k=20&c=5thwyjhH-hLiVOEMN5pyUBXTRe_RZuDsLf44_9h2s4c=",
    price: 129.99,
    category: "Percussion",
    stock: 14,
  },
  {
    name: "Flute",
    description: "Melodic tones, lightweight design",
    image:
      "https://images.unsplash.com/photo-1580719653258-26873fde0b4d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Zmx1dGV8ZW58MHx8MHx8fDA%3D",
    price: 59.99,
    category: "Wind",
    stock: 11,
  },
  {
    name: "Harmonica",
    description: "Pocket-sized music companion",
    image:
      "https://images.unsplash.com/photo-1555026403-6a01001f73ec?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8SGFybW9uaWNhfGVufDB8fDB8fHww",
    price: 49.99,
    category: "Wind",
    stock: 9,
  },
  {
    name: "Percussion Pad",
    description: "Electronic beats at your fingertips",
    image:
      "https://images.unsplash.com/photo-1643901180465-59cce567ec2c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8UGVyY3Vzc2lvbiUyMFBhZHxlbnwwfHwwfHx8MA%3D%3D",
    price: 279.99,
    category: "Accessories",
    stock: 6,
  },
];

await ProductModel.deleteMany(); // Optional: clear existing data
await ProductModel.insertMany(seedProducts);

console.log("Seeding done!");
await mongoose.disconnect();
console.log("Disconnected from MongoDB");
