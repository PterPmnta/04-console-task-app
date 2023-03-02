import 'colorts/lib/string';
import * as readline from 'node:readline';

export const showMenu = () => {
    console.clear();
    console.log('================================'.green);
    console.log('      Seleccione una opcion     '.green);
    console.log('================================\n'.green);

    console.log(`${'1.'.green} Crear tarea`);
    console.log('2. Listar tarea');
    console.log('3. Listar tarea(s) completada(s)');
    console.log('4. Listar tarea(s) pendiente(s)');
    console.log('5. Completar tarea(s)');
    console.log('6. Borrar tarea');
    console.log('0. Salir \n');

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })

    rl.question('Seleccione una opcion: ', (opt:any) => {
        rl.close();
    });
}

export const pauseApp = () => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })

    rl.question(`\n Presione ${'Enter'.green} para pausar la app \n`, (opt:any) => {
        rl.close();
    });
}