const express = require("express");
const dotenv = require("dotenv");
const ejs = require("ejs");
const path = require("path");

const app = express();

dotenv.config();
const port = process.env.PORT;

// Middleware
const methodOverride = require("method-override");
app.use(methodOverride("_method"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
const ProductModel = require("./models/Product");
const { default: mongoose } = require("mongoose");
app.set("view engine", "ejs");
const multerconfig = require("./config/multerconfig");
const upload = require("./config/multerconfig");

mongoose.connect(process.env.MONGO_URL);

app.get("/", async (req, res) => {
  try {
    const items = await ProductModel.find({});
    res.render("index", { items });
  } catch (err) {
    console.error("Error fetching data:", err);
    res.status(500).send("Server Error");
  }
});

app.get("/add", (req, res) => {
  res.render("add");
});

app.post("/add", upload.single("image"), (req, res) => {
  ProductModel.create({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    image: req.file.filename,
  })
    .then((result) => {
      console.log("added");
    })
    .catch((err) => {
      console.error(err);
    });
  res.redirect("/");
});

app.get("/edit/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const item = await ProductModel.findById({ _id: id });
    res.render("edit", { item });
  } catch (err) {
    console.error("Error fetching data:", err);
    res.status(500).send("Server Error");
  }
});

app.delete("/delete/:id", async (req, res) => {
  try {
    await ProductModel.findByIdAndDelete(req.params.id);
    res.redirect("/");
  } catch (err) {
    console.error("Error deleting data:", err);
    res.status(500).send("Server Error");
  }
});

app.get("/look/:id", async (req, res) => {
  try {
    const item = await ProductModel.findById(req.params.id);
    res.render("look", { item });
  } catch (err) {
    console.error("Error fetching data:", err);
    res.status(500).send("Server Error");
  }
});

app.post("/update/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await ProductModel.findByIdAndUpdate(id, req.body);
    res.redirect("/");
  } catch (err) {
    console.error("Error updating data:", err);
    res.status(500).send("Server Error");
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
