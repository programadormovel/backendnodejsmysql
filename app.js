const cors = require("cors");
const express = require("express");
var http = require("http");
var dt = require("./util/mydate");
var fs = require("fs");
var url = require("url");
// var adr = 'http://localhost:8085/default.htm?year=2017&month=february';
//var q = url.parse(adr, true);
var uc = require("upper-case");

const app = express();
const port = 8085;

// NOVA LINHA DE CODIGO PARA CORS
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.send("Backend do Mini Projeto 2022!");
});

// EXEMPLO DE CRIAÇÃO DO SERVIDOR NODEJS
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.end('Hello World!' + dt.myDateTime());
// }).listen(8085);

// EXEMPLO DE SERVIDOR EMULANDO UMA PÁGINA WEB
// http.createServer(function (req, res) {
//     fs.readFile('./dados.html', function(err, data) {
//       res.writeHead(200, {'Content-Type': 'text/html'});
//       res.write(data);
//       return res.end();
//     });
//   }).listen(8085);

// EXEMPLO DE CRIAÇÃO DE ARQUIVO 1
// fs.appendFile('dados.txt', 'Gravação de dados...!', function (err) {
//     if (err) throw err;
//     console.log('Arquivo salvo!');
//   });

// EXEMPLO DE CRIAÇÃO DE ARQUIVO 2
// fs.open('dados2.txt', 'w', function (err, file) {
//     if (err) throw err;
//     console.log('Arquivo criado!');
//   });

// EXEMPLO DE CRIAÇÃO DE ARQUIVO 3
// fs.writeFile('dados3.txt', 'Criação de arquivo utilizando fs.writeFile!', function (err) {
//     if (err) throw err;
//     console.log('Arquivo criado com sucesso!');
//   });

// EXEMPLO DE INSERÇÃO DE DADOS EM ARQUIVO
// fs.appendFile('dados.txt', ' Novos dados inseridos.', function (err) {
//     if (err) throw err;
//     console.log('Atualizado!');
//   });

// EXEMPLO DE ATUALIZAÇÃO DE DADOS EM ARQUIVO
// fs.writeFile('dados3.txt', 'Novos dados no arquivo dados3', function (err) {
//     if (err) throw err;
//     console.log('Arquivo trocado!');
//   });

// EXEMPLO DE ELIMINAÇÃO DE ARQUIVO
// fs.unlink('dados3.txt', function (err) {
//     if (err) throw err;
//     console.log('Arquivo apagado!');
//   });

// EXEMPLO DE APLICAÇÃO DO URL.PARSE
// console.log(q.host); //returns 'localhost:8080'
// console.log(q.pathname); //returns '/default.htm'
// console.log(q.search); //returns '?year=2017&month=february'

// var qdata = q.query; //returns an object: { year: 2017, month: 'february' }
// console.log(qdata.month); //returns 'february'

// EXEMPLO DE ABERTURA DE ARQUIVOS HTML
// http.createServer(function (req, res) {
//     var q = url.parse(req.url, true);
//     var filename = "." + q.pathname;
//     fs.readFile(filename, function(err, data) {
//       if (err) {
//         res.writeHead(404, {'Content-Type': 'text/html'});
//         return res.end("404 Not Found");
//       }
//       res.writeHead(200, {'Content-Type': 'text/html'});
//       res.write(data);
//       res.write(uc.upperCase("utilizando npm!"));
//       return res.end();
//     });
//   }).listen(8085);

// EXEMPLO DE ABERTURA DE ARQUIVO
// var rs = fs.createReadStream('./dados.txt');
// rs.on('open', function () {
//   console.log('O arquivo esta aberto!');
// });

// EXEMPLO DE DISPARO DE EVENTOS
// var events = require('events');
// var eventEmitter = new events.EventEmitter();

// //Create an event handler:
// var myEventHandler = function () {
//   console.log('Para o alto e avante!');
// }

// //Assign the event handler to an event:
// eventEmitter.on('batsinal', myEventHandler);

// //Fire the 'scream' event:
// eventEmitter.emit('batsinal');

// EXEMPLO DE UPLOAD DE ARQUIVOS
// var formidable = require("formidable");

