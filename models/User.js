const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class User extends Model {
  checkPassword(loginPw) {
    console.log('this password: ' + this.Password);
    return bcrypt.compareSync(loginPw, this.Password);
  }
}

User.init(
  {
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    Username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    Password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [6],
      },
    },
    CurrentWeight: {
      type: DataTypes.DECIMAL,
      allowNull: true,
    },
    IdealWeight: {
      type: DataTypes.DECIMAL,
      allowNull: true,
    },
  },
  {
    hooks: {
      async beforeCreate(newUserData) {
        console.log('before create called')
        console.log(newUserData);
        newUserData.Password = await bcrypt.hash(newUserData.Password, 10);
        console.log('new user data after password hash')
        console.log(newUserData);
        return newUserData;
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'User',
  }
);

module.exports = User;