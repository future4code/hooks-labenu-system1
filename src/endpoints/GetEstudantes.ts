
import { EstudanteDatabase } from './../database/EstudanteDatabase';
import { Request, Response } from "express";


export const getEstudante = async(req:Request, res:Response)=>{
    let errorCode = 400
    try {
        const nome = req.body.nome

       
        const estudanteDatabase = new EstudanteDatabase
        const result = await estudanteDatabase.getEstudante(nome)

        res.status(200).send({estudantes: result})
        
    } catch (error) {
        res.status(errorCode).send({message: error.message})
    }
}