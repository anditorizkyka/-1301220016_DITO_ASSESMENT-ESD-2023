console.log("SOAL 3");

let temanZhongli = ["Nigguang", "Hutao", "Xiao", "Childe"];

// karena xiao memotret dan kondisi kue masih ada, sehingga dimungkinkan yang mengambil kue ialah temannya setelah xiao atau xiao sendiri.

for (i = 0 ; i< temanZhongli.length;i++) {
    if (temanZhongli[i] == "Xiao") {
        var terdakwa = temanZhongli.slice(i);
    }
}

console.log(terdakwa);