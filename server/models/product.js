var mongoose = require('mongoose');
// create the schema
var ProductSchema = new mongoose.Schema({
    title:  {type: String, required: [true, 'Title is required'], minlength: 4},
    price: {type: Number, required: [true, 'Price is required'] },
    image: {type: String, required: [true, 'Image is required'], minlength: 4},
    
   }, {timestamps: true }) 

   mongoose.model('Product', ProductSchema); 
   
// register the schema as a model
var Product = mongoose.model('Product', ProductSchema);