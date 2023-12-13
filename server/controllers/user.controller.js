import User from "../models/user.model.js"
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