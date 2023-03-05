import { ITareas } from "../interfaces/tareas.interface";
import { Tarea } from "./tarea";


export class Tareas {
    _listado: ITareas = {}

    constructor(){
        this._listado = {};
    }

    crearTarea(desc = ''){
        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea
    }
}