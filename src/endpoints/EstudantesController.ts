
import { EstudanteDatabase } from '../database/EstudanteDatabase';
import { Request, Response } from "express";
import { Estudante } from '../models/Estudante';
import { v4 as generateId } from 'uuid';


let errorCode = 400
const estudanteDatabase = new EstudanteDatabase
export class EstudantesCT{
    async createEstudante (req:Request, res: Response) : Promise<void >{
        try {
    
            const {nome,email,data_nasc,turma_id,hobby_id} = req.body
    
            if(!nome){
                errorCode = 406
                throw new Error("Digite o nome do estudante.")
            }
    
            if(!email){
                errorCode = 406
                throw new Error("Digite o email do estudante.")
            }
    
            if(!data_nasc){
                errorCode = 406
                throw new Error("Digite a data de nascimento do estudante.")
            }
    
            if(!turma_id){
                errorCode = 406
                throw new Error("Digite o id da turma do estudante.")
            }
    
            if(!hobby_id){
                errorCode = 406
                throw new Error("Digite o hobbie do estudante.")
            }
            
            const estudante = new Estudante(
                generateId(),
                nome,
                email,
                data_nasc,
                turma_id,
                hobby_id            
            )
    
           
            await estudanteDatabase.createEstudante(estudante) 

            res.status(200).send({message:"Estudante registrado", estudante: estudante})
    
        } catch (error) {
            res.status(errorCode).send({message: error.message})
        }
    }
    

    async getEstudante(req:Request, res:Response):Promise<void>{
        try {
            let nome = req.query.nome as string
    
            if(!nome){
                nome = "%"
            }

            const result = await estudanteDatabase.getEstudante(nome)
    
            res.status(200).send({estudantes: result})
            
        } catch (error) {
            res.status(errorCode).send({message: error.message})
        }
    }
    
    async editEstudanteByTurma(req:Request , res:Response){
        try {
            const id = req.params.id 
            const new_turma_id = req.body.new_turma_id
    
            if(!id){
                errorCode = 406
                throw new Error("Digite o id do estudante")
            }
    
            if(!new_turma_id){
                errorCode = 406
                throw new Error("Digite o id da nova turma")
            }
    
            await estudanteDatabase.editEstudanteTurma(id,new_turma_id)
            const estudante = await estudanteDatabase.getEstudanteById(id)
    
            res.status(200).send({message:"Turma atulizada" ,estudante:estudante})
        } catch (error) {
            res.status(200).send(error.message)
        }
    }
}