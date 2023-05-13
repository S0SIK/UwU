function sortNum (a, b) {
    return a - b;
  }

function prettyPrint() {
const text = document.getElementById('Dane').value.split(`\n`);
let updatedAllDatatext = [];
let Klient = []
let Pracownik = []
let index = 0
for (const [player, value] of Object.entries(text)) {
    
    res = index++
updatedAllDatatext[res] = text[res].split(` `)
}
for (const [player, value] of Object.entries(updatedAllDatatext)) {
if (value[1] == `|`) {
    Klient[`${player} ${value[0]}`] = {
        "Id": player
    }
  }else if (value[2] == `|`) {
    Klient[`${player} ${value[0]} ${value[1]}`] = {
        "Id": player
    }
  }else if (value[3] == `|`) {
    Klient[`${player} ${value[0]} ${value[1]} ${value[2]}`] = {
        "Id": player
    }
  }else if (value[4] == `|`) {
    Klient[`${player} ${value[0]} ${value[1]} ${value[2]} ${value[3]}`] = {
        "Id": player
    }
  }else if (value[5] == `|`) {
    Klient[`${player} ${value[0]} ${value[1]} ${value[2]} ${value[3]} ${value[4]}`] = {
        "Id": player
    }
  }else if (value[1] == `—`) {
    Pracownik[`${player} ${value[0]}`] = {
        "Id": player
    }
  }else if (value[2] == `—`) {
    Pracownik[`${player} ${value[0]} ${value[1]}`] = {
        "Id": player
    }
  }else if (value[3] == `—`) {
    Pracownik[`${player} ${value[0]} ${value[1]} ${value[2]}`] = {
        "Id": player
    }
  }else if (value[4] == `—`) {
    Pracownik[`${player} ${value[0]} ${value[1]} ${value[2]} ${value[3]}`] = {
        "Id": player
    }
  }else if (value[5] == `—`) {
    Pracownik[`${player} ${value[0]} ${value[1]} ${value[2]} ${value[3]} ${value[4]}`] = {
        "Id": player
    }
  }
  Klient.sort();
} 

for (const [player, value] of Object.entries(Klient)) {
    const htmKlient = `${player} | ${value}\n`;
    const blipKlient = document.getElementById("Klient")
    blipKlient.insertAdjacentHTML("beforeend", htmKlient);
}
for (const [player, value] of Object.entries(Pracownik)) {
    const htmPracownik = `${player} | ${value}\n`;
    const blipPracownik = document.getElementById("Pracownik")
    blipPracownik.insertAdjacentHTML("beforeend", htmPracownik);
}
}
