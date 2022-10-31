const express = require("express");
const app = express();
const port = 8080;
const morgan = require('morgan')


const products=[
    {
      "id": 1,
      "title": "new Title marcos",
      "price": 100004,
      "description": "new Description",
      "images": [
        "https://api.lorem.space/image/shoes?w=640&h=480&r=5193",
        "https://api.lorem.space/image/shoes?w=640&h=480&r=2221",
        "https://api.lorem.space/image/shoes?w=640&h=480&r=2672"
      ]
    },
    {
      "id": 3,
      "title": "new try",
      "price": 29,
      "description": "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
      "images": [
        "https://api.lorem.space/image/fashion?w=640&h=480&r=4308",
        "https://api.lorem.space/image/fashion?w=640&h=480&r=4555",
        "https://api.lorem.space/image/fashion?w=640&h=480&r=4493"
      ]
    },
    {
      "id": 4,
      "title": "Licensed Plastic Table",
      "price": 808,
      "description": "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
      "images": [
        "https://api.lorem.space/image/fashion?w=640&h=480&r=6769",
        "https://api.lorem.space/image/fashion?w=640&h=480&r=6810",
        "https://api.lorem.space/image/fashion?w=640&h=480&r=2350"
      ]
    },
    {
      "id": 5,
      "title": "Refined Plastic Shirt",
      "price": 252,
      "description": "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
      "images": [
        "https://api.lorem.space/image/watch?w=640&h=480&r=9592",
        "https://api.lorem.space/image/watch?w=640&h=480&r=6436",
        "https://api.lorem.space/image/watch?w=640&h=480&r=4565"
      ]
    }
  ]

  
  const URL = '/api/products';
  app.use(express.json());
  app.use(morgan('dev'));
  
  //morgam
  const Morgan = morgan((tokens, req, res) => {
    return [
      tokens.method(req, res),
      tokens.url(req, res),
      tokens.status(req, res),
      tokens['response-time'](req, res), 'ms'
    ].join(' ')
  })
  
  console.log(Morgan);
  
  //app
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
  
  app.get("/api/products", (req, res) => {
    res.json({ products });
  });
  
  //Buscar un producto por 'id'
  app.get("/api/products/:id", (req, res) => {
    const products_id = products.find(
      (item) => item.id === parseInt(req.params.id)
    );
  
    if (!products_id) {
      return res.status(404).send("There is not a product with the id");
    }
  
    res.json(products_id);
  });
  
  //Eliminar un producto segun el 'id'
  app.delete("/api/products/:id", (req, res) => {
    const products_id = products.find(
      (item) => item.id === parseInt(req.params.id)
    );
  
    if (!products_id) {
      return res.status(404).send("There is not a product with the id");
    }
  
    const index = products.indexOf(products_id);
    products.splice(index, 1);
    res.json(products_id);
  });
  
  //Agregar productos metodo POST
  app.post("/api/products/", (req, res) => {
    let newProduct = req.body;
    let Product = false;
    for (let i = 0; i < products.length; index++) {
      if (products[i].title === newProduct.title) {
        Product = true;
      }
    }
   if (Product=== true) {
      res.status(404).send("The title is already exist");
    } 

    if(newProduct.title === undefined ||newProduct.title === null||newProduct.title === "" || newProduct.price === undefined ||
    newProduct.price === null || newProduct.price === ""){
      return res.status(400).send("There is a missing file, you must to write title and price");
    }
   newProduct.id = Math.floor(Math.random() * 100);
     products.push(newProduct)
     res.json(newProduct);
    return res.status(200).send("succesfull");
    
      
      
  })


  
  app.get("/info", (req, res) => {
    res.send(
      `<p>Our store has info for ${products.length} products</p>
          <h3>Hola: ${new Date()}</h3>`
    );
  });
  
 