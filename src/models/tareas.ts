import { ITareas } from '../interfaces/tareas.interface';
import { Tarea } from './tarea';

export class Tareas {
    _listado: ITareas = {};

    get listadoArr() {
        const listado: any = [];
        Object.keys(this._listado).forEach((key) => {
            listado.push(this._listado[key]);
        });
        return listado;
    }

    constructor() {
        this._listado = {};
    }

    crearTarea(desc = '') {
        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;
    }

    loadTaskFromArray(tareas: any) {
        tareas.forEach((task: any) => {
            this._listado[task.id] = task;
        });
    }

    allTasksList() {
        const listConverted = Object.values(this._listado);

        listConverted.forEach((task: any, index: number) => {
            const indice = `${index + 1}`.green;
            const { desc, completadoEn } = task;
            let taskStatus = '';

            if (completadoEn === null) {
                taskStatus = `${'Pendiente'.red}`;
            } else {
                taskStatus = `${'Completada'.green}`;
            }

            console.log(`${indice} ${desc} :: ${taskStatus}`);
        });
    }

    taskCompletedPending(status: boolean) {
        const listConverted = Object.values(this._listado);
        let taskStatus = '';
        let listFiltered = [];

        if (listConverted.length === 0) {
            console.log('No hay tareas para mostrar');
            return;
        }

        if (status === true) {
            taskStatus = 'Completed'.green;
            listFiltered = listConverted.filter((task: any) => {
                if (task.completadoEn !== null) return task;
            });
        } else {
            taskStatus = 'Pending'.red;
            listFiltered = listConverted.filter((task: any) => {
                if (task.completadoEn === null) return task;
            });
        }

        listFiltered.forEach((task: any, index: number) => {
            const indice = `${index + 1}`.green;
            const { desc, completadoEn } = task;

            if (status) {
                console.log(`${indice} ${desc} :: ${completadoEn.green}`);
            } else {
                console.log(`${indice} ${desc} :: ${taskStatus}`);
            }
        });
    }

    deleteTask(id: string) {
        if (this._listado[id]) {
            delete this._listado[id];
        }
    }

    toggleCompleted = (ids: any) => {
        ids.forEach((id: any) => {
            const tarea: any = this._listado[id];

            if (!tarea.completadoEn) {
                tarea.completadoEn = new Date().toISOString();
            }
        });

        this.listadoArr.forEach((tarea: any) => {
            if (!ids.includes(tarea.id)) {
                const task = this._listado[tarea.id];
                tarea.completadoEn = null;
            }
        });
    };
}
