# 🤖 File Instruksi Agent (agents.md)

File ini berisi rangkuman proyek dan aturan-aturan penting agar AI Agent (seperti saya) tidak lupa dengan konteks proyek `jadwal-asrama` digital ini.

Jika Agent terlihat lupa atau melenceng, *User* cukup berkata: **"Coba baca kembali file docs/agents.md"**

---

## 📌 1. Informasi Proyek
- **Nama Proyek**: Jadwal Asrama Digital
- **Tujuan**: Membuat web aplikasi jadwal digital untuk asrama.
- **Tech Stack**:
  - **Frontend**: React + TypeScript + Vite + Tailwind CSS
  - **Backend**: Express.js + TypeScript + Node.js
  - **Database**: MySQL (via XAMPP/Official)

## 🏗️ 2. Keputusan Arsitektur
- Menggunakan **TypeScript** di seluruh bagian (Frontend & Backend) untuk mengurangi bug.
- Konfigurasi Editor menggunakan **VS Code** dengan ekstensi standar (Prettier, ESLint, TypeScript Importer).

## 📝 3. Status Terakhir & History
*Catatan: Bagian ini bisa diupdate seiring berjalannya waktu*
- **[22 Juni 2026]**: Setup awal selesai. Node.js dan Git sudah terinstall di komputer User. Masalah PowerShell PATH sudah diperbaiki.
- **[22 Juni 2026]**: Memutuskan pindah dari JavaScript murni ke TypeScript.
- **[TBD]**: Instalasi MySQL/XAMPP.
- **[TBD]**: Inisialisasi struktur folder Frontend dan Backend.

## 🤝 4. Aturan Kerja Agent
1. **Selalu gunakan TypeScript** (`.ts` atau `.tsx`), jangan gunakan `.js` atau `.jsx`.
2. **Gunakan Tailwind CSS** untuk styling di Frontend.
3. Sebelum menjalankan script atau menginstall dependencies berat, pastikan meminta izin User jika itu berisiko.
4. Jaga agar UI/UX terlihat modern (sesuai request User yang terinspirasi dari standar web modern 2026).
