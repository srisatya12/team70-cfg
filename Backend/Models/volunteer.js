const mongoose = require('mongoose');
mongoose.connect(db).then(function(db){
    
}).catch(function(err){
    console.log(err);
})
const volSchema =mongoose.Schema({

name:{
    type:String,
    required:true

}
,
email:{
type:String
},
password:{
    type:String
}


})
const volModel=mongoose.model('volModel',volSchema);
module.exports=volModel
