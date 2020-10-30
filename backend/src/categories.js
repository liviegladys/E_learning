const mongoose=require('mongoose');


const categoriesSchema= mongoose.Schema({
    
    CatTitle:{type:String,},
    sousCate:{type:String,},
   
});
 
module.exports=mongoose.model('categories',categoriesSchema);