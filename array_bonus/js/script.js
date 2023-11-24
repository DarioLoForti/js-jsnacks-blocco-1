// 1 - creo due array che hanno il numero di elementi diversi

let pari = [2,4,6,8,10,12,14,16,18,20];
console.log(pari);

let dispari = [1,3,5,7,9,11];
console.log(dispari);

let differenza = pari.length - dispari.length;
console.log(differenza);


// 2 - Aggiungo elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro

for(let i=0; i<differenza; i++){

    dispari.push(i);
    
}


console.log(pari);
console.log(dispari);