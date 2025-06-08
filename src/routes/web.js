import express from "express";
/**
 * @param{*}app: express app
 */
const router = express.Router();
const initWebRoutes=(app)=>{
    router.get("/",(req,res)=>{
        return res.send("Hello word2");
    })
    return app.use("/",router);
}

export default initWebRoutes;