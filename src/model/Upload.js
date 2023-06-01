const { DataTypes } = require('sequelize');
const db = require('../db/conn.js');

const Upload = db.define('Upload', {
  imagem: {
    type: DataTypes.STRING,
    allowNull: false
  }
},
{
  timestamps: true
}
);

module.exports = Upload;