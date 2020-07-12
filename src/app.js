const express = require('express');
const app = express();
const utilizadorrouter = require('./routes/route');
const bodyParser = require('body-parser');

//Configurações
app.set('port', process.env.PORT || 3000);
//Middlewares

app.use(express.json());

// Configurar CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
    }); 
//Rotas

app.use('/users', utilizadorrouter);

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: true
}));




app.use('/teste',(req,res)=>{
res.send("Rota TESTE.");
});
app.use('/',(req,res)=>{
res.send("Hello World");
});
app.listen(app.get('port'),()=>{
console.log("Start server on port "+app.get('port'))
})