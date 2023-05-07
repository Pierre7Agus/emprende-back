const http=require('http');
let name=require("./another");

console.log({name})

function request(){
  console.log("Se ha realizado una request")
}

//http.createServer(request).listen(4000);