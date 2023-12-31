function hitungKembalian(totalBelanja, uangDibayar) {
    const pecahanUang = [100000, 50000, 20000, 10000, 5000, 2000, 1000, 500, 200, 100];
    let kembalian = uangDibayar - totalBelanja;
    
    if (kembalian < 0) {
        return 'Uang yang dibayarkan kurang';
    }
    
    let hasil = {};
    
    for (let i = 0; i < pecahanUang.length; i++) {
        const pecahan = pecahanUang[i];
        if (kembalian >= pecahan) {
            const jumlahPecahan = Math.floor(kembalian / pecahan);
            hasil[pecahan] = jumlahPecahan;
            kembalian -= jumlahPecahan * pecahan;
        }
    }
    
    return hasil;
}

// Contoh penggunaan:
const totalBelanja = 7500;
const uangDibayar = 10000;

const kembalian = hitungKembalian(totalBelanja, uangDibayar);
console.log("Kembalian:");
for (let key in kembalian) {
    console.log(`{ "${key}" : ${kembalian[key]} }`);
}
