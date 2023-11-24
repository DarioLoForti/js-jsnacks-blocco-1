// // 1 - chiedo all'utente il numero dei valori presenti nell'arrey

// let numbArray =parseInt(prompt("inserisci il numero degli elementi dell'array"));
// console.log(numbArray);

// // 2 - genero numeri casuali (tra 1 e 100) tanti quanti il numero richiesto dall'utente

// let array =[];

// for(let i =0; i<=numbArray; i++){
//     let elementRandom = Math.floor(Math.random() * 100) +1;
//     console.log(elementRandom);
//     array.push(elementRandom);
// }
// console.log(array);

// // 3 - stampo in console gli ultimi 5 elementi dell'arrey

// let lastFive = array.slice(-5);

// console.log(lastFive);


// BONUS


// 1 - chiedo all'utente il numero dei valori presenti nell'arrey

let numbArray =parseInt(prompt("inserisci il numero degli elementi dell'array"));
console.log(numbArray);

// 2 - genero numeri casuali (tra 1 e 100) tanti quanti il numero richiesto dall'utente

let array =[];

for(let i =0; i<=numbArray; i++){
    let elementRandom = Math.floor(Math.random() * 100) +1;
    console.log(elementRandom);
    array.push(elementRandom);
}
console.log(array);

// 3 - Chiedo all'utente quanti elemnti dell'array dovremmo stampare

let numbArrayPrint = parseInt(prompt("inserisci il numero di elemneti dell'array da stampare"));

// 3 - stampo in console il numero di elementi richiesti dall'utente

let lastFive = array.slice(array, numbArrayPrint);

console.log(lastFive);
