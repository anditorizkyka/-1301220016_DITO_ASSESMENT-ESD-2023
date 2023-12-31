const numbers = ["Bagas", "Dimas", "Bagas", "Bagas", "Indra", "Gilang" , "Gilang", "Hana", "Fajar", "Fajar"];
max = 0;
nackal = []
j = 0
for (i = 0 ; i < numbers.length;i++) {
    
    var count = numbers.filter((value) => value == numbers[i]);
    if (max <= count.length) {
        max = count.length;
        if (j == 0 ) {
            nackal[j] = numbers[i]
            j++
        } else {
            k = 0
            found = false
            while (k < nackal.length && !found) {
                if (nackal[k] == numbers[i]) {
                    found = true
                } else {
                    k++
                }
            } 
            if (!found) {
                nackal[j] = numbers[i]
                j++
            }
        }
    }
    count = 0
}

if (nackal.length == numbers.length) {
    console.log("Semuanya anak Baik")
}

if (nackal.length == 1) {
    console.log(nackal[0], "Nackal")
} else if (nackal.length == 2 ) {
    console.log(nackal[0]," dan ", nackal[1], "Nackal")
} 

