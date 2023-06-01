const Upload = require('../model/Upload.js');

const renderIndex = async (req, res) => {
  const data = await Upload.findAll();
  res.render("index", { data });
}

const createUpload = async (req, res) => {
  const imageExist = req.file;  

  if (!imageExist) {

    req.flash('messageError', 'Seleciona uma imagem');
    req.session.save(() => {
      res.redirect('/');
    });
    return; 

  } else {
    const imagem = req.file.filename;

    await Upload.create({ imagem });
    req.flash('message', 'Upload criado com sucesso!')

    req.session.save(() => {
      res.redirect('/');
    })

  }
};

module.exports = {
  renderIndex,
  createUpload
};