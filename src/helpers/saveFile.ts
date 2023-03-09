import fs from 'fs';

const pathFile = './src/database/data.json';

export const saveDB = (data: any) => {    
    const dataToSave = JSON.stringify(data);
    fs.writeFileSync(pathFile, dataToSave);
}

export const loadDB = () => {

    if(!fs.existsSync(pathFile)){
        console.log('File does not exist');
        return null;
    }

    const info = fs.readFileSync(pathFile, {encoding: 'utf-8'});
    console.log(info);
    const dataInfo = JSON.parse(info.toString());
    console.log('show dataInfo', dataInfo);
    return null;
}