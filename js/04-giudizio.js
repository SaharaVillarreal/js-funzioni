// Traccia 04 · Dal voto al giudizio
// La consegna è nel README, alla voce "04 · Dal voto al giudizio".

/*
  LE QUATTRO DOMANDE (una risposta per ogni funzione)
  Come si chiama?
  - trovaGiudizio
  Di quali dati ha bisogno?
  - bisogna un voto
  Deve restituire qualcosa?
  - Per restituire il valore del voto.
  Di che tipo?

  STEPS
  1 - 
  2 -
  3 -
*/

// # La funzione
function trovaGiudizio(voto){
  if( voto < 1 || voto > 10) return "Voto non valido"
  else if(voto < 5) return "Gravemente insufficiente"
  else if(voto < 6) return "Insufficiente"
  else if(voto < 7) return "Sufficiente"
  else if(voto < 8) return "Buono"
  else return "Ottimo"
}

function calcolaMediaPonderata(scritto, orale) {
  const operazione = (scritto * 2 + orale) / 3;
  return Number(operazione.toFixed(1));
}

const prova = trovaGiudizio(calcolaMediaPonderata(6, 9));
console.log(prova);

// # Le prove: una riga di console.log per ogni caso di "Come verifichi"

