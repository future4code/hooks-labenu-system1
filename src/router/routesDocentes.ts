import { Router } from "express";
import { DocentesCT } from "../Controller/DocentesController";
import { EstudantesCT } from "../Controller/EstudantesController";


const routerDocente = Router()
const docentesCT = new DocentesCT()


routerDocente.get("/docente" , docentesCT.getDocente)
routerDocente.post("/docente" , docentesCT.createDocente)
routerDocente.put("/docente/:id" , docentesCT.editDocenteByTurma)

export default routerDocente