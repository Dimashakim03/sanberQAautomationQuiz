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

# Cypress Automation Testing - OrangeHRM

Repository ini berisi automation testing menggunakan Cypress pada website OrangeHRM Demo.

Website:
https://opensource-demo.orangehrmlive.com/

## Tools & Framework

- Cypress
- JavaScript
- Page Object Model (POM)
- Cypress Intercept

---

# Tugas 16 - Login Automation with Intercept

## Deskripsi

Melakukan automation testing pada fitur Login OrangeHRM dengan menggunakan `cy.intercept()` untuk memonitor request yang terjadi selama proses login.

## Test Cases

1. Login dengan username dan password valid
2. Login dengan username kosong
3. Login dengan password kosong
4. Login dengan username tidak valid
5. Login dengan password tidak valid

## Intercept yang Digunakan

- POST `/auth/validate`
- GET endpoint terkait halaman login
- Request validasi lainnya yang muncul saat proses login

## Lokasi File

```text
cypress/e2e/loginIntercept.cy.js

# Tugas 17 - Automation Login Menggunakan Page Object Model (POM)

## Deskripsi

Pada tugas ini dilakukan implementasi automation testing pada fitur Login website OrangeHRM menggunakan konsep Page Object Model (POM).

Website yang digunakan:

https://opensource-demo.orangehrmlive.com/

Tujuan penggunaan POM adalah untuk memisahkan locator, action, dan test script sehingga code lebih terstruktur, reusable, dan mudah dipelihara.

---

## Struktur Folder

```text
cypress
│
├── e2e
│   └── loginPOM.cy.js
│
├── fixtures
│   └── loginData.json
│
├── pages
│   └── loginPages.js
```

---

## Page Object

File:

```text
cypress/pages/loginPages.js
```

Berisi:

- Locator Username
- Locator Password
- Locator Login Button
- Method Input Username
- Method Input Password
- Method Click Login
- Method Login

---

## Test Data

File:

```text
cypress/fixtures/loginData.json
```

Data yang digunakan:

```json
{
  "validUsername": "Admin",
  "validPassword": "admin123",
  "invalidUsername": "WrongAdmin",
  "invalidPassword": "wrongpass123",
  "specialCharUsername": "@@@###",
  "specialCharPassword": "%%%^^^"
}
```

---

## Test Scenario

### TC01 - Login dengan Username dan Password Valid

**Steps:**
1. Buka halaman Login
2. Input username valid
3. Input password valid
4. Klik Login

**Expected Result:**
- Berhasil masuk ke halaman Dashboard

---

### TC02 - Login dengan Username Kosong

**Steps:**
1. Buka halaman Login
2. Kosongkan username
3. Input password valid
4. Klik Login

**Expected Result:**
- Muncul pesan "Required"

---

### TC03 - Login dengan Password Kosong

**Steps:**
1. Buka halaman Login
2. Input username valid
3. Kosongkan password
4. Klik Login

**Expected Result:**
- Muncul pesan "Required"

---

### TC04 - Login dengan Username Tidak Valid

**Steps:**
1. Input username tidak valid
2. Input password valid
3. Klik Login

**Expected Result:**
- Muncul pesan "Invalid credentials"

---

### TC05 - Login dengan Password Tidak Valid

**Steps:**
1. Input username valid
2. Input password tidak valid
3. Klik Login

**Expected Result:**
- Muncul pesan "Invalid credentials"

---

## Cara Menjalankan Test

Menjalankan Cypress GUI:

```bash
npx cypress open
```

Menjalankan seluruh test:

```bash
npx cypress run
```

Menjalankan test POM saja:

```bash
npx cypress run --spec cypress/e2e/loginPOM.cy.js
```

---

## Hasil Pengujian

Jumlah Test Case: 5

Status: Passed

Metode yang digunakan:

- Cypress
- Page Object Model (POM)
- Fixture Data
- Assertion Cypress
