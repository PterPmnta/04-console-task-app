import 'colorts/lib/string';
import { inquirerMenu } from './helpers/inquirer';

console.clear();
const main = async () => {
    console.log('Hola Mundo')
    
    let opt: any = '' 
    
    do{
        opt = await inquirerMenu();        
    }while (opt !== '0');
}

main();