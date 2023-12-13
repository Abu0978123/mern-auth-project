import  User from '../models/user.model.js'
import bcryptjs from 'bcryptjs'

export const signup = (req, res) => {
    const { username, email, password } = req.body;
    const hashedPassword = bcryptjs.hashSync(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });
    newUser.save()    
    .then(()=> {res.json({message: 'user added successfully'})})
    .catch((err)=> {res.json(err)})
}