console.log("SOAL 1");

let A = [5,4,2.5,5,3.6,1.1,3.6,4,4.2,1.5];

var min = A[0];
var max = A[0];
var sum = 0

for (i = 0; i < A.length;i++) {
    sum = sum + A[i];
    if (min > A[i]) {
        min = A[i];
    }

    if (max < A[i]) {
        max = A[i];
    }
}
let avg = sum / A.length;
var result = [];
result[0] = min;
result[1] = max;
result[2] = Number(avg.toFixed(2));

console.log(result);