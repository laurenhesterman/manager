var mongoose = require('mongoose');
var Product = mongoose.model('Product');
var products = require('../controllers/products.js');
var path = require('path')

module.exports = function(app) {
    app.get("/product", (req, res) => { 
        products.show(req, res)
        })
    app.get("/product/:id", (req, res) => { 
        products.show_one(req, res)
        })
    app.post("/product", (req, res) => { 
        products.create(req, res)
        })
    app.put("/product/:id", (req, res) => { 
        console.log("test")
        products.update(req, res)
        })
    app.delete("/product/:id", (req, res) => { 
        products.delete(req, res)
        })
    app.all('*', (req, res)=>{
        res.sendFile(path.resolve('./client/dist/index.html'))
    })
}                          
