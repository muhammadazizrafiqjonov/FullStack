import express from "express";
import fs from "fs";

const PORT = 4000;
const app = express();

let products = fs.readFileSync("database/products.json", "utf-8");
products = JSON.parse(products);

app.get("/products/all", (req, res) => {
  res.send(products);
});

app.get("/products", (req, res) => {
  const { title } = req.query;

  let product = products.filter((p) => p.title.includes(title));

  res.send(product);
});

app.get("/products/search_by", (req, res) => {
  const { price } = req.query;
  let product = products.filter((p) => p.price == +price);

  res.send(product);
});

app.get("/products/min_max", (req, res) => {
  const { min_price, max_price } = req.query;

  let product = [];

  for (const p of products) {
    if (p.price >= min_price && p.price <= max_price) {
      product.push(p);
    }
  }

  res.send(product);
});

app.listen(PORT, () => console.log("Server is running...."));
