import express from "express";
import configViewEngine from "./config/viewEngine";
import initWebRoutes from "./routes/web";
import initApiRoutes from "./routes/api";
import configCors from "./config/cors";


import bodyParser from 'body-parser';
import connection from "./config/connectDB";


const app= express();

//config cors
configCors(app);

//config view engine
configViewEngine(app);
//config body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//test connection db
connection();

//init web routes
initWebRoutes(app);
initApiRoutes(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT,()=>{
    console.log(">>> JWT Backend is running on the port = "+PORT);
})