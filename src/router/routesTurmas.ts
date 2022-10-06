import { Router } from "express";
import { DocentesCT } from "../endpoints/DocentesController";
import { EstudantesCT } from "../endpoints/EstudantesController";
import { TurmasCT } from "../endpoints/TurmasController";


const routerTurmas = Router()
const turmasCT = new TurmasCT()


routerTurmas.get("/turmas" , turmasCT.getTurmas)
routerTurmas.post("/turmas" , turmasCT.createTurma)
routerTurmas.put("/turmas/:id" , turmasCT.editModuloByTurma)

export default routerTurmas