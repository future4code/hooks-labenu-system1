import { Docente } from "../models/Docente";
import { Usuario } from "../models/Usuario";
import { BaseDatabase } from "./BaseDatabase";


export class DocenteDatabase extends BaseDatabase{
    public static TABLE_DOCENTE = "Docente";

    public async getAllDocentes(){
        const result = await BaseDatabase.connection.raw(`
        SELECT * FROM Docente
        `);

        return result[0]
    }

    public async createDocente(usuario: Usuario){
        await BaseDatabase.connection(DocenteDatabase.TABLE_DOCENTE)
        .insert(usuario)
    }

    public async getDocenteById(id: string){
        const result = await BaseDatabase.connection(DocenteDatabase.TABLE_DOCENTE)
        .select()
        .where({id});

        return result
    }

    public async editDocenteTurma(id:string,new_turma_id:string){
        await BaseDatabase.connection(DocenteDatabase.TABLE_DOCENTE)
        .update("turma_id",`${new_turma_id}`)
        .where("id",`${id}`)
       
    }
}