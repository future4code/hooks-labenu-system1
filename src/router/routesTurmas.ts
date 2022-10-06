import { Router } from "express";
import { DocentesCT } from "../Controller/DocentesController";
import { EstudantesCT } from "../Controller/EstudantesController";
import { TurmasCT } from "../Controller/TurmasController";


const routerTurmas = Router()
const turmasCT = new TurmasCT()


routerTurmas.get("/turmas" , turmasCT.getTurmas)
routerTurmas.post("/turmas" , turmasCT.createTurma)
routerTurmas.put("/turmas/:id" , turmasCT.editModuloByTurma)

export default routerTurmas