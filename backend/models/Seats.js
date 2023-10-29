
const { Sequelize, DataTypes } = require('sequelize');
const config = require("../config/config.json")["development"];

const sequelize = new Sequelize(config.database, config.username, config.password, config);

sequelize.authenticate()
  .then(() => {
    console.log('Connection to the database has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

console.log(`i am seq: ${sequelize}`);

const Seats = sequelize.define('seats', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    number: {
      type: DataTypes.STRING,
    },
    type: {
      type: DataTypes.STRING,
      unique: true,
    },
    available: {
      type: DataTypes.BOOLEAN,
    }
  },{
    timestamps: false
});



module.exports = Seats;
