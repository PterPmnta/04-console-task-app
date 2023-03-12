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

    allTasksList(){

        const listConverted = Object.values(this._listado);

        console.log();

        listConverted.forEach((task: any, index: number) => {

            const indice = `${index+1}`.green
            const {desc, completadoEn} = task
            let taskStatus = ''

            if(completadoEn === null){
                taskStatus = `${'Pendiente'.red}`
            }else{
                taskStatus = `${'Completada'.green}`
            } 
            
            console.log(`${indice} ${desc} :: ${taskStatus}`)
        })
        console.log();
    }

    taskCompletedPending(status: boolean){

        const listConverted = Object.values(this._listado);
        let taskStatus = ''
        let listFiltered = []

        if(listConverted.length === 0){
            console.log('No hay tareas para mostrar');
            return;
        }

        if(status === true) {
            taskStatus = 'Completed'.green;
            listFiltered = listConverted.filter((task: any) => {
                if(task.completadoEn !== null) return task;
            });
        } else{
            taskStatus = 'Pending'.red;
            listFiltered = listConverted.filter((task: any) => {
                if(task.completadoEn === null) return task;
            });
        }

        console.log();
        listFiltered.forEach((task: any, index: number) => {

            const indice = `${index+1}`.green
            const {desc, completadoEn} = task;

            if(status){
                console.log(`${indice} ${desc} :: ${completadoEn}`)
            }else{
                console.log(`${indice} ${desc} :: ${taskStatus}`)
            }
            
        })
        console.log();
    }
}