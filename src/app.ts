import 'colorts/lib/string';
import { inquirerMenu, pausarApp } from './helpers/inquirer';

console.clear();
const main = async () => {
    console.log('Hola Mundo')
    
    let opt: any = '' 
    
    do{
        opt = await inquirerMenu();  
        await pausarApp();     
    }while (opt !== '0');
}

main();