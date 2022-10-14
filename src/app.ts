import express, { Router } from "express";
import cors from 'cors';
import router from "./router/routesEstudante";
import routerEstudantes from "./router/routesEstudante";
import routerDocente from "./router/routesDocentes";
import routerTurmas from "./router/routesTurmas";



const app = express()

app.use(express.json())
app.use(cors())

app.use("/" , routerEstudantes)
app.use("/" , routerDocente)
app.use("/" , routerTurmas)

//DOCUMENTAÇÃO : https://documenter.getpostman.com/view/21068479/2s83zfR5Ne

export default app