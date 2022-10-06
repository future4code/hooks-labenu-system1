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
        nome: string,
        email: string,
        data_nasc: string,
        turma_id: string,
        private hobby_name: string
    ) {
    super(
    nome,
    email,
    data_nasc,
    turma_id
    )
    
    }
        public getHobbies() {
        return this.hobby_name
    }

        public setHobbies(newHobby_id: string) {
        this.hobby_name = newHobby_id
    }
    
   }
   