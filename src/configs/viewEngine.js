import express from"express";
/**
 * 
 * @param {*} app - express app
 */

const configviewEngine =(app)=>{
    app.use(express.static('./src/public'));
    app.set("viewengine","ejs");
    app.set("views",";/src/views");

}

export default configviewEngine;