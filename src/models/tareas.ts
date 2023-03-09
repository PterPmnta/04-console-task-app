import { ITareas } from "../interfaces/tareas.interface";
import { Tarea } from "./tarea";


export class Tareas {
    _listado: ITareas = {}

    get listadoArr(){
        const listado: any = []
        Object.keys(this._listado).forEach(key => {
            listado.push(this._listado[key]);
        })
        return listado;
    }

    constructor(){
        this._listado = {};
    }

    crearTarea(desc = ''){
        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea
    }

    loadTaskFromArray(tareas: any){
        tareas.forEach((task: any) => {
            this._listado[task.id] = task;
        })
    }
}