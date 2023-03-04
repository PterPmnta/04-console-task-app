import inquirer from 'inquirer';
import 'colorts/lib/string';

const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Que desea hacer?',
        choices: [
            {
                value: '1',
                name: '1. Crear tarea'
            },
            {
                value: '2',
                name: '2. Listar tarea(s)'
            },
            {
                value: '3',
                name: '3. Listar tarea(s) completada(s)'
            },
            {
                value: '4',
                name: '4. Listar tarea(s) pendiente(s)'
            },
            {
                value: '5',
                name: '5. Completar tarea(s)'
            },
            {
                value: '6',
                name: '6. Borrar tarea'
            },
            {
                value: '0',
                name: '0. Salir'
            }
        ]
    }
]

export const inquirerMenu = async() => {

    console.clear();
    console.log('================================'.green);
    console.log('      Seleccione una opcion     '.green);
    console.log('================================\n'.green);

    const {opcion} = await inquirer.prompt(preguntas);

    return opcion;
}

export const pausarApp = async () => {

    const preguntas = [
        {
            type: 'input',
            name: 'enter',
            message: `Presione ${'enter'.green} para continuar`
        }
    ]

    await inquirer.prompt(preguntas);
} 