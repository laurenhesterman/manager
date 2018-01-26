var mongoose = require('mongoose');
var Product = mongoose.model('Product');
module.exports = {
    show: function(req, res) {
        Product.find({}, function(err, data) {
            console.log("test")
            if (data) {
                console.log(data)
                res.json(data)
            }
            if (err) {console.log(err)
                res.json(err)
            };                 
                
            })
    },
    show_one: function(req, res) {
        console.log("test2")
        var thisid = req.params.id
        console.log(thisid)
        Product.findOne({_id: thisid}, function(err, data){
            if (err) {
                // console.log(JSON.stringify(data));
                res.json(err)
            }
            if (data) {
                console.log("Got it", data)

                res.json({data:data})

            };                 
                
            })
    },
    create: function(req, res) {  
        console.log("test3")   
        var new_product = new Product({
            title: req.body.title,
            price: req.body.price,
            image: req.body.image
         });
         console.log("In the create function", new_product)
        new_product.save(function(err,product){
            if(err) {
                console.log('something went wrong');
                res.json(err)
            } else { // else console.log that we did well and then redirect to the root route
                console.log(new_product.id)
                res.json(product)
            }   
        })
    },
    update: function(req, res) {
        console.log("test4")
        var thisid = req.params.id
        console.log(thisid)       
        console.log(req.body.num) 
        // var opts = { runValidators: true }; 
        var client = req.body;   
        Product.findOneAndUpdate({_id: thisid}, {title:req.body.title, price:req.body.price, image:req.body.image}, { runValidators: true },  function(err, product){
            if(err){
                console.log("Something wrong when updating data!");
                res.json(err)
            }    
            if(product) {
                res.json(product)
            }  
            
        });
        
    },
    delete: function(req, res) {
        console.log("test5")
        var thisid = req.params.id
        console.log(thisid)
        Product.find({_id: thisid}).remove( function(err, tasks){
            if(err){
                console.log("Something wrong when deleting data!");
            }
            if(tasks) {
                res.json(tasks)
            }
        });  
       
    }
    
    
}