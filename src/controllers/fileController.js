import { db, objectId } from "../dbStrategy/mongo.js";
import joi from "joi";
import dayjs from "dayjs";

export async function getFiles(req, res){
    const session = res.locals.session;

    const files = await db.collection('files').find({userId: new objectId(session.userId)}).toArray();

    const user = await db.collection('users').findOne({_id: new objectId(session.userId) });
    const body = { name: user.name, files}
    res.send(body);
}

export async function createFile(req, res){

    const file = req.body;
    const {authorization} = req.headers;
    const token = authorization?.replace('Bearer ', '')

    const session = await db.collection('sessions').findOne({token});

    if(!session){
        return res.sendStatus(401);
    }

    await db.collection('files').insertOne({ ...file, 
        userId: session.userId,
        date: dayjs().format('DD/MM') 
    })

    res.status(201).send('Arquivo criado com sucesso')
} 