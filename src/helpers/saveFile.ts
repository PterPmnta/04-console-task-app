import fs from 'fs';

export const saveDB = (data: any) => {

    const pathFile = './src/database/data.json';

    fs.writeFileSync(pathFile, JSON.stringify(data));
}