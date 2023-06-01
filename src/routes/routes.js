const { Router } = require('express');
const uploadController = require('../controllers/uploadController.js');
const upload = require('../middlewares/upload.js');

const router = Router();

router.get("/", uploadController.renderIndex);
router.post("/upload", upload.single("imagem"), uploadController.createUpload)

module.exports = router;