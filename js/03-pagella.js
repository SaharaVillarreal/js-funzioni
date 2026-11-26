// Traccia 03 · Lo scritto vale doppio
// La consegna è nel README, alla voce "03 · Lo scritto vale doppio".

/*
  LE QUATTRO DOMANDE (una risposta per ogni funzione)
  Come si chiama?
  - calcolaMediaPonderata
  Di quali dati ha bisogno?
  - abbiamo bisogno di due dati il voto dell'esame (scritto e orale).
  Deve restituire qualcosa?
  - restituisce la media somma/quantita somma/3 perche sono 3 dati.
  Di che tipo?
  - Un decimale
  STEPS
  1 - Scrivo la funzione
  2 - Definiamo i dati che dobbiamo chiedere all'utente.
  3 - E introduciamo l'operazione da seguire.
*/

// # La funzione
function calcolaMediaPonderata(scritto, orale){
  const operazione = (scritto * 2 + orale) / 3;
  return `Media: ${operazione.toFixed(1)}`
}

console.log(calcolaMediaPonderata(10, 10))

// # Le prove: una riga di console.log per ogni caso di "Come verifichi"

