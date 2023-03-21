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
                name: `${'1.'.green} Crear tarea`
            },
            {
                value: '2',
                name: `${'2.'.green} Listar tarea(s)`
            },
            {
                value: '3',
                name: `${'3.'.green} Listar tarea(s) completada(s)`
            },
            {
                value: '4',
                name: `${'4.'.green} Listar tarea(s) pendiente(s)`
            },
            {
                value: '5',
                name: `${'5.'.green} Completar tarea(s)`
            },
            {
                value: '6',
                name: `${'6.'.green} Borrar tarea`
            },
            {
                value: '0',
                name: `${'0.'.green} Salir`
            }
        ]
    }
];

export const inquirerMenu = async () => {
    console.clear();
    console.log('================================'.green);
    console.log('      Seleccione una opcion     '.green);
    console.log('================================\n'.green);

    const { opcion } = await inquirer.prompt(preguntas);

    return opcion;
};

export const pausarApp = async () => {
    const preguntas = [
        {
            type: 'input',
            name: 'enter',
            message: `Presione ${'enter'.green} para continuar`
        }
    ];

    await inquirer.prompt(preguntas);
};

export const leerInput = async (message: string) => {
    const question = [
        {
            type: 'input',
            name: 'desc',
            message: 'message',
            validate(value: any) {
                if (value.length === 0) {
                    return 'Por favor ingrese un valor';
                }
                return true;
            }
        }
    ];

    const { desc } = await inquirer.prompt(question);
    return desc;
};

export const listTaskToDelete = async (tareas: Array<any>) => {
    const choices = tareas.map((tarea, index: number) => {
        const idx = `${index + 1}.`.green;

        return {
            value: tarea.id,
            name: `${idx} ${tarea.desc}`
        };
    });

    choices.unshift({
        value: 0,
        name: '0.'.green + 'Cancelar'
    });

    const preguntas = [
        {
            type: 'list',
            name: 'id',
            message: 'Borrar tarea',
            choices
        }
    ];

    const { id } = await inquirer.prompt(preguntas);
    return id;
};

export const confirmTaskToDelete = async (message: string) => {
    const question = [
        {
            type: 'confirm',
            name: 'ok',
            message
        }
    ];

    const { ok } = await inquirer.prompt(question);
    return ok;
};

export const listTaskToComplete = async (tareas: Array<any>) => {
    const choices = tareas.map((tarea, index: number) => {
        const idx = `${index + 1}.`.green;

        console.log(tarea);

        return {
            value: tarea.id,
            name: `${idx} ${tarea.desc}`,
            checked: tarea.completadoEn ? true : false
        };
    });

    const pregunta = [
        {
            type: 'checkbox',
            name: 'ids',
            message: 'Seleccione la tarea',
            choices
        }
    ];

    const { ids } = await inquirer.prompt(pregunta);
    return ids;
};
