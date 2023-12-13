import  User from '../models/user.model.js'
import bcryptjs from 'bcryptjs'

export const signup = (req, res, next) => {
    const { username, email, password } = req.body;
    const hashedPassword = bcryptjs.hashSync(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });
    newUser.save()    
    .then(()=> {res.status(201).json({message: 'user added successfully'})})
    .catch((next)=> {res.status(500).json(next)})
}