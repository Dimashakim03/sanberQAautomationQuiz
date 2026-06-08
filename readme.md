# OrangeHRM Login Automation Testing

Project ini berisi automation testing untuk fitur login pada OrangeHRM menggunakan Cypress.

## Tech Stack
- Cypress
- JavaScript

## Test Cases
1. Login berhasil dengan username dan password valid
2. Login gagal dengan username valid dan password salah
3. Login gagal dengan username salah dan password valid
4. Login gagal saat username kosong dan password diisi
5. Login gagal saat username diisi dan password kosong
6. Login gagal saat username dan password kosong
7. Field password harus dalam kondisi masked
8. Login gagal dengan username dan password karakter khusus yang tidak valid

## Instalasi
```bash
npm install
