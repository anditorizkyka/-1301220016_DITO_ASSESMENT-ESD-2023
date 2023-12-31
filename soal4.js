console.log("SOAL 4");

let data = [20, 1, 3, 2, 4, 6, 8, 5, 7, 9, 11, 13, 15, 10, 12, 14, 16, 18,20, 17, 19];
let found = false;
var i = 0;

while (i < data.length && !found) {
    var j = 0;
    while (j < data.length && !found) {

        // agar indeks tidak memeriksa dirinya sendiri
        if (i == j) {
            j++
        }

        if (data[i] == data[j]) {
            found = true;
        }
        
        j++
    }
    i++
}

console.log(found)