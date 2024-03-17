
const { Model, DataTypes } = require('sequelize');
const sequelize = require('./sequelize.js'); // Adjust the path accordingly

const data = sequelize.define('data', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rollNo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    year: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    department: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    courseName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    term: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    courseNo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }
);

module.exports = {data};
