import express from "express";
/**
 * @param{*}app: express app
 */
import homeController from '../controller/homeController';
const router = express.Router();
const initWebRoutes=(app)=>{
    //path, handler
    router.get("/", homeController.handleHelloWord);
    router.get("/user", homeController.handleUserPage);   
    router.post("/users/create-user", homeController.handleCreateNewUser) 
    return app.use("/",router);
}

export default initWebRoutes;