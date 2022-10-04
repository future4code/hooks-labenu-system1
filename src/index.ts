import { createHobbie } from './endpoints/CreateHobbie';
import { createDocente } from './endpoints/CreateDocente';
import { createEstudante } from './endpoints/CreateEstudante';
import { editEstudanteTurma } from './endpoints/EditEstudanteTurma';
import { editDocenteTurma } from './endpoints/EditDocenteTurma';
import { editModuloTurma } from './endpoints/EditModuloTurma';
import { getEstudante } from './endpoints/GetEstudantes';
import { getAllDocentes } from './endpoints/GetDocentes';
import { createTurma } from './endpoints/CrateTurma';
import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { getTurmasAtivas } from './endpoints/GetTurmasAtivas';


dotenv.config()
const app = express()

app.use(express.json())
app.use(cors())

app.listen(process.env.PORT || 3003, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
})

app.get("/turmas", getTurmasAtivas)

app.get("/estudante", getEstudante)

app.get("/docentes", getAllDocentes)

app.post("/turma", createTurma)

app.post("/estudante", createEstudante )

app.post("/docente", createDocente )

app.post("/hobbie", createHobbie )
 
app.put("/turma", editModuloTurma)

app.put("/estudante", editEstudanteTurma)

app.put("/docente", editDocenteTurma)
