let express = require('express');
let bodyParser = require('body-parser');
let fs = require("fs");
let app = express();

// Create application/x-www-form-urlencoded parser
let urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get('/index.html', function (req, res) {
    res.sendFile( __dirname + "/public/" + "index.html" );
 })

app.get('/search.html', function (req, res) {
    res.sendFile( __dirname + "/public/" + "search.html" );
})
 
app.get('/details.html', function (req, res) {
    res.sendFile( __dirname + "/public/" + "details.html" );
})

app.get('/api/categories', function (req, res) {
    console.log("Got a GET request for categories");
    let data = fs.readFileSync( __dirname + "/data/" + "categories.json", 'utf8');
    data = JSON.parse(data);
    console.log( "Returning: ");
    console.log(data);
    res.end( JSON.stringify(data) );
});

app.get('/api/categories/:id', function (req, res) {
    let id = req.params.id;
    console.log("Got a GET request for products in category " + id);
    let data = fs.readFileSync( __dirname + "/data/" + "our_products.json", 'utf8');
    data = JSON.parse(data);
    let matching = data.filter(p => p.categoryId == id);
    console.log( "Returning: " );
    console.log(matching);
    res.end( JSON.stringify(matching) );
});

app.get('/api/products', function (req, res) {
    console.log("Got a GET request for products");
    let data = fs.readFileSync( __dirname + "/data/" + "our_products.json", 'utf8');
    data = JSON.parse(data);
    console.log( "Returning: ");
    console.log(data);
    res.end( JSON.stringify(data) );
});

app.get('/api/products/:id', function (req, res) {
    let id = req.params.id;
    console.log("Got a GET request for product " + id);
    let data = fs.readFileSync( __dirname + "/data/" + "our_products.json", 'utf8');
    data = JSON.parse(data);
    let matching = data.find(p => p.productId == id);
    console.log( "Returning: " );
    console.log(matching);
    res.end( JSON.stringify(matching) );
})
 
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));

let server = app.listen(8081, function () {
   let port = server.address().port 
   console.log("App listening at port %s", port)
})
