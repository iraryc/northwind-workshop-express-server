let express = require('express');
let fs = require("fs");
let cors = require("cors")
let app = express();

app.use(express.json())
app.use(cors())

// Create application/x-www-form-urlencoded parser
let urlencodedParser = express.urlencoded({ extended: false })

app.get('/api/categories', function (req, res) {
    console.log("Got a GET request for categories");
    let data = fs.readFileSync( __dirname + "/data/" + "categories.json", 'utf8');
    data = JSON.parse(data);
    console.log( "Returning: ");
    console.log(data);
    res.json( data );
});

app.get('/api/categories/:id', function (req, res) {
    let id = req.params.id;
    console.log("Got a GET request for products in category " + id);
    let data = fs.readFileSync( __dirname + "/data/" + "our_products.json", 'utf8');
    data = JSON.parse(data);
    let matching = data.filter(p => p.categoryId == id);
    console.log( "Returning: " );
    console.log(matching);
    res.json( matching );
});

app.get('/api/products', function (req, res) {
    console.log("Got a GET request for products");
    let data = fs.readFileSync( __dirname + "/data/" + "our_products.json", 'utf8');
    data = JSON.parse(data);
    console.log( "Returning: ");
    console.log(data);
    res.json( data );
});

app.get('/api/products/:id', function (req, res) {
    let id = req.params.id;
    console.log("Got a GET request for product " + id);
    let data = fs.readFileSync( __dirname + "/data/" + "our_products.json", 'utf8');
    data = JSON.parse(data);
    let matching = data.find(p => p.productId == id);
    console.log( "Returning: " );
    console.log(matching);
    res.json( matching );
})

let server = app.listen(8081, function () {
   let port = server.address().port 
   console.log("App listening at port %s", port)
})
