import { Request, Response } from "express";
import { HobbieDatabase } from "../database/HobbieDatabase";
import { Hobbie } from "../models/Hobbie";

export const createHobbie = async (req: Request, res:Response)=>{
    let errorCode = 400
    try {

        const nome = req.body.nome
        const id_estudante = req.params.id_estudante

        if(!nome){
            errorCode = 406
            throw new Error("Digite o hobbie");
        }

        const hobbie = new Hobbie(
            nome
        )
        const hobbieDatabase = new HobbieDatabase
        await hobbieDatabase.createHobbie(hobbie)
        
        res.status(200).send({message:"Hobbie criado", hobbie: hobbie})
    } catch (error) {
        res.status(errorCode).send({message: error.message})
    }
}