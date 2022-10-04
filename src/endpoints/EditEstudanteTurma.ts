import { Request, Response } from "express";
import { EstudanteDatabase } from "../database/EstudanteDatabase";

export const editEstudanteTurma = async (req:Request, res: Response)=>{
    let errorCode = 400
    try {
        const id = req.body.id 
        const new_turma_id = req.body.new_turma_id

        if(!id){
            errorCode = 406
            throw new Error("Digite o id do estudante")
        }

        if(!new_turma_id){
            errorCode = 406
            throw new Error("Digite o id da nova turma")
        }

        const estudanteDatabase = new EstudanteDatabase
        await estudanteDatabase.editEstudanteTurma(id,new_turma_id)
        const estudante = await estudanteDatabase.getEstudanteById(id)

        res.status(200).send({message:"Turma atulizada" ,estudante:estudante})
    } catch (error) {
        res.status(200).send(error.message)
    }
}