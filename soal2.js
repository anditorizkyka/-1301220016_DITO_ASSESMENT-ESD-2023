console.log("SOAL 2");

let kata = "Ibu Ratna antar ubi".toLowerCase()

if (kata.length % 2 != 0) {
    var i = 0;
    var j = kata.length -1;
    var terminate = false;
    while ((i < kata.length / 2) && !terminate) {
        if (kata[i] != kata[j] ) {
            terminate = true;
        }
        i++;
        j--;
    }
}else {
    var i = 0;
    var j = kata.length -1;
    var terminate = false;
    while ((i < kata.length / 2) && !terminate) {
        if (kata[i] != kata[j] ) {
            terminate = true;
        }
        i++;
        j--;
    }
}

if (terminate) {
    console.log("suka blyat");
} else {
    console.log("eureeka!");
}