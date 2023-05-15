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

// Szukanie klientów
let klient1 = text.filter(x => {
  if (x.includes("|")) {
    return true;
  }
  return false;
});

let klient2 = text.filter(x => {
  if (x.includes("+")) {
    return true;
  }
  return false;
});

// Zliczanie Punktów klientów
let res = {};
klient1.forEach(line => {
    const name = line.split("|")[0].trim();
  const value = Number(line.split("|")[1]);
  
  if(res[name] === undefined){
      res[name] = value;
  } else {

      res[name] += value;
  }
});

klient2.forEach(line => {
    const name = line.split("+")[0].trim();
  const value = Number(line.split("+")[1]);
  
  if(res[name] === undefined){
      res[name] = value;
  } else {

      res[name] += value;
  }
});

// Szukanie pracowników

let pracownik = {};
let current = null;

text.forEach(x => {
  if (x.includes("—")) {
    const name = x.split("—")[0].trim();
    current = name;

    if (pracownik[name] === undefined) {
      pracownik[name] = 1;
    }
  } else {
    if (current) {
      pracownik[current] += 1;
    }
  }
});

console.log(pracownik)

// let sortPracownik = [];
// for (var value in pracownik) {
  
//   console.log(pracownik[value], value)
//   sortPracownik.push(pracownik[value]);
//   console.log(sortPracownik)
// }
// sortPracownik.sort(function(a, b) {
//   return b - a;
//});


// Szukanie błędów
let zle = text.filter(x => {
  if (x.includes("—") || x.includes("+") || x.includes("|")) {
    return false;
  }
  return true;
});
    
for (const [player, value] of Object.entries(res)) {
    const htmKlient = `${Lok(value, 2)} | ${player}\n`;
    const blipKlient = document.getElementById("Klient")
    blipKlient.insertAdjacentHTML("beforeend", htmKlient);
}

for (const [player, value] of Object.entries(pracownik)) {
  console.log(`P: ${player}`)
  console.log(`v: ${value}`)
    const htmPracownik = `${Lok(value, 2)} | ${player}\n`;
    const blipPracownik = document.getElementById("Pracownik")
    blipPracownik.insertAdjacentHTML("beforeend", htmPracownik);
}
for (const [player, value] of Object.entries(zle)) {
  const htmZle = `${Lok(player, 2)} | ${value}\n`;
  const blipZle = document.getElementById("Zle")
  blipZle.insertAdjacentHTML("beforeend", htmZle);
}
}
