import { v4 as generateId } from "uuid"

export class Hobbie{
    private id?: string
    constructor(
        
        private nome: string
    ){
        if(!this.id){
            this.id = this.id = generateId()
        }
    }
}