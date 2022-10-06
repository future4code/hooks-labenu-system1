import { Request, Response } from "express";
import { TurmaDatabase } from "../database/TurmaDatabase";
import { Turma } from "../models/Turma";

const turmaDatabase = new TurmaDatabase
let errorCode = 400
export class TurmasCT{

    async createTurma(req : Request , res: Response){
    try {
        const {nome} = req.body

        if(!nome){
            errorCode = 406
            throw new Error("Digite o nome da turma")
        }

         const turma = new Turma(
            nome,
            0
        )


        await turmaDatabase.createTurma(turma)

        res.status(200).send({message: "Turma criada", turma: turma})
        
    } catch (error) {
        res.status(errorCode).send({message: error.message})
    }
    }
    
    async getTurmas(req:Request , res: Response){
        try {
            const result = await turmaDatabase.getTurmasAtivas()
            res.status(200).send({turmas: result})
        } catch (error) {
            res.status(errorCode).send({message: error.message})
        }
    }

    async editModuloByTurma(req: Request , res :Response){
    try {
        const id = req.params.id

        const result = await turmaDatabase.getTurmaById(id)
        const turma1 = result[0]
              
        const turma = new Turma(
            turma1.nome,
            turma1.modulo
        )
        let newModulo

        if(turma1.modulo >= 6){
            newModulo = 0
            turma.setModulo(Number(newModulo))
            turmaDatabase.editTurma(id,Number(newModulo))
            
        }else if(turma1.modulo < 6){
            newModulo = Number(turma.getModulo())+1
            turma.setModulo(newModulo)
    
            turmaDatabase.editTurma(id,newModulo)
        }
        
        turmaDatabase.editTurma(id,newModulo)
        
        res.status(200).send({message: "Modulo atualizado", turma: turma})
        
    }catch (error : any) {
        res.status(errorCode).send({message: error.message})
    }
}
}