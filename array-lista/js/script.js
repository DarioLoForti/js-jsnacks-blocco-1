// 1 - creo un array con tutta la frutta contenuta nel frigo

let frigo = ['banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola'];

console.log(frigo);

// 2 - aggiungo la pesca all'arrey del frigo

let frutta = "pesca";
console.log(frutta);

frigo.push(frutta);
console.log(frigo);


// creo variabile di controllo

let flag = false;
let cocomero = frigo[6];


// 3 - cerifico se all'interno dell'arrey è presente un determinato valore( cocomero)

for(let i = 0; i<=frigo.length; i++){

    if(cocomero == frigo[i])
    flag = true;
}

// 3.1 - ? presente stampo in cosole: "Trovato! Devo solo preparare il cocktail."

if(flag){
    console.log("Trovato! Devo solo preparare il cocktail.");
}

// 3.2 - : stampo in console: "Oh no, devo uscire a comprare il cocomero!"

else{
    console.log("Oh no, devo uscire a comprare il cocomero!");
}