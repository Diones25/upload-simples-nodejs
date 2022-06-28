import express from 'express';
import multer from 'multer';
import path from 'path';
const app = express();
const port = 5500;

app.set('view engine', 'ejs');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, "uploads/")
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname +Date.now() + path.extname(file.originalname) );
    }
})

const upload = multer({ storage });

app.get("/", (req, res) => {
    res.render("index");
});

app.post("/upload", upload.single("file"), (req, res) => {
    res.send("Arquivo recebido!");
})

app.listen(port, () => {
    console.log(`Servidor rodando no endereço: http://localhost:${port}`)
})