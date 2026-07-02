let a = 35;
let b = 20;

if (a > 10 && b > 10) {
    console.log("Hər iki ədəd böyükdür!");
}

let hava = prompt("Hava necədir?");
let temperatur = Number(prompt("Temperatur neçə dərəcədir?"));

if (hava === "günəşlidir" && temperatur > 20) {
    console.log("Gəzintiyə çıxmaq olar!");
}

let eded = 14;

if (eded > 0 && eded % 2 === 0) {
    console.log("Bu müsbət cüt ədəddir!");
}

let yas = Number(prompt("Yaşınızı daxil edin:"));
let bilet = prompt("Biletiniz varmı? (bəli/xeyr)");

if (yas >= 18 && bilet === "bəli") {
    console.log("Kino zalına keçid icazəlidir");
}

let parol = "123456";
let tekrarParol = "123456";

if (parol === tekrarParol && parol.length > 5) {
    console.log("Parol uğurla yaradıldı!");
}