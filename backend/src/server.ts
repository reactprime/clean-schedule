import app from './app';
import * as dotenv from 'dotenv';
import sequelize from './config/db';
// Import model agar Sequelize mendeteksinya
import './models';

dotenv.config();

const PORT = process.env.PORT || 5000;

// Test koneksi dan sync database
sequelize.authenticate()
  .then(() => {
    console.log('Database connected...');
    // Sync model ke database (buat tabel jika belum ada)
    // Jika ingin update otomatis struktur, gunakan { alter: true }
    return sequelize.sync({ alter: true });
  })
  .then(() => {
    console.log('Database tables synchronized.');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });
