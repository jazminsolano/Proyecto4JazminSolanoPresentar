const express = require("express")
const app = express();
const bodyParser = require('body-parser');

//const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'pug');

app.get("/", (req, res) => {
    res.render('index',{})
  // res.sendFile(path.join(__dirname + "/index.html"))
});

app.listen(3002, () => {
    console.log('Servidor iniciado');
});





