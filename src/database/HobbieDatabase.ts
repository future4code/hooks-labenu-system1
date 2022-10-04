import { Hobbie } from "../models/Hobbie";
import { BaseDatabase } from "./BaseDatabase";

export class HobbieDatabase extends BaseDatabase{
    public static TABLE_HOBBIE = "Hobby"

    public async createHobbie (hobbie:Hobbie){
        await BaseDatabase.connection(HobbieDatabase.TABLE_HOBBIE)
        .insert(hobbie)
    }

    public async getHobbieById(id: string){
        const result = await BaseDatabase.connection(HobbieDatabase.TABLE_HOBBIE)
        .select()
        .where({id});

        return result
    }
}