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

// Szukanie błędów
let zle = text.filter(x => {
  if (x.includes("—") || x.includes("+") || x.includes("|")) {
    return false;
  }
  return true;
});
    
// sortowanie klientów
function sortObject(obj) {
  return Object.keys(obj).sort().reduce(function (result, key) {
      result[key] = obj[key];
      return result;
  }, {});
}

// sortowanie pracowników
const sortPracownik = Object.fromEntries(
  Object.entries(pracownik).sort(([,a],[,b]) => b-a)
);

// Odpowiedzi na serwer
for (const [player, value] of Object.entries(sortObject(res))) {
    const htmKlient = `${Lok(value, 2)} | ${Lok(player, 25)}a\n`;
    const blipKlient = document.getElementById("Klient")
    blipKlient.insertAdjacentHTML("beforeend", htmKlient);
}

for (const [player, value] of Object.entries(sortPracownik)) {
    const htmPracownik = `${Lok(value, 2)} | ${player}\n`
 
    const blipPracownik = document.getElementById("Pracownik")
    blipPracownik.insertAdjacentHTML("beforeend", htmPracownik);
}
for (const [player, value] of Object.entries(zle)) {
  const htmZle = `${Lok(player, 2)} | ${value}\n`;
  const blipZle = document.getElementById("Zle")
  blipZle.insertAdjacentHTML("beforeend", htmZle);
}
}
