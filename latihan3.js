/*pada suatu ketika hiduplah seorang dosen killer yang bernama parid, pada waktu itu pak dosen sedang mengisi nilai pada mahasiswanya yang berjurusan teknik komputer.
menurut peraturan kampus jika nilainya itu 100-80 maka gradenya adalah A,
jika nilainya 79-60 maka grade nilainya adalah B,
 jika nilainya 59-40 maka gradenya C,
  jika nilainya 39-20 gradenya adalah D,
   jika nilainya 19-0 maka dosen akan memberi nilainya E. 
   namun jika nilai mahasiswa ini berada diluar rentang 0-100, tampilkan pesan Nilai tidak valid.*/

   let nilai = -79;
   if (nilai <= 100 && nilai >= 80) {
    grade='A';
   } else if (nilai <= 79 && nilai >= 60) {
    grade='B';
   } else if (nilai <= 59 && nilai >= 40) {
    grade='C';
   } else if (nilai <= 39 && nilai >= 20) {
    grade='D';
   } else if (nilai <= 19 && nilai >= 0) {
    grade='E';
   } else {
    grade='Nilai Tidak Valid';
}
console.log(nilai);
console.log(grade);