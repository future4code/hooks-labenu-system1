import { Request, Response } from "express";
import { HobbieDatabase } from "../database/HobbieDatabase";
import { Hobbie } from "../models/Hobbie";


let errorCode = 400
const hobbieDatabase = new HobbieDatabase
export class HobbieCT{

    async  createHobbie  (req: Request, res:Response){
      
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
            
            await hobbieDatabase.createHobbie(hobbie)
            
            res.status(200).send({message:"Hobbie criado", hobbie: hobbie})
        } catch (error) {
            res.status(errorCode).send({message: error.message})
        }
    }
}
