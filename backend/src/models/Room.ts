import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/db';

class Room extends Model {
  public id!: number;
  public room_number!: string;
  public capacity!: number;
  public floor!: number;
}

Room.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    room_number: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    capacity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    floor: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'rooms',
    timestamps: false, // Set true jika butuh createdAt dan updatedAt
  }
);

export default Room;
