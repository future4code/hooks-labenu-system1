import { TurmaDatabase } from './../database/TurmaDatabase';
import { Request, Response } from "express";
import { Turma } from '../models/Turma';

export const editModuloTurma = async (req:Request, res: Response)=>{
    let errorCode = 400
    try {
        const id = req.body.id
        
        const turmaDatabase = new TurmaDatabase
        const result = await turmaDatabase.getTurmaById(id)

        const turma1= result[0]
              
        const turma = new Turma(
            turma1.id,
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
        
        console.log(turma)
        res.status(200).send({message: "Modulo atualizado", turma: turma})
        
    } catch (error) {
        res.status(errorCode).send({message: error.message})
    }
}