import 'colorts/lib/string';
import { inquirerMenu, leerInput, listTaskToDelete, pausarApp } from './helpers/inquirer';
import { Tarea } from './models/tarea';
import { Tareas } from './models/tareas';
import { loadDB, saveDB } from './helpers/saveFile';

console.clear();
const main = async () => {
    
    let opt: any = '' 
    const tareas = new Tareas();
    const readTasks = loadDB()

    if(readTasks){
        tareas.loadTaskFromArray(readTasks);
    }
    
    do{
        opt = await inquirerMenu();  
        switch (opt) {
            case '1':
                const desc = await leerInput('Descripcion :');
                tareas.crearTarea(desc);
            break;

            case '2':
                tareas.allTasksList();
            break;

            case '3':
                tareas.taskCompletedPending(true);
            break;

            case '4':
                tareas.taskCompletedPending(false);
            break;

            case '6':
                const id = await listTaskToDelete(tareas.listadoArr);
                console.log(id);
            break;
        }

        saveDB(tareas.listadoArr);
        
        await pausarApp();     
    }while (opt !== '0');
}

main();