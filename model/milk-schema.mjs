import mongoose from "mongoose";

const milkSchema = new mongoose.Schema({
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
    slug: {
      type: String,
      required: true,
    }
},{ timestamps: true });


const Milk = mongoose.model('milk',milkSchema);


export default Milk;