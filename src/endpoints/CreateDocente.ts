import { Docente } from './../models/Docente';
import { Request, Response } from "express";
import { DocenteDatabase } from "../database/DocenteDatabase";
import { v4 as generateId } from "uuid";

export const createDocente = async(req:Request, res: Response)=>{
    let errorCode = 400
    try {
        
        const {nome,email,data_nasc,turma_id,especialidade_id} = req.body

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

        if(!especialidade_id){
            errorCode = 406
            throw new Error("Digite o id da especialidade do docente.")
        }
        
        const docente = new Docente(
            generateId(),
            nome,
            email,
            data_nasc,
            turma_id,
            especialidade_id        
        )

        const docentedataBase = new DocenteDatabase
        await docentedataBase.createDocente(docente)
        
        
        res.status(200).send({message:"Docente registrado", docente: docente})
    } catch (error) {
        res.status(errorCode).send({message: error.message})
    }
}