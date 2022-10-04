import { TurmaDatabase } from '../database/TurmaDatabase';
import { Request, Response } from "express";


export const getTurmasAtivas = async (req: Request, res:Response)=>{
    let errorCode = 400
    try {
        const turmaDatabase = new TurmaDatabase
        const result = await turmaDatabase.getTurmasAtivas()
        res.status(200).send({turmas: result})
    } catch (error) {
        res.status(errorCode).send({message: error.message})
    }
}