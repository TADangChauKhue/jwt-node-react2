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
    router.post("/users/create-user", homeController.handleCreateNewUser);
    router.post("/delete-user/:id", homeController.handleDeleteUser);
    router.get("/update-user/:id", homeController.getUpdateUserPage);
    router.post("/user/update-user", homeController.handleUpdateUser);
    return app.use("/",router);
}

export default initWebRoutes;