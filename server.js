//nós estamos carregando o modulo do express que instalamos via NPM
var express = require('express');
//estamos criando uma instancia do express e guardando ela na variavel app
var app = express();

//HTTP solicitando uma url 
app.get('/', function (req, res) {
  console.log(req, res);
  res.send('Hello World! ' + req.query.nome);
});

app.get("/contato",function (req, res) {
	res.write("Modulo inicial");
	res.end();
	//res.send("Pagina de Contato");
});

//Nós estamos iniciando nosso servidor na porta 3000
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});


