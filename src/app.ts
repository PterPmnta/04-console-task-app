import 'colorts/lib/string';
import { inquirerMenu, pausarApp } from './helpers/inquirer';
import { Tarea } from './models/tarea';
import { Tareas } from './models/tareas';

console.clear();
const main = async () => {
    
    let opt: any = '' 
    
    do{
        //opt = await inquirerMenu();  
        const tareas = new Tareas();
        const tarea = new Tarea('Comprar comida');

        tareas._listado[tarea.id] = tarea;

        console.log(tareas);
        await pausarApp();     
    }while (opt !== '0');
}

main();