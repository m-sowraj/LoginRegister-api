
const { Model, DataTypes } = require('sequelize');
const sequelize = require('./sequelize.js'); // Adjust the path accordingly

const user = sequelize.define('user', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userid: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
}
);

module.exports = {user};
