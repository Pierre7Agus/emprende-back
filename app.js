require('dotenv').config();
const http=require('http');
//let name=require("./another");

//console.log({name})

const PORT=process.env.PORT;



function controlador(req,res){
  console.log("Se ha realizado una request")
  res.writeHead(200,{"Content-Type":"text/html"});
  res.write("<h1>Esto es increible</h1>")
  res.end()
}



http.createServer(controlador).listen(PORT,()=>{
  console.log("Aplicacion corriendo en el puerto: ",PORT)
});