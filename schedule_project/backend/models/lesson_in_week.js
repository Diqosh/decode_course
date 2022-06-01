'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Lesson_in_week extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Lesson_in_week.init({
    time: DataTypes.STRING,
    week_day: DataTypes.DATE,
    group_id: DataTypes.INTEGER,
    course_id: DataTypes.INTEGER,
    room_id: DataTypes.INTEGER,
    mentor_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Lesson_in_week',
  });
  return Lesson_in_week;
};