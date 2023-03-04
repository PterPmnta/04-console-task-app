import inquirer from 'inquirer';
import 'colorts/lib/string';

const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Que desea hacer?',
        choices: ['opt1', 'opt2', 'opt3']
    }
]

export const inquirerMenu = async() => {

    console.clear();
    console.log('================================'.green);
    console.log('      Seleccione una opcion     '.green);
    console.log('================================\n'.green);

    const opt = await inquirer.prompt(preguntas);

    return opt;
}