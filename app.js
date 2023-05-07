require('dotenv').config();
const http=require('http');
let name=require("./another");

//console.log({name})

const PORT=process.env.PORT;



function request(){
  console.log("Se ha realizado una request")
}



http.createServer(request).listen(PORT,()=>{
  console.log("Aplicacion corriendo en el puerto: ",PORT)
});