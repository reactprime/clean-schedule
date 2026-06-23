# Alur Diagram Database (ERD)

Dokumen ini memuat visualisasi struktur database (Entity Relationship Diagram) beserta alur relasinya untuk aplikasi Jadwal Asrama.

## Diagram ERD

```mermaid
erDiagram
    Users {
        int id PK
        string name
        string email
        string password
        enum role "user, pengurus, admin"
        int room_id FK "nullable (untuk pengurus & admin)"
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

## Penjelasan Relasi
1. **Users & Rooms (Penghuni & Kamar)**: Relasi *Many-to-One*. Banyak User dapat menghuni satu Room.
2. **Schedules & Rooms (Jadwal & Kamar)**: Relasi *Many-to-One*. Satu Room bisa memiliki banyak Schedules. Hal ini memudahkan jika ada jadwal pembersihan untuk seluruh penghuni kamar tertentu.
3. **Schedules & Users (Jadwal & Penghuni)**: Relasi *Many-to-One*. Satu User bisa memiliki banyak Schedules secara personal.
