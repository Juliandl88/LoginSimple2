//1- Invocamos a express

const express = require('express');
const app = express();

//2- Seteamos urlencoded para capturar los datos del formulario
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//3- Invocamos DotEnv
const dotenv = require('dotenv');
dotenv.config({path: "./env/.env"});

//4- Seteamos el directorio public
app.use("/resources", express.static('public'));
app.use("/resources", express.static(__dirname + "/public"));


app.get('/', (req, res) => {
    res.send    ('Hello World!');
})  // GET /

app.listen(3000, (req, res) => {
  console.log('Server is running on port 3000');
});