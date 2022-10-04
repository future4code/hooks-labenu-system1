import { Usuario } from "./Usuario"

export type TEstudante = {
    id: string,
    nome: string
    email: string,
    data_nasc: string,
    turma_id: string
    hobbies: string[]
}

export class Estudante extends Usuario {
    constructor(
        id: string,
        nome: string,
        email: string,
        data_nasc: string,
        turma_id: string,
        private hobbies: string[]
    ) {
    super(
    id,
    nome,
    email,
    data_nasc,
    turma_id
    )
    
    }
        public getHobbies() {
        return this.hobbies
    }

        public setHobbies(newHobbies: string[]) {
        this.hobbies = newHobbies
    }
    
   }
   