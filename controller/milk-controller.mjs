
// //import { response } from 'express';

// import Milk from '../model/milk-schema.mjs'

// export const getMilks = async (request, response) => {
//     try {
//         const milks = await Milk.find({});

//         response.status(200).json(milks);
//     } catch (error) {
//         response.status(500).json({ message: error.message });

//     }

// } 




// export const getMilkById = async (request, response) => {
//     try {
//         const id = request.params.id;
//         const milk = await Milk.findOne({'id': id})

//         response.status(200).json(milk);

//     } catch(error) {
//         response.status(500).json({ message: error.message })
//     }
// }