import User from './User';
import Room from './Room';
import Schedule from './Schedule';

// 1. Relasi Room dan User (One-to-Many)
Room.hasMany(User, { foreignKey: 'room_id' });
User.belongsTo(Room, { foreignKey: 'room_id' });

// 2. Relasi Room dan Schedule (One-to-Many)
Room.hasMany(Schedule, { foreignKey: 'room_id' });
Schedule.belongsTo(Room, { foreignKey: 'room_id' });

// 3. Relasi User dan Schedule (One-to-Many)
User.hasMany(Schedule, { foreignKey: 'user_id' });
Schedule.belongsTo(User, { foreignKey: 'user_id' });

export { User, Room, Schedule };

