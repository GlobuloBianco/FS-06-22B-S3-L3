var mele = 4, arance = 5, aranceError;; //---[1]---//
const anno = 2022; //---[2]---//
var anna = 30, maria = 24, calcoloEta1 = (anno - anna), calcoloEta2 = (anno - maria); //---[3]---//

//---[1]---Realizzare il testo sottostante utilizzando una function e la tecnica del backtick:
primoEsercizio = () => {
    let risultatoCorretto = `Succo con ${mele} mele e ${arance} arance`;
    document.getElementById('corretta').innerHTML = risultatoCorretto;
    let risultatoSbagliato = `Succo con ${mele + 2} mele e ${aranceError} arance`;
    document.getElementById('sbagliata').innerHTML = risultatoSbagliato;
}
/*function succo (mele, arance) {
    const succoFrutta = `Succo  con ${mele} mele e ${arance} arance`;
        return succoFrutta;
    }
    document.getElementById('corretta').innerHTML = succo(4, 5);
    document.getElementById('sbagliata').innerHTML = succo(6);*/
primoEsercizio();

//---[2]---Sempre utilizzando una function e la tecnica del backtick, calcolare la propria età:
eta = (annoNascita) => {
    let miaEta = anno - annoNascita
    return miaEta;
}
secondoEsercizio = () => {
    let risultatoEta = `${eta(1967)} anni`;
    document.getElementById('eta').innerHTML += risultatoEta;
}
secondoEsercizio();

//---[3]---Creando una funzione freccia, calcolare l'anno di nascita di due persone a partire dall'età:
terzoEsercizio = () => {
    document.getElementById('persona1').innerHTML = `L\'anno di nascita di Anna è il ${calcoloEta1} `;
    document.getElementById('persona2').innerHTML = `L\'anno di nascita di Maria è il ${calcoloEta2} `;
}
terzoEsercizio();

//---[4]---Utilizzando una funzione come argomento di un'altra funzione, realizzare il testo sottostante:
quartoEsercizio = () => {
    let pezziDiMela = mele + 5;
    let fetteDiArancia = arance * 3;
    torta(pezziDiMela, fetteDiArancia);
}
torta = (x, y) => {
    document.getElementById('torta').innerHTML = `Torta con ${x} fette di mela e ${y} fette di arancia.`;
}
quartoEsercizio();

//---[5]---Compilando i seguenti campi di input, calcolare e stampare l'ammontare dell'acquisto degli articoli indicati:
document.getElementById('calcola').addEventListener ('click', somma);
calcoloSpesa = () => {
    let cibo = parseInt (document.getElementById('cibo').value);
    let detersivi = parseInt (document.getElementById('detersivi').value);
    let abiti = parseInt (document.getElementById('abiti').value);
    let result = 0;
    result = cibo + detersivi + abiti;
    return result;
}
function somma () {
    document.getElementById('totale').innerHTML = `Il totale spesa è: ${calcoloSpesa ()}&euro;`;
}