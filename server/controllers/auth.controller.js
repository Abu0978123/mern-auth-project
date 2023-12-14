import  User from '../models/user.model.js'
import bcryptjs from 'bcryptjs'
import { errorHandler } from '../utils/error.js';
import jwt from 'jsonwebtoken';
export const signup = (req, res, next) => {
    const { username, email, password } = req.body;
    const hashedPassword = bcryptjs.hashSync(password, 5);
    const newUser = new User({ username, email, password: hashedPassword });
    newUser.save()    
    .then(()=> {res.status(201).json({message: 'user added successfully'})})
    .catch((error)=> {res.status(500).next(error)})
}

export const sign = async (req, res, next) => {
    const { email, password } = req.body;
    try {
      const validUser = await User.findOne({ email });
      if (!validUser) return next(errorHandler(404, 'User not found'));
    // if (!validUser)  return res.status(404).json({ message: 'User not found' });
      const validPassword = bcryptjs.compareSync(password, validUser.password);
      if (!validPassword) return next(errorHandler(401, 'wrong credentials'));
      const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET_KEY);
      const { password: hashedPassword, ...rest } = validUser._doc;
      const expiryDate = new Date(Date.now() + 3600000); // 1 hour
      res 
        .cookie('access_token', token, { httpOnly: true, expires: expiryDate })
        .status(200)
        .json(rest);
    } catch (error) {
      next(error);
    }
  };

// export const sign  = (req, res, next) =>{ 
//     const { email, password } = req.body; 
//     try {
//         const validUser = User.findOne({ email });
//         if (!validUser) next(errorHandler(404, "user not found"));
//         const validPassword = bcryptjs.compareSync(password, validUser.password);
//         if (!validPassword) next(errorHandler(401, "wrong credentials"));
//         const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET_KEY);
//         res.cookie('access_token', token, {httpOnly: true})
//         .status(200)
//         .json({validUser});
//     } catch (error) {
//         next(error);
//     }
// }
