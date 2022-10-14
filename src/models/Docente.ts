import { Usuario } from "./Usuario"
enum Especialidades{
    JS = "JS",
    REACT = "REACT",
    CSS = "CSS",
    TYPESCRIPT ="TYPESCRIPT",
    "PROGRAMAÇÃO ORIENTADA A OBJETO" = "PROGRAMAÇÃO ORIENTADA A OBJETO"
}
export type TDocente = {
    nome: string
    email: string,
    data_nasc: string,
    turma_id: string,
    especialidades: Especialidades[]
}

export class Docente extends Usuario {
    constructor(
        id:string,
        nome: string,
        email: string,
        data_nasc: string,
        turma_id: string,
        private especialidades: Especialidades[]
    ) {
    super(
        id,
        nome,
        email,
        data_nasc,
        turma_id
    )
    
    }
        public getEspecialidades() {
        return this.especialidades
    }

        public setEspecialidades(newEspecialidades: Especialidades[]) {
        this.especialidades = newEspecialidades
    }
    
   }