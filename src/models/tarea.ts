import { v4 as uuidv4 } from 'uuid';

export class Tarea {
    id = '';
    desc = '';
    completadoEn = null;

    constructor(desc: string){
        this.id = uuidv4();
        this.desc = desc;
        this.completadoEn = null;
    }
}