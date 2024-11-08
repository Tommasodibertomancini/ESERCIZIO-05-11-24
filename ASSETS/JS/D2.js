/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/
let a = 10;
let b = 20;

if (a > b) {
  console.log("Il numero maggiore è 10");
} else if (b > a) {
  console.log("Il numero maggiore è 20");
} else {
  console.log("I numeri sono uguali");
}

/* 

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

let number = 7;

if (number !== 5) {
  console.log("not equal");
} else {
  console.log("equal");
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

let numero = 25;

if (numero % 5 === 0) {
  console.log("Numero divisibile per 5");
} else {
  console.log("Non divisibile");
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

let number1 = 7;
let number2 = 1;

if (
  number1 === 8 ||
  number2 === 8 ||
  number1 + number2 === 8 ||
  number1 - number2 === 8 ||
  number2 - number1 === 8
) {
  console.log("Condizione soddisfatta");
} else {
  console.log("Condizione non soddisfatta");
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

let totalShoppingCart = 60;
let shippingCost = 10;

if (totalShoppingCart <= 50) {
  console.log(totalShoppingCart + shippingCost);
} else {
  console.log(totalShoppingCart);
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

let sale = 0.20;
let totaleScontato = totalShoppingCart - (totalShoppingCart * sale);

if (totaleScontato <= 50) {
  console.log(totaleScontato + shippingCost);
} else {
  console.log(totaleScontato);
}
/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

let numberOne = 25;
let numberTwo = 7;
let numberThree = 22;

let temp;

if (numberOne < numberTwo) {
  temp = numberOne;
  numberOne = numberTwo;
  numberTwo = temp;
}

if (numberOne < numberThree) {
  temp = numberOne;
  numberOne = numberThree;
  numberThree = temp;
}

if (numberTwo < numberThree) {
  temp = numberTwo;
  numberTwo = numberThree;
  numberThree = temp;
}
console.log(numberOne, numberTwo, numberThree);

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

let valore = 10;

if (typeof (valore) === "number") {
  console.log("Il valore è un numero");
} else {
  console.log("Il valore non è un numero");
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

let numero1 = 10;

if (numero1 % 2 === 0) {
  console.log("Il numero è pari");
} else {
  console.log("Il numero è dispari");
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.*/

let val = 4;
if (val < 5) {
  console.log("Meno di 5");
} else if (val < 10) {
  console.log("Meno di 10");
} else {
  console.log("Uguale a 10 o maggiore");
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};

me.city = "Toronto";

console.log(me);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

delete me.lastName;

console.log(me);
/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

me.skills.pop();
console.log(me);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

let array = [];

console.log(array);

array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(array);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

array[9] = 100;

console.log(array);
