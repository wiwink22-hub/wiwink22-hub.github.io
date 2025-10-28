# Panduan Deploy ke GitHub Pages

Proyek ini sudah dikonfigurasi untuk deploy otomatis ke GitHub Pages menggunakan GitHub Actions.

## Konfigurasi

### 1. Vite Configuration
File `vite.config.ts` sudah diatur dengan:
- `base: '/'` - Untuk deployment di root directory (username.github.io)
- Port 5000 untuk development di Replit

Jika Anda deploy ke repository project (username.github.io/nama-repo), ubah:
```typescript
base: '/nama-repo/',
```

### 2. GitHub Actions Workflow
Workflow sudah dibuat di `.github/workflows/deploy.yml` yang akan:
- Otomatis build dan deploy saat ada push ke branch `main` atau `master`
- Build project dengan `npm run build`
- Deploy hasil build (folder `dist`) ke GitHub Pages

## Cara Deploy

### Langkah 1: Aktifkan GitHub Pages
1. Push repository ini ke GitHub
2. Buka repository di GitHub
3. Pergi ke **Settings** → **Pages**
4. Di bagian **Source**, pilih **GitHub Actions**

### Langkah 2: Push Code
```bash
git add .
git commit -m "Setup GitHub Pages deployment"
git push origin main
```

### Langkah 3: Tunggu Deployment
- GitHub Actions akan otomatis menjalankan workflow
- Lihat progress di tab **Actions** di repository GitHub
- Setelah selesai (✅ hijau), website akan live di:
  - User/Org site: `https://username.github.io/`
  - Project site: `https://username.github.io/nama-repo/`

## Troubleshooting

### Blank Page / 404 Errors
- Pastikan `base` di `vite.config.ts` sesuai dengan jenis deployment:
  - User site: `base: '/'`
  - Project site: `base: '/nama-repo/'`
- Rebuild setelah mengubah config: `npm run build`

### Workflow Permission Error
1. Pergi ke **Settings** → **Actions** → **General**
2. Di **Workflow permissions**, pilih **Read and write permissions**
3. Klik **Save**
4. Re-run workflow di tab **Actions**

## Development di Replit
Untuk development lokal di Replit:
```bash
npm run dev
```
Website akan berjalan di port 5000.

## Build Manual
Untuk build manual tanpa deploy:
```bash
npm run build
```
Hasil build akan ada di folder `dist/`.

Untuk preview build:
```bash
npm run preview
```
