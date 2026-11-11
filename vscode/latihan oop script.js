// ==========================================
// SOAL 1: Dasar Kelas & Enkapsulasi (Akun Bank)
// ==========================================
class BankAccount {
  #saldo;

  constructor(namaPemilik, saldoAwal) {
    this.namaPemilik = namaPemilik;
    this.#saldo = saldoAwal > 0 ? saldoAwal : 0;
  }

  deposit(jumlah) {
    if (jumlah > 0) {
      this.#saldo += jumlah;
      console.log(`Deposit berhasil. Saldo saat ini: ${this.#saldo}`);
    } else {
      console.log("Jumlah deposit harus lebih besar dari 0!");
    }
  }

  withdraw(jumlah) {
    if (jumlah > 0 && jumlah <= this.#saldo) {
      this.#saldo -= jumlah;
      console.log(`Penarikan berhasil. Sisa saldo: ${this.#saldo}`);
    } else {
      console.log("Penarikan gagal: Saldo tidak mencukupi atau jumlah tidak valid!");
    }
  }

  getSaldo() {
    return this.#saldo;
  }
}

// Pengujian Soal 1:
const akunBudi = new BankAccount("Budi", 500000);
akunBudi.deposit(200000);
akunBudi.withdraw(150000);
console.log(`Saldo akhir ${akunBudi.namaPemilik}: Rp${akunBudi.getSaldo()}`);


// ==========================================
// SOAL 2: Pewarisan (Inheritance) & Override
// ==========================================

class Produk {
  constructor(nama, harga) {
    this.nama = nama;   // Diperbaiki: Properti diinisialisasi
    this.harga = harga; // Diperbaiki: Properti diinisialisasi
  }

  getInfo() {
    return `Produk: ${this.nama}, Harga: ${this.harga}`;
  }
}

class ProdukElektronik extends Produk {
  constructor(nama, harga, garansiTahun) {
    super(nama, harga);
    this.garansiTahun = garansiTahun;
  }

  getInfo() {
    return `Produk: ${this.nama}, Harga: ${this.harga}, Garansi: ${this.garansiTahun} tahun`;
  }
}

// Pengujian Soal 2:
const laptop = new ProdukElektronik("Laptop", "Rp10jt", 2);
console.log(laptop.getInfo()); 
// Output: Produk: Laptop, Harga: Rp10jt, Garansi: 2 tahun