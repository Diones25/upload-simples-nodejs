const express = require('express');
const router = require('./routes/routes.js');
const conn = require('./db/conn.js');
const Upload = require('./model/Upload.js');
const session = require('express-session');
const flash = require('express-flash');
const path = require('path');

const app = express();
app.use(express.urlencoded({ extended: true }));

const port = 5500;

app.use(session({
    secret: "JKLAns9872866&%#@(#@!)(YDHJKVbsghjatdBGDB",
    resave: true,
    saveUninitialized: true
}));

app.use(flash());

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.use(router);

conn
    //.sync({ force: true })
    .sync() 
    .then(() => {
        app.listen(port, () => { 
            console.log(`Servidor rodando no endereço: http://localhost:${port}`)
        })
    });
