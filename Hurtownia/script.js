const Lok = (num, expectedLen) => {
  const inputLen = Math.ceil(Math.log(num + 1) / Math.LN10);
  // num.toString().substring(0, expectedLen).length

  let output = num.toString().substring(0, expectedLen);

  for (let i = 0; i < expectedLen - inputLen; i++) {
      output += "\ ";
  }

  return output;
}

function prettyPrint() {
const text = document.getElementById('Dane').value.split(`\n`);


// sprawdzanie kosztów

let currentName = null;
let pracownik = {};

text.forEach(line => {
  if (line.includes("—")) {
    currentName = line.split("—")[0].trim();
    if (pracownik[currentName] === undefined) {
      pracownik[currentName] = 0;
    }
  } else {
    if (currentName) {
        let lineValue = Number(line.match(/\d+/));
      pracownik[currentName] += lineValue;
    }
  }
});

// Szukanie błędów
let zle = text.filter(x => {
  if (x.includes("—") || x.includes("+") || x.includes("|") || x.includes("$")) {
    return false;
  }
  return true;
});


// sortowanie pracowników
const sortPracownik = Object.fromEntries(
  Object.entries(pracownik).sort(([,a],[,b]) => b-a)
);
  const suma = Object.values(pracownik).reduce((a, b) => a + b, 0)
  const htmSuma = `Koszta w tmy tygodniu: ${suma}$\n\n`;
  const blipPracownik = document.getElementById("Pracownik")
  blipPracownik.insertAdjacentHTML("beforeend", htmSuma);
  

// Odpowiedzi na serwer
for (const [player, value] of Object.entries(sortPracownik)) {
    const suma = Object.values(pracownik).reduce((a, b) => a + b, 0)
    const htmSuma = `Koszta w tmy tygodniu: ${suma}\nPracownicy:\n`
    console.log(htmSuma)
    const htmPracownik = `${Lok(value, 4)} | ${player}\n`
    const blipPracownik = document.getElementById("Pracownik")
    blipPracownik.insertAdjacentHTML("beforeend", htmPracownik);
}
for (const [player, value] of Object.entries(zle)) {
  const htmZle = `${Lok(player, 2)} | ${value}\n`;
  const blipZle = document.getElementById("Zle")
  blipZle.insertAdjacentHTML("beforeend", htmZle);
}
}
