
/*Scrivi un programma che stampi i numeri da 1 a 100,
ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per?
Abbiamo visto qualcosa di particolare che possiamo usare?

Consigli del giorno:
scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"*/


/*
1-impostare un loop con la variabile che aumenta di una unità a ogni ciclo partendo da 1 fino a 100
2-impostare con IF ELSE  le condizioni per: 1) i multipli di 3, ma non se sono anche multipli di 5
2) per quelli di 5, ma non se lo sono anche di 3,  e 3) per quelli di entrambi;
3-impostare di visualizzare in console il numero solo se non è multiplo nè di 3 nè di 5
*/

for(let i = 1; i<=100; i++) {
    
    
    if (i%3 != 0 && i%5 != 0) {
        console.log(i);

    } else if (i%3 == 0 && i%5 == 0) {
        let fizzBuzz = "FizzBuzz"
        console.log(fizzBuzz);
        
    } else if (i%3 == 0) {
        let fizz = "Fizz"
        console.log(fizz);

    } else if (i%5 == 0) {
        let buzz = "Buzz"
        console.log(buzz);
        
    } 
}

/*else if (i%5 == 0 && i != (i%3 == 0)) {
        let buzz = "Buzz"
        console.log(buzz);
        
    } 
    */