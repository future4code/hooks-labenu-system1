import { Router } from "express";
import { EstudantesCT } from "../endpoints/EstudantesController";


const routerEstudantes = Router()
const estudanteCT = new EstudantesCT()


routerEstudantes.get("/estudante" , estudanteCT.getEstudante)
routerEstudantes.post("/estudante" , estudanteCT.createEstudante)
routerEstudantes.put("/estudante/:id" , estudanteCT.editEstudanteByTurma)

export default routerEstudantes