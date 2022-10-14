import { EstudanteDatabase } from './../database/EstudanteDatabase';
import { Estudante } from './../models/Estudante';
import { Request, Response } from "express";
import { v4 as generateId } from 'uuid';

export const createEstudante = async(req:Request, res: Response)=>{
    let errorCode = 400
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

        const estudanteDatabase = new EstudanteDatabase
        await estudanteDatabase.createEstudante(estudante)

        res.status(200).send({message:"Estudante registrado", estudante: estudante})

    } catch (error) {
        res.status(errorCode).send({message: error.message})
    }
}