import { TurmaDatabase } from './../database/TurmaDatabase';
import { Turma } from './../models/Turma';
import { Request, Response } from "express"
import { v4 as generateId } from 'uuid';

export const createTurma = async (req: Request, res: Response) =>{
    let errorCode = 400
    try {
        const {nome} = req.body

        if(!nome){
            errorCode = 406
            throw new Error("Digite o nome da turma")
        }

         const turma = new Turma(
            generateId(),
            nome,
            0
        )

        const turmaDatabase = new TurmaDatabase
        await turmaDatabase.createTurma(turma)

        res.status(200).send({message: "Turma criada", turma: turma})
        
    } catch (error) {
        res.status(errorCode).send({message: error.message})
    }
}