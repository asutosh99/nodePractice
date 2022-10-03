const express = require("express");
const { identity } = require("lodash");
const app = express();
const { products } = require("./data");
// console.log(products);
app.get("/", (req, res) => {
  res.json(products);
});

app.get("/products", (req, res) => {
  newProducts = products.map((product) => {
    const { id, name } = product;
    return { id, name };
  });
  res.send(newProducts);
});
app.get("/products/:productID", (req, res) => {
  console.log(req.params);
  const { productID } = req.params;
  singleOne = products.find((prod) => prod.id === Number(productID));
  if (!singleOne) {
    res.status(401).send("error");
  }
  res.send(singleOne);
});

app.get("/api/v1/query", (req, res) => {
  const { search, limit } = req.query;
  let sortedProducts = [...products];
  if (search) {
    // console.log('serach query');
    sortedProducts = sortedProducts.filter((prod) => {
     return prod.name.startsWith(search);
    });
    // console.log(sortedProducts);
  }
  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }
  if (sortedProducts.length < 1) {
    return res.send("no products found");
  }

  return res.status(200).json(sortedProducts);
});

// app.get('/', (req, res) => {
//     res.json(products)
//   })

app.listen(5000, () => {
  console.log("server started");
});
