const daftarProduk = [
    "keyboard",
    "mouse",
    "monitor",
    "flashdisk",
    "headset",
    "webcam"
];

console.log("jumlah seluruh produk:", daftarProduk.length);
console.log("indeks produk terakhir:", daftarProduk.length - 1);
console.log("nama produk terakhir:", daftarProduk[daftarProduk.length - 1]);

const indeksTengah = Math.floor((daftarProduk.length - 1) /2);
console.log("nama produk di indeks tengah:", daftarProduk[indeksTengah]);