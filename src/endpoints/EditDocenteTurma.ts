import { Request, Response } from "express";
import { DocenteDatabase } from "../database/DocenteDatabase";

export const editDocenteTurma = async (req: Request, res: Response)=>{
    let errorCode = 400
    try {
        const {id, new_turma_id} = req.body

        if(!id){
            errorCode = 406
            throw new Error("Digite o id do docente")
        }

        if(!new_turma_id){
            errorCode = 406
            throw new Error("Digite o id da nova turma")
        }

        const docenteDatabase = new DocenteDatabase
        await docenteDatabase.editDocenteTurma(id,new_turma_id)
        const docente = await docenteDatabase.getDocenteById(id)

        res.status(200).send({message:"Turma atualizada", docente: docente})
        
    } catch (error) {
        res.status(errorCode).send({message: error.message})
    }
}