// Traccia 05 · La fascia d'età
// La consegna è nel README, alla voce "05 · La fascia d'età".

/*
  LE QUATTRO DOMANDE (una risposta per ogni funzione)
  Come si chiama?
  - trovaFasciaEta
  Di quali dati ha bisogno?
  - Eta dell'utente.
  Deve restituire qualcosa?
  - restituisce 
    (Minorenne sotto i 18 anni) 
    (Giovane Adulto da 18 a 35) 
    (Adulto da 36 a 60) 
    (Senior oltre i 60)
    (Un'età negativa restituisce Età non valida)
  Di che tipo?
  Numero
  STEPS
  1 -
  2 -
  3 -
*/

// # La funzione
function trovaFasciaEta(eta){
  if(eta < 0 || isNaN(eta)) return "Età non valida"
  else if(eta < 18) return "Minorenne"
  else if(eta >= 18 && eta <= 35) return "Giovane Adulto"
  else if(eta >= 36 && eta <= 60) return "Adulto"
  else return "Senior"
}

console.log(trovaFasciaEta(60));

// # Le prove: una riga di console.log per ogni caso di "Come verifichi"

