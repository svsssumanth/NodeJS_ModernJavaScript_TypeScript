//to use ES Modules we need to set "type" in Package.json as "module"


import express from 'express';

import  { resHandler }  from './resHandler.js'; // for our internal file exports, we need to add the .js extension
//with this import approach we have to use the same name that we used in export

//import res from './resHandler.js' // with default export we can use any name that we want

//const express = require('express');

const app = express();

app.get('/', resHandler);

app.listen(3000);
