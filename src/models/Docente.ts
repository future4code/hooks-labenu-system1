import { Usuario } from "./Usuario"

export type TDocente = {
    id: string,
    nome: string
    email: string,
    data_nasc: string,
    turma_id: string,
    especialidades: string[]
}

export class Docente extends Usuario {
    constructor(
        id: string,
        nome: string,
        email: string,
        data_nasc: string,
        turma_id: string,
        private especialidades: string[]
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

        public setEspecialidades(newEspecialidades: string[]) {
        this.especialidades = newEspecialidades
    }
    
   }