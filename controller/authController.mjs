// import user from '../model/user-schema.mjs';

// export const registerController = async (req,res) => {
//     try {
//         const {firstname,lastname,username,email,password,phone} = req.user
//         // validations
//         if( !firstname ){
//             return res.send({error: 'Name is required'})
//         }
//         if( !lastname ){
//             return res.send({error: 'Name is required'})
//         }
//         if( !username ){
//             return res.send({error: 'Username is required'})
//         }
//         if( !email ){
//             return res.send({error: 'Email is required'})
//         }
//         if( !password ){
//             return res.send({error: 'Name is required'})
//         }
//         if( !phone ){
//             return res.send({error: 'Phone is required'})
//         }

//         // check user
//         const exisitngUser = await userModel.findOne({email})
//         // existing user
//         if( exisitngUser ){
//             return res.status(200).send({
//                 success:true,
//                 message: 'Already registered ! Please Login ..'
//             })
//         }

//         //register user
//         const hashedPassword = await hashedPassword(password)

//         //save
//         const user = await new userModel({firstname,lastname,username,email,phone,password:hashedPassword}).save()


//         res.status(201).send({
//             success:true,
//             message: 'User Registered Successfully',
//             user
//         })


//     } catch(error){
//         console.log(error)
//         red.status(500).send({
//             success : false,
//             message : 'Error in Registration',
//             error
//         })
//     }
// };


// //POST LOGIN
// export const loginController = async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     //validation
//     if (!email || !password) {
//       return res.status(404).send({
//         success: false,
//         message: "Invalid email or password",
//       });
//     }
//     //check user
//     const user = await userModel.findOne({ email });
//     if (!user) {
//       return res.status(404).send({
//         success: false,
//         message: "Email is not registerd",
//       });
//     }
//     const match = await comparePassword(password, user.password);
//     if (!match) {
//       return res.status(200).send({
//         success: false,
//         message: "Invalid Password",
//       });
//     }
//     //token
//     const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
//       expiresIn: "7d",
//     });
//     res.status(200).send({
//       success: true,
//       message: "login successfully",
//       user: {
//         _id: user._id,
//         name: user.name,
//         email: user.email,
//         phone: user.phone,
//         address: user.address,
//         role: user.role,
//       },
//       token,
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(500).send({
//       success: false,
//       message: "Error in login",
//       error,
//     });
//   }
// };


// //test controller
// export const testController = (req, res) => {
//   try {
//     res.send("Protected Routes");
//   } catch (error) {
//     console.log(error);
//     res.send({ error });
//   }
// };


