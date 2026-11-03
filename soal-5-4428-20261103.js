const namaSiswa = [
    "andi",
    "budi",
    "citra",
    "dewi",
    "eko"
];

const nilaiSiswa = [80,75,90,85,70];

console.log("jumlah siswa:", namaSiswa.length);
console.log("siswa pertama:", namaSiswa[0], "dengan nilai:", nilaiSiswa[0]);
const indekstTerakhir = namaSiswa.length - 1;
console.log("siswa terakhir:", namaSiswa[indeksTerakhir], "dengan nilai:", nilaiSiswa[indeksTerakhir]);

nilaiSiswa[1] = 88;
nilaiSiswa[4] = 82;
console.log("siswa ketiga:", namaSiswa[2], "dengan nilai:", nilaiSiswa[2]);
console.log("daftar nama siswa setelah pembaruan:", namaSiswa);
console.log("daftar nilai siswa setelah pembaruan:", nilaiSiswa);

const cekIndeks = 2;
if (cekIndeks >= 0 && cekIndeks < namaSiswa.length) {
    console.log('indeks ${cekIndeks} tersedia:', namaSiswa[cekIndeks]);
    } else {
        console.log('indeks ${cekIndeks}tidak tersedia.');
    }