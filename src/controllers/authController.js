import bcrypt from "bcrypt";
import { db } from "../dbStrategy/mongo.js";
import joi from "joi";

export async function createUser(req, res) {

    const user = req.body;

    const userSchema = joi.object({
        name: joi.string().required(),
        email: joi.string().email().required(),
        password: joi.string().required(),
        password2: joi.string().required()
    })

    const {error} = userSchema.validate(user, {abortEarly: false});
    
    if(error){
        const messages = error.details.map(err => err.message)
        return res.status(422).send(messages)
    }

    const existedEmail = await db.collection('users').findOne({email: user.email})
    if(existedEmail){
        return res.status(400).send('Email já cadastrado')
    }

    if( user.password !== user.password2){
        console.log(user.password, user.password2)
        return res.status(400).send('Senhas são diferentes, insira duas senhas idênticas')
    } 
    const encrypedPassword = bcrypt.hashSync(user.password, 10);
    console.log(user, encrypedPassword)

    await db.collection('users').insertOne({name: user.name, email: user.email, password: encrypedPassword});

    res.status(201).send('Usuário criado com sucesso :)');
}
