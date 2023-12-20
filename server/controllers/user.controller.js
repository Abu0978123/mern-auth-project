import User from "../models/user.model.js"
import { errorHandler } from "../utils/error.js"
export const test = (req, res) => {
    res.json({
        message: "api is working"
    })
}

export const getData = (req, res) => {
    User.find()
    .then(users => res.status(200).json(users))
    .catch(err => res.status(404).json(err))
}

export const updateData = async(req, res, next) => {
  if(req.user.id !== req.params.id) {
    return next(errorHandler(401, "you can update only your account" ));
  }
  try {
    if(req.body.password) {
       req.body.password = bcryptjs.hashSync(password, 10);
    }
    const updatedData = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: {
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            profilePicture: req.body.profilePicture, 
          }
        },
        { new: true }
        );
        const { password, ...rest } = updatedData._doc;
    res.status(200).json(rest);
  } catch (error) {
    next(error);
  }
}