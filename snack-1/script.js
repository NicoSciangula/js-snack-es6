// * Creare un array di oggetti:
// *Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// *Stampare a schermo la bici con peso minore.
// ! dichiarazione variabili
const listaBici = [
  { nome: "Aquila RS", peso: 6.9 },

  { nome: "Vento Veloce", peso: 7.2 },

  { nome: "Fulmine Pro", peso: 6.7 },

  { nome: "Strada Nero", peso: 7.6 },

  { nome: "Tempesta Carbon", peso: 7.0 },

  { nome: "Sprinta X", peso: 7.4 },

  { nome: "Falco Aereo", peso: 7.8 },

  { nome: "Corsa Titan", peso: 8.1 },

  { nome: "Velocità One", peso: 6.8 },

  { nome: "Eclisse Racing", peso: 7.1 },
];

const text = document.getElementById("text-display");
const list = document.getElementById("lista-bici");

for (let i = 0; i < listaBici.length; i++) {
  const newLi = document.createElement("li");
  list.appendChild(newLi);
  newLi.textContent = listaBici[i].nome;
}

function trovaPeso(min) {
  for (let i = 0; i < listaBici.length; i++) {
    console.log(listaBici[i].peso);
    if (listaBici[i].peso < min) {
      return (text.textContent = `La bici con peso minore è: ${listaBici[i].nome}`);
    }
  }
}

trovaPeso(6.8);
