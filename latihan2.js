/* Soal :
pada suatu hari hiduplah seorang parid yang ingin masuk rumah sakit
ketika parid sampai dirumah sakit ada satpam yang ingin mengecek suhu tubuh parid 
ketika suhunya diatas 36.5 parid dinyatakan demam dan tidak boleh masuk rumah sakit
jika suhu tubuh parid diatas 36 maka parid dinyatakan terindikasi demam
jika suhu tubuh dibawah 35 maka parid boleh memasuki rumah sakit atau bisa jiga dinyatakan sehat
*/


let suhu = 40; // suhu farid

//if untuk mengkategorikan apakah farid demam, terindikasi atau tidak
if (suhu > 36.5) {
    console.log("gabole masuk kamu demam")
} else if (suhu > 36) {
    console.log("terindikasi demam")
} else {
    console.log("sehat")
}