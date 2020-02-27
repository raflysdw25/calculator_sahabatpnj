const angka_pertama = prompt("Masukkan angka pertama");
const angka_kedua = prompt("Masukkan angka kedua");
const operasi = prompt("Masukkan operator yang ingin digunakan");


const math = {
    first: Number(angka_pertama),
    second: Number(angka_kedua),
    operator: operasi
};

if (math.operator == "+") {
    alert("Hasil penjumlahan dari "+ math.first+ " dengan " + math.second+ " adalah "+ (math.first + math.second));
} else if (math.operator == "-") {
    alert("Hasil pengurangan dari "+ math.first+ " dengan " + math.second+ " adalah "+ (math.first - math.second));
}else if (math.operator == "*"){
    alert("Hasil perkalian dari "+ math.first+ " dengan " + math.second+ " adalah "+ (math.first * math.second));
}else if (math.operator == "/"){
    alert("Hasil pembagian dari "+ math.first+ " dengan " + math.second+ " adalah "+ (math.first / math.second));
}else{
    alert("Operasi tidak dapat dilakukan")
}
