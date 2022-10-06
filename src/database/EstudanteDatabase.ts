import { Estudante } from './../models/Estudante';
import { BaseDatabase } from "./BaseDatabase";

export class EstudanteDatabase extends BaseDatabase{
    public static TABLE_ESTUDANTE = "Estudante";

    public async getEstudante(nome:string){
        const result = await BaseDatabase.connection(EstudanteDatabase.TABLE_ESTUDANTE)
        .select("*")
        .where("nome", "like", `%${nome}%`)

        return result
    }

   
    public async createEstudante(estudante: Estudante){
        await BaseDatabase.connection(EstudanteDatabase.TABLE_ESTUDANTE)
        .insert(estudante)
    }

    public async getEstudanteById(id: string){
        const result = await BaseDatabase.connection(EstudanteDatabase.TABLE_ESTUDANTE)
        .select()
        .where({id});

        return result
    }

    public async editEstudanteTurma(id:string,new_turma_id:string){
        await BaseDatabase.connection(EstudanteDatabase.TABLE_ESTUDANTE)
        .update("turma_id",`${new_turma_id}`)
        .where("id",`${id}`)
    }
}