const mongoose = require('mongoose');
mongoose.connect(db).then(function(db){
    
}).catch(function(err){
    console.log(err);
})
const KitSchema =mongoose.Schema({

weight:{
    type:Array
},
items:{
    type:Array
}


})
const KitModel=mongoose.model('KitModel',KitSchema);
module.exports=KitModel
