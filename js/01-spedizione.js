// Traccia 01 · Lo stato della spedizione
// La consegna è nel README, alla voce "01 · Lo stato della spedizione".

/*
  LE QUATTRO DOMANDE (una risposta per ogni funzione)
  Come si chiama? trovaStatoSpedizione
  Di quali dati ha bisogno? 
  ho bisogno di ricere un codice
  Deve restituire qualcosa?
  deve restituire un numero per restituire un testo che dica lo stato del pacco.
  Di che tipo?
  tipo numerico.
  STEPS
  1 - Scrivere la funzione che dobbiamo inserire un parametro (trovaStatoSpedizione(codice))
  2 - Dentro inserire cosa debe restituire.
  3 - 
*/

// # La funzione
function trovaStatoSpedizione(codice) {
  if (codice === 1) return "In elaborazione"
  else if (codice === 2) return "Spedito"
  else if (codice === 3) return "Consegnato"
  else return "Stato sconosciuto"
}
console.log(trovaStatoSpedizione(2));

// # Le prove: una riga di console.log per ogni caso di "Come verifichi"

