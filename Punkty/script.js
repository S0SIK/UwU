function sortNum (a, b) {
    return a - b;
  }

function prettyPrint() {
const text = document.getElementById('Dane').value.split(`\n`);
let updatedAllDatatext = [];
let Klient = []
let Pracownik = []
let index = 0
for (const [player, value] of Object.entries(text.sort())) {
    
    res = index++
updatedAllDatatext[res] = text[res].split(` `)
}
for (const [player, value] of Object.entries(updatedAllDatatext)) {
if (value[2] == `|`) {
    Klient[`${value[0]} ${value[1]}`] = 0
  } 
  Klient.sort();
} 

for (const [player, value] of Object.entries(updatedAllDatatext)) {
    if (value[2] == `—`) {
        Pracownik[`${value[0]} ${value[1]}`] = 0
      }
    }
console.log(Klient)
for (const [player, value] of Object.entries(Klient)) {
    const htmKlient = `${player} | ${value}\n`;
    console.log(htmKlient)
    const blipKlient = document.getElementById("Klient")
    blipKlient.insertAdjacentHTML("beforeend", htmKlient);
}
for (const [player, value] of Object.entries(Pracownik)) {
    const htmPracownik = `${player} | ${value}\n`;
    console.log(htmPracownik)
    const blipPracownik = document.getElementById("Pracownik")
    blipPracownik.insertAdjacentHTML("beforeend", htmPracownik);
}
}
