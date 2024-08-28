const express=require('express')
const mongose=require('mongoose')
const app=express();
var cors = require('cors');
// const cookieParser=require('cookie-parser');
const path=require('path')
app.use(cors()) 
app.use(express.json());
// const db=require('./secrets.js')
const db=require('./secrets.js').db
// const db1=db+""
// console.log(db)
const bodyParser=require('body-parser')

const patientRouter=require('./Routers/patientRouter')
const inventoryRouter=require('./Routers/inventoryRouter')
mongose.connect(db).then((x)=>{
    
    console.log('done');
    }).catch((err)=>{
    console.log(err)
    })
    const port=process.env.PORT || 5000;
    app.listen(port,function(){
        console.log(`server listening on port ${port}`); 
    });
    app.use(bodyParser.urlencoded({extended:false}))
    app.use('/patient',patientRouter);
    app.use('/inventory',inventoryRouter);
     