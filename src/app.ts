import 'colorts/lib/string';
import { inquirerMenu, leerInput, pausarApp } from './helpers/inquirer';
import { Tarea } from './models/tarea';
import { Tareas } from './models/tareas';
import { loadDB, saveDB } from './helpers/saveFile';

console.clear();
const main = async () => {
    
    let opt: any = '' 
    const tareas = new Tareas();

    const readTasks = loadDB()

    if(readTasks){

    }
    
    await pausarApp();    
    
    do{
        opt = await inquirerMenu();  
        switch (opt) {
            case '1':
                const desc = await leerInput('Descripcion :');
                tareas.crearTarea(desc);
            break;

            case '2':
                console.log(tareas.listadoArr);
            break;
        }

        //saveDB(tareas.listadoArr);
        
        await pausarApp();     
    }while (opt !== '0');
}

main();