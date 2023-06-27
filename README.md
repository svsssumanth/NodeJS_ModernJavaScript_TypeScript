# NodeJS_ModernJavaScript_TypeScript

For Typescript


npm install -g typescript


to convert ts file to js we type ======== tsc <filename.ts> ========= this creates a js file and this file is referenvced in index.html

tsc --init ===> this command creates a tsconfig.json file where we can specify the configurations for the ts file

once tsconfig.json file is created, we can just complie all the ts files using just tsc command not tsc <filename.ts> as config file gets into act


Object and Array Types:




TYpescript and NodeJS

install @types/node package as it will provide typescript translation for JS features ---> with this we can use the normal JS code in typescript

npm install --save-dev @types/express ---> typescript translation for express library


in tsconfig.json ---. uncomment moduleReoultion and change value to node



Once all the routes are defined, complie the ts code using tsc command and then run the project using node app.js

this runs the project and we can test it using postman by hitting the apis


//to set the directory where the complied Javascript files are to be stored. we need to uncomment "outDir" in tsconfig.json file 

//rootDirectory for the typescript is set using "rootDir" key in tsconfig.json, so that when we run tsc command to compile to the JS code, typescript will know where to find the code that needs compilation



In addition, you can find a more complex Node TypeScript project/ project setup here: https://github.com/Microsoft/TypeScript-Node-Starter#typescript-node-starter

This may serve as an additional inspiration on how you can build Node TypeScript projects.

