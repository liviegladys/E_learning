const mongoose=require('mongoose');


const OrigamiSchema= mongoose.Schema({
    
    OrigamiName:{type:String,},
    OrigamiPic:{type:String, default: 'boite.jpg'},
    OrigamiDiag:{type:String,default: 'boite.jpg'},
    OrigamiCate:{type:String,enum:['animaux','fleur','']}
    
});
 
module.exports=mongoose.model('origami',OrigamiSchema);

