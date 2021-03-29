'use strict';

module.exports = {

     loger:() =>{
    
        return (req, res, next) =>{
            
            if(req.query.name == undefined){
    
                next('yea klam');
            }
            else{
    
                next();
            }
        }
    }
    
}