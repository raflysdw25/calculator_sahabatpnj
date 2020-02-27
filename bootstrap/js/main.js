let x = 10;
let y = 2;

let add = x + y;
let min = x - y;
let times = x * y;
let divide = x / y;
let modulus = x % y;

console.log("Add : " + add);
console.log("Min : " + min);
console.log("Times : " + times);
console.log("Divided : " + divide);
console.log("Modulus : " + modulus);


let a = 20;
let b = 10; 

if (a > b){
    alert("Nilai a lebih besar dari b");
}else if(a == b) {
    alert("Nilai a sama dengan nilai b");
}else{
    alert("Nilai a lebih kecil dari nilai b");
}


let buah = "mangga";
switch (buah) {
    case "apple":
    alert("buahnya adalah apple");
    break;
    case "mangga":
    alert("buahnya adalah mangga");
    break;
    case "jambu":
    alert("buahnya adalah jambu");
    break;
}


for (let i = 1; i <= 10; i++) {
    document.write(i);
}

let i = 1;
while(i < 10){
    document.write('Nomor : '+ i +'<br>');
    i++;
}


let j = 1;
do{
    document.write('Do While Ke- : '+ j +'<br>');
    j++;
} while(j < 0);


let nama = "Rafly";

function sayHello(){
    let umur = 20;
    nama = "Sadewa";
    alert("Hello World "+nama+" yang berumur "+ umur);
}

sayHello();

let arr = ["Mangga", 2, 2.5, true, "Sarikaya"];
console.log(arr);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);

let mahasiswa = 
{
    nama: "Muhammad Rafly Sadewa",
    umur: 20,
    asal_bogor: true,
}

console.log(mahasiswa.nama);
console.log(mahasiswa.umur);
console.log(mahasiswa.asal_bogor);

