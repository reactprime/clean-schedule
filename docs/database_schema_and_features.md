# Rencana Implementasi: Jadwal Asrama

Dokumen ini merangkum rencana fitur, alur database, serta langkah-langkah pengerjaan dari aplikasi Jadwal Asrama untuk peran **User** (penghuni asrama) dan **Pengurus** (admin asrama).

## 1. Urutan Pengerjaan

Sangat disarankan untuk mulai dari Skema Database dan Backend terlebih dahulu. 
Alasannya: Frontend membutuhkan data untuk ditampilkan. Jika kita membuat database dan API (Backend) terlebih dahulu, maka saat membangun UI Frontend (halaman User & Pengurus), kita sudah punya data nyata untuk diuji coba. 

Jadi urutan pengerjaannya adalah:
1. **Skema Database & Backend Models**
2. **Backend API (Routes & Controllers)** untuk fitur-fitur
3. **Frontend UI** (Pages untuk User & Pengurus) dan integrasi dengan Backend

---

## 2. Rencana Fitur Aplikasi

Aplikasi akan dibagi menjadi 2 halaman utama di dalam folder `frontend/src/pages/`, yaitu `User/` dan `Pengurus/`.

### 🗂️ Halaman Pengurus (Admin)
- **Login Pengurus**: Akses masuk khusus pengurus.
- **Dashboard Pengurus**: Ringkasan data (total penghuni, total kamar, jadwal hari ini).
- **Manajemen Kamar (Rooms)**: Tambah, edit, hapus, dan lihat daftar kamar asrama.
- **Manajemen User (Penghuni)**: Mendaftarkan penghuni baru dan mengalokasikannya ke kamar tertentu.
- **Manajemen Jadwal (Schedules)**: Membuat jadwal (misal: jadwal kebersihan, piket, atau kegiatan) dan menugaskannya ke kamar tertentu atau user tertentu.

### 🗂️ Halaman User (Penghuni)
- **Login User**: Akses masuk dengan email & password yang dibuatkan oleh Pengurus.
- **Dashboard User**: Menampilkan informasi profil diri dan kamar saat ini.
- **Lihat Jadwal**: Melihat daftar jadwal kegiatan atau jadwal piket yang ditugaskan kepada User tersebut atau kamar tempat User berada.

---

## 3. Diagram Database (ERD)

Berikut adalah *flowchart/diagram* dari database yang akan kita buat menggunakan MySQL dan dihubungkan menggunakan Sequelize ORM.

```mermaid
erDiagram
    Users {
        int id PK
        string name
        string email
        string password
        enum role "user, pengurus"
        int room_id FK "nullable (untuk pengurus)"
    }
    
    Rooms {
        int id PK
        string room_number "Nomor Kamar"
        int capacity "Kapasitas"
        int floor "Lantai"
    }
    
    Schedules {
        int id PK
        string title "Judul Kegiatan"
        text description "Deskripsi"
        datetime start_time "Waktu Mulai"
        datetime end_time "Waktu Selesai"
        int room_id FK "nullable (jika jadwal untuk kamar)"
        int user_id FK "nullable (jika jadwal untuk personal)"
    }

    %% Relasi
    Rooms ||--o{ Users : "dihuni oleh"
    Rooms ||--o{ Schedules : "memiliki jadwal"
    Users ||--o{ Schedules : "ditugaskan jadwal"
```

**Penjelasan Alur Database:**
- **Rooms (Kamar)** adalah entitas pusat. Satu kamar bisa dihuni oleh banyak **Users**.
- **Schedules (Jadwal)** sangat fleksibel. Pengurus bisa membuat jadwal yang ditujukan untuk seluruh anggota di sebuah **Room** (misal: *Jadwal Kebersihan Kamar 101*), atau ditujukan khusus untuk satu **User** (misal: *Piket Harian Budi*).
