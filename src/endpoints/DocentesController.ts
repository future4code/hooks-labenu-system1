import { Request, Response } from "express";
import { DocenteDatabase } from "../database/DocenteDatabase";
import { Docente } from "../models/Docente";
import { v4 as generateId } from 'uuid';


let errorCode = 400
const docenteDatabase = new DocenteDatabase
export class DocentesCT{
    async createDocente(req: Request , res: Response):Promise<void>{
   
        try {
            
            let {nome,email,data_nasc,turma_id,especialidades} = req.body
            
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
    
            if(!especialidades){
                errorCode = 406
                throw new Error("Digite o id da especialidade do docente.")
            }
            
            const docente = new Docente(
                generateId(),
                nome,
                email,
                data_nasc,
                turma_id,
                especialidades     
            )
    
            await docenteDatabase.createDocente(docente)
            
            
            res.status(200).send({message:"Docente registrado", docente: docente})
        } catch (error) {
            res.status(errorCode).send({message: error.message})
        }
    }

    async getDocente(req: Request , res: Response){
      
    try {
        let search = req.query.search as string
        if(!search){
            search = "%"
        }
        
        const result = await docenteDatabase.getAllDocentes(search)

        res.status(200).send({docentes: result})

    } catch (error) {
        res.status(errorCode).send({message: error.message})
    }
    }

    async editDocenteByTurma(req:Request , res: Response):Promise<void>{
        try {
            const id = req.params.id
            const  newTurma = req.body.newTurma
    
            if(!id){
                errorCode = 406
                throw new Error("Digite o id do docente")
            }
    
            if(!newTurma){
                errorCode = 406
                throw new Error("Digite o id da nova turma")
            }
    
            await docenteDatabase.editDocenteTurma(id,newTurma)
            const docente = await docenteDatabase.getDocenteById(id)
    
            res.status(200).send({message:"Turma atualizada", docente: docente})
            
        } catch (error) {
            res.status(errorCode).send({message: error.message})
        }
    }
}