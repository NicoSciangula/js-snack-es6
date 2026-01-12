//* Creare un array di oggetti di squadre.
//* Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
//* Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
//* Generare numeri random al posto degli 0 nelle proprietà “punti fatti” e “falli subiti”.
//* Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

const squadre = [
  { nome: "Juventus", puntiFatti: 0, falliSubiti: 0 },
  { nome: "Milan", puntiFatti: 0, falliSubiti: 0 },
  { nome: "Inter", puntiFatti: 0, falliSubiti: 0 },
  { nome: "Roma", puntiFatti: 0, falliSubiti: 0 },
  { nome: "Torino", puntiFatti: 0, falliSubiti: 0 },
];

function generateRandomNumber(max, min) {
  return Math.floor(Math.random() * (max - min) + min);
}

for (let i = 0; i < squadre.length; i++) {
  squadre[i].falliSubiti += generateRandomNumber(15, 1);
  squadre[i].puntiFatti += generateRandomNumber(15, 1);
}
const newArray = squadre.map((squadra) => {
  return {
    nome: squadra.nome,
    falliSubiti: squadra.falliSubiti,
  };
});

console.log(newArray);
