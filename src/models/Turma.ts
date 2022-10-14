export type TTurma = {
    id: string,
    nome: string,
    docentes: string[],
    estudantes: string[],
    modulo: number
}

export class Turma {
    constructor(
        private id: string,
        private nome: string,
        private modulo: number
    ){
        if(!this.id){
            this.id = this.id = String(Date.now())
        }
    }

    public getId(){
        return this.id
    }

    public getNome(){
        return this.nome
    }

    public getModulo(){
        return this.modulo
    }

    public setId(newId: string){
        this.id = newId
    }

    public setNome(newNome: string){
        this.nome = newNome
    }

    public setModulo(newModulo: number){
        this.modulo = newModulo
    }


    
}