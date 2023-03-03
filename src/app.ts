import 'colorts/lib/string';
import { pauseApp, showMenu } from './helpers/mensajes';

console.clear();
const main = async () => {
    console.log('Hola Mundo')
    
    let opt: any = '' 
    
    do{
        opt = await showMenu();

        if(opt !== 0){
            await pauseApp();
        }
        
    }while (opt !== '0');
}

main();