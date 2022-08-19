import express from 'express';
import {dirname,join} from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
dotenv.config(); //uso de dotenv para leer el archivo .env

const App = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

App.set ("port", process.env.PORT || 3000);

//inicializacion
App.listen (App.get("port") || 3000, () => {
    console.log("Server on port", App.get("port"));
})

App.use(express.static(join(__dirname,'public')));
App.set('views', join(__dirname, 'views'));
App.set('view engine', 'ejs');

//routes
import routes from './routes/routes.js';

App.use(routes);

