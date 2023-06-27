import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    id : {
        type : String,
        required : true,
        unique :true
    } ,
    url : String,
    detailUrl : String,
    title : Object,
    category : String,
    price : Object,
    quantity : Number,
    description : String,
    discount : String,
    tagline : String,
    ingredients: String,
    storage: String,
    shelf: String

},{ timestamps: true });


const Product = mongoose.model('product',productSchema);


export default Product;