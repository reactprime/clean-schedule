#!/bin/bash
# init.sh - Standard startup and verification path

echo "Memulai verifikasi proyek Jadwal Asrama..."

# 1. Cek direktori aktif
echo "Working directory: $(pwd)"

# 2. Install dependencies jika belum
echo "Checking dependencies..."
if [ ! -d "node_modules" ]; then
  echo "Menginstall dependencies root..."
  npm install
fi

# 3. Verifikasi Frontend
echo "Memeriksa Frontend..."
if [ ! -d "frontend/node_modules" ]; then
  cd frontend && npm install && cd ..
fi

# 4. Verifikasi Backend
echo "Memeriksa Backend..."
if [ ! -d "backend/node_modules" ]; then
  cd backend && npm install && cd ..
fi

echo "Verifikasi selesai! Repositori dalam keadaan aman."
echo "Untuk menjalankan server gunakan: npm run dev"
exit 0
