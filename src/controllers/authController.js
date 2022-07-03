import bcrypt from "bcrypt";
import { db } from "../dbStrategy/mongo.js";
import joi from "joi";

export async function createUser(req, res) {

    const user = req.body;

    const encrypedPassword = bcrypt.hashSync(user.password, 10);
    console.log(user, encrypedPassword)

    await db.collection('users').insertOne({...user, password: encrypedPassword});

    res.status(201).send('Usuário criado com sucesso :)');
}
