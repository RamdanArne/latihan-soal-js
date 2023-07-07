
// menghitung ada berapa huruf vokal yang ada dalam sebuah kalimat //


let a = 0; //mengisi nilai variable
let i = 0;
let u = 0;
let e = 0;
let o = 0;
let str = 'You will never walk alone'; // mengisi kalimat yang ingin diketahui

// for untuk mengecek apa saja isi dari variable str diatas
for (let k = 0; k < str.length; k++) {
    const element = str[k];
    // if untuk mencari huruf vokal yg ada dalam str
    if (element == 'a') {
        a++
    } else if (element == 'i') {
        i++
    } else if (element == 'u') {
        u++
    } else if (element == 'e') {
        e++
    } else if (element == 'o') {
        o++
    }
}

// if untuk mengecek apakah jumlah huruf vokal tertentu jumlahnya sama
if (a == o) {
    result = true
}
// untuk mendisplay output
console.log(a);
console.log(i);
console.log(u);
console.log(e);
console.log(o);
console.log(result);