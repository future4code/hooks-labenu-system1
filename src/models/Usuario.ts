export type Tusuario = {
    id: string,
    nome: string
    email: string,
    data_nasc: string,
    turma_id: string
}

export class Usuario {
    constructor(
        private id: string,
        private nome: string,
        private email: string,
        private data_nasc: string,
        private turma_id: string
    ) {}

    public getId() {
        return this.id
    }

    public getNome() {
        return this.nome
    }
    
    public getEmail() {
        return this.email
    }

    public getNascimento() {
        return this.data_nasc
    }

    public getTurmaId() {
        return this.turma_id
    }

    public setId(newId: string) {
        this.id = newId
    }

    public setNome(newNome: string) {
        this.nome = newNome
    }

    public setEmail(newEmail: string) {
        this.email = newEmail
    }

    public setNascimento(newNascimento: string) {
        this.data_nasc = newNascimento
    }

    public setTurmaId(newTurmaId: string) {
        this.turma_id = newTurmaId
    }
}
