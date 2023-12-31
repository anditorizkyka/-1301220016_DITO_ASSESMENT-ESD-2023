
function prefrensi(nama, minat1,minat2) {
    kategori(minat1)
    kategori(minat2)

    console.log(`${nama} : `,kategori(minat1).concat(kategori(minat2)))

}

function kategori(minat) {
    let barang = []
    if (minat == "Musik") {
        barang = ["Gitar"]
    } else if (minat == "Olahraga") {
        barang = ["Sepatu"]
    } else if(minat == "elektronik") {
        barang = ["Tv" , "Headphone", "Kamera"]
    } else if (minat == "Fashion") {
        barang = ["baju"]
    }

    return barang
}

prefrensi("rina", "elektronik", "Musik")
