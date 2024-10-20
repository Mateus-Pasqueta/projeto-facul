import db from "../config/database.js";
import jsonwebtoken from "jsonwebtoken";
import { PRIVATE_KEY } from "../config/auth.js";

const register = async (req, res) => {
    const { username, password } = req.body;

    const [ results, fields ] = await db.query(
        "INSERT INTO users (username, password) VALUES (?, ?)",
        [username, password]
    )
    res.status(201).send({
        message: "User add",
        body : {
            users: { username, password }
        }
    })
};

const login = async (req, res) => {
    const { username, password } = req.body;

    const [ results ] = await db.query(
        "SELECT * FROM users WHERE username = ?",
        [username]
    );

    if (results && results.length > 0 ) {
        const user = results[0];
        if (user.username === username && user.password === password) {
            const token = jsonwebtoken.sign(
                { user: JSON.stringify(user.id) },
                PRIVATE_KEY,
                { expiresIn: '60m' }
              );

              res.send({
                message: "logado",
                token, 
            })
        }else {
            res.send({
                message: "ta errado"
            })        
        }
    }else {
        res.send({
            message: "ta errado"
        })
    }
}

const loginController = {
    register,
    login
};

export default loginController