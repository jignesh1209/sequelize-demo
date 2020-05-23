'use strict';
module.exports = (sequelize, DataTypes) => {
  const Employee = sequelize.define('employee', {
    name: DataTypes.STRING,
    dept: DataTypes.STRING,
    updatedAt: 'updatedAt',
    createdAt: 'createdAt'
  }, {
    tableName:'employee'
   });
  return Employee;
};