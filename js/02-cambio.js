// Traccia 02 · Il cambio in aeroporto
// La consegna è nel README, alla voce "02 · Il cambio in aeroporto".

/*
  LE QUATTRO DOMANDE (una risposta per ogni funzione)
  Come si chiama? 
  - calcolaDollariRicevuti
  Di quali dati ha bisogno?
  - riceve l'importo in euro, il tasso di cambio del giorno e la commissione.
  - ho bisogno di tre dati (euro, tasso, commissione)
  Deve restituire qualcosa?
  - restituisce i dollari che ricevi
  Di che tipo?

  - 
  STEPS
  1 - Scriviamo prima la funzione con tre tipi di dati che dobbiamo inserire.
  2 - Facciamo l'operazione per transformare euro a dollari
  3 - Se l'importo è minore o uguale alla commisione mostrare 3 € diventano 0.00 $
*/

// # La funzione

function calcolaDollariRicevuti(euro, tasso, commisione){
  if(euro <= commisione){
    return `${euro} € diventano 0.00 $`
  }else{
    const resta = euro - commisione;
    const dollari = resta * tasso;
    return `${euro} € diventano ${dollari.toFixed(2)} $`
  }
}

console.log(calcolaDollariRicevuti(100, 1.08, 5))

// # Le prove: una riga di console.log per ogni caso di "Come verifichi"

