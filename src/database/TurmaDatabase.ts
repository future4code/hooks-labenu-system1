import { Turma } from './../models/Turma';
import { BaseDatabase } from "./BaseDatabase";

export class TurmaDatabase extends BaseDatabase{
    public static TABLE_TURMA = "Turma";

    public async getTurmasAtivas(){
        const result = await BaseDatabase.connection(TurmaDatabase.TABLE_TURMA)
        .select()
        .where("modulo",">","0")

        return result
    }

    public async createTurma(turma: Turma){
        await BaseDatabase.connection(TurmaDatabase.TABLE_TURMA)
        .insert(turma)
    }

    public async getTurmaById(id: string){
        const result = await BaseDatabase.connection(TurmaDatabase.TABLE_TURMA)
        .select()
        .where({id});

        return result
    }

    public async editTurma(id:string,newModulo:number){
        await BaseDatabase.connection(TurmaDatabase.TABLE_TURMA)
        .update("modulo",`${newModulo}`)
        .where("id",`${id}`)
       
    }
}