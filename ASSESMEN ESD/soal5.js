console.log("SOAL 5");

let usernameLama = "Naip Lovyu";
var usernameBaru = []
var j = 0;

for (let i = 0 ; i < usernameLama.length;i++) {
    if (usernameLama[i] != " " && j != 6) {
        usernameBaru[j++] = usernameLama[i];
    }
}
console.log(usernameBaru.join("").toLocaleLowerCase())