// http
//   .createServer(function (req, res) {
//     if (req.url == "/upload") {
//       var form = new formidable.IncomingForm();
//       form.parse(req, function (err, fields, files) {
//         var oldpath = files.arquivo.filepath;
//         var newpath =
//           "./files/" + files.arquivo.originalFilename;
//         fs.rename(oldpath, newpath, function (err) {
//           if (err) throw err;
//           res.write("Arquivo enviado para o servidor");
//           res.end();
//         });
//       });
//     } else {
//       res.writeHead(200, { "Content-Type": "text/html" });
//       res.write(
//         '<form action="upload" method="post" enctype="multipart/form-data">'
//       );
//       res.write('<input type="file" name="arquivo"><br>');
//       res.write('<input type="submit">');
//       res.write("</form>");
//       return res.end();
//     }
//   })
//   .listen(8085);

// EXEMPLO DE ENVIO DE EMAILS
// var nodemailer = require('nodemailer');

// var transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'domtec@gmail.com',
//     pass: '12345678'
//   }
// });

// var mailOptions = {
//   from: 'domtec@gmail.com',
//   to: 'programadormovel@gmail.com',
//   subject: 'Enviando Email com Node.js',
//   text: 'Muito fácil de enviar com NodeJS!'
// };

// transporter.sendMail(mailOptions, function(error, info){
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Email enviado: ' + info.response);
//   }
// });

var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "miniprojeto",
});

// con.connect(function (err) {
//   if (err) throw err;
//   console.log("Connected!");
//   // criar banco de dados, se não existir
//   con.query("CREATE DATABASE miniprojeto1", function (err, result) {
//     if (err) throw err;
//     console.log("Banco de dados criado com sucesso!");
//   });
// });
// // Finaliza conexão com o banco de dados
// con.end();
// // reconecta no banco criado
// con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "123456",
//   database: "miniprojeto1",
// });
// // cria tabela nomes se não existir
// con.connect(function (err) {
//   if (err) throw err;
//   console.log("Reconectado!");
//   var sql =
//     "create table if not exists nomes1 (" +
//     "id int primary key auto_increment," +
//     "nome varchar(250) not null," +
//     "sobrenome varchar(250) null);";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Tabela criada com sucesso!");
//   });

// });

// cria tabela nomes se não existir
con.connect(function (err) {
  if (err) throw err;
  console.log("Reconectado!");
  //
  con.query("select * from nomes;", function (err, result) {
    if (err) throw err;
    console.log("Result: " + JSON.stringify(result));
  });
});

// rota para pesquisa de nomes
app.get("/nomes", function (req, res) {
  con.query("select * from nomes;", function (err, result) {
    if (err) throw err;
    res.send(result);
  });
});

// rota para pesquisa de nomes
app.get("/nome", function (req, res) {
  con.query("select * from nomes where id = ?;", [req.query.id], function (err, result) {
    if (err) throw err;
    res.send(result);
  });
});

// Inserir um nome
app.post("/nome", function (req, res) {
  console.log(req.body);
  const { nome, sobrenome } = req.body;
  console.log(nome);
  console.log(sobrenome);
  con.query(
    "insert into nomes (nome, sobrenome) values (?, ?)",
    [nome, sobrenome],
    function (err, result) {
      if (err) throw err;
      res.send("Nome inserido com sucesso!!!");
    }
  );
});

// Alterar um nome pelo id
app.put("/nome/:id", function (req, res) {
  console.log(req.body);
  const { nome, sobrenome } = req.body;
  console.log(req.params.id);
  console.log(nome);
  console.log(sobrenome);
  con.query(
    "update nomes set nome = ?, sobrenome = ? where id = ?",
    [nome, sobrenome, req.params.id],
    function (err, result) {
      if (err) throw err;
      res.send(`Editado o nome com o id ${req.params.id}`);
    }
  );
});

// Apagar um nome pelo id
app.delete("/nome/:id", function (req, res) {
  console.log(req.body);
  const { nome, sobrenome } = req.body;
  console.log(req.params.id);
  console.log(nome);
  console.log(sobrenome);
  con.query(
    "delete from nomes where id = ?",
    [req.params.id],
    function (err, result) {
      if (err) throw err;
      res.send(`Excluído o nome com o id ${req.params.id}`);
    }
  );
});

app.listen(port, () => {
  console.log(`Exemplo app node rodando no endereço http://localhost:${port}`);
});
