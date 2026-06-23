import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/db';

class Schedule extends Model {
  public id!: number;
  public title!: string;
  public description!: string;
  public start_time!: Date;
  public end_time!: Date;
  public room_id!: number | null;
  public user_id!: number | null;
}

Schedule.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    start_time: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    end_time: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    room_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: 'schedules',
    timestamps: false,
  }
);

export default Schedule;
