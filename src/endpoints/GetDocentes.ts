import { DocenteDatabase } from './../database/DocenteDatabase';
import { Request, Response } from "express";


export const getAllDocentes = async (req: Request, res: Response)=>{
    let errorCode = 400
    try {
        let search = req.query.search as string
        if(!search){
            search = "%"
        }
        
        const docenteDatabase = new DocenteDatabase
        const result = await docenteDatabase.getAllDocentes(search)

        res.status(200).send({docentes: result})

    } catch (error) {
        res.status(errorCode).send({message: error.message})
    }
}