import 'colorts/lib/string';
import * as readline from 'node:readline';

export const showMenu = () => {

    return new Promise((resolve) => {

        console.clear();
        console.log('================================'.green);
        console.log('      Seleccione una opcion     '.green);
        console.log('================================\n'.green);

        console.log(`${'1.'.green} Crear tarea`);
        console.log(`${'2.'.green} Listar tarea`);
        console.log(`${'3.'.green} Listar tarea(s) completada(s)`);
        console.log(`${'4.'.green} Listar tarea(s) pendiente(s)`);
        console.log(`${'5.'.green} Completar tarea(s)`);
        console.log(`${'6.'.green} Borrar tarea`);
        console.log(`${'0.'.green} Salir \n`);

        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        })

        rl.question('Seleccione una opcion: ', (opt:any) => {
            rl.close();
            resolve(opt);
        });

    })    
}

export const pauseApp = () => {
    return new Promise((resolve) => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        })
    
        rl.question(`\n Presione ${'Enter'.green} para pausar la app \n`, (opt:any) => {
            rl.close();
            resolve(opt);
        });
    })    
}