//import fs from 'fs';
import fs from 'fs/promises'; //imports fs as promises, so that we can use every fs method as promis instead of callback as below
//import { path, dirname} from 'path';
import  path, { dirname } from 'path'; //also works
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url); //import.meta.url gives path to this file(resHandler.js)
const __dirname = dirname(__filename); //takes current file path and gives current folder path

//if we use export in here, we have to import the method as import { resHandler } from './'
export const resHandler = (req, res, next) => {
    // fs.readFile('my-page.html', 'utf8', (err, data) => {
    //     res.send(data);
    // });

    //promise based approach for NodeJS Core APIs
    fs.readFile('my-page.html','utf-8')
        .then(data => {
            res.send(data);
        })
        .catch(err => console.log(err))
    //res.sendFile(path.join(__dirname,'my-page.html')); // will not work with modern sytax as there are no globals

}


//export default resHandler; // for multiple exports we can use export default, as it is useful only for one export
