import { DocenteDatabase } from './../database/DocenteDatabase';
import { Request, Response } from "express";


export const getAllDocentes = async (req: Request, res: Response)=>{
    let errorCode = 400
    try {
        
        const docenteDatabase = new DocenteDatabase
        const result = await docenteDatabase.getAllDocentes()

        res.status(200).send({docentes: result})

    } catch (error) {
        res.status(errorCode).send({message: error.message})
    }
}