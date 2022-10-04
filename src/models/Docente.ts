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
        private especialidade_id: string
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
        return this.especialidade_id
    }

        public setEspecialidades(newEspecialidades: string) {
        this.especialidade_id = newEspecialidades
    }
    
   }