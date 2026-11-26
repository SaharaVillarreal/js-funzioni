// Traccia 06 · La durata del film
// La consegna è nel README, alla voce "06 · La durata del film".

/*
  LE QUATTRO DOMANDE (una risposta per ogni funzione)
  Come si chiama?
  - formattaDurata
  Di quali dati ha bisogno?
  - ricevere i minuti del film
  Deve restituire qualcosa?
  - restituire la durata in ore e minuti
  Di che tipo?

  STEPS
  1 -
  2 -
  3 -
*/

// # La funzione
function formattaDurata(minuti){
  let ora = Math.floor(minuti / 60);
  let minuto = minuti % 60;
  let testoOre = ora === 1 ? "1 ora" : `${ora} ore`;
  let testoMinuti = minuto === 1 ? "1 minuto" : `${minuto} minuti`;

  if (ora === 0) return testoMinuti;
  else if(minuto === 0) return testoOre;
  else return `${testoOre} e ${testoMinuti}`;
}

console.log(formattaDurata(150));
// # Le prove: una riga di console.log per ogni caso di "Come verifichi"

