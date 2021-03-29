'use strict';


const express = require('express');
const notFoundHandler = require('./error-handlers/404.js');
const errorHandler = require('./error-handlers/500.js');
const logger = require('./middleware/logger.js');
const valid = require('./middleware/validator.js');
const app = express();

app.use(express.json());
app.use(logger);



app.get('/person',valid.loger(),(req,res) =>{

    res.json({
        name : req.query.name
    });
})



app.use('*',notFoundHandler);
app.use(errorHandler);


module.exports = {
    server : app ,
    start : (port) =>{
        const PORT = process.env.PORT || 3000;
        app.listen(PORT , () =>{
            console.log('Server is here ==>',PORT);
        })
    }
}