import { products} from "../constants/data.mjs"
import Product from "../model/product-schema.mjs";
// import { connection } from "mongoose";
// import Milk from "../model/milk-schema.mjs";


const DefaultData = async() => {
    try{
        // await Product.deleteMany({});
        await Product.insertMany(products);
        // await Milk.insertMany(milks);
        console.log('Data imported Successfully')
    } catch(error){
        console.log('Error while inserting default data',error.message);
    }
}

export default DefaultData;