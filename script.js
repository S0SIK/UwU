function sortNum (a, b) {
    return a - b;
  }

  function PunktyPracownika (Pracownik, LiczbaA, LiczbaB) {

  }

function prettyPrint() {
const text = document.getElementById('Dane').value.split(`\n`);
let updatedAllDatatext = [];
let Klient = []
let Klient2 = []
let Pracownik = []
let Pracownik2 = []
let Pracownik3 = []
let Pracownik4 = []
let Pracownik5 = []
let Pracownik6 = []
let Punkty = []
let filtr = [];
let Zle = []
let index = 0
for (const [player, value] of Object.entries(text)) {
    
    res = index++
updatedAllDatatext[res] = text[res].trim().split(` `)
}
updatedAllDatatext.forEach(x => {
  filtr.push(x.filter(Boolean));
  });
for (const [player, value] of Object.entries(filtr)) {
  if (value[1] == `—`) {
    Pracownik[`${player} ${value[0]}`] = 0
  }else if (value[2] == `—`) {
    Pracownik[`${player} ${value[0]} ${value[1]}`] = 0
  }else if (value[3] == `—`) {
    Pracownik[`${player} ${value[0]} ${value[1]} ${value[2]}`] = 0
  }else if (value[4] == `—`) {
    Pracownik[`${player} ${value[0]} ${value[1]} ${value[2]} ${value[3]}`] = 0
  }else if (value[5] == `—`) {
    Pracownik[`${player} ${value[0]} ${value[1]} ${value[2]} ${value[3]} ${value[4]}`] = 0
  } else {
  if (value.length == 3 && value[1] == `|`) {
    Klient[`${player} ${value[0]}`] = value[2]
    } else if (value.length == 4 && value[2] == `|`) {
    Klient[`${player} ${value[0]} ${value[1]}`] = value[3]
    } else if (value.length == 5 && value[3] == `|`) {
    Klient[`${player} ${value[0]} ${value[1]} ${value[2]}`] = value[4]
    } else if (value.length == 6 && value[4] == `|`) {
    Klient[`${player} ${value[0]} ${value[1]} ${value[2]} ${value[3]}`] = value[5]
    } else if (value.length == 3) {
      Klient[`${player} ${value[0]} ${value[1]}`] = value[2]
      } else if (value.length == 4) {
      Klient[`${player} ${value[0]} ${value[1]} ${value[2]}`] = value[3]
      } else if (value.length == 5) {
      Klient[`${player} ${value[0]} ${value[1]} ${value[2]} ${value[3]}`] = value[4]
      } else if (value.length == 6) {
      Klient[`${player} ${value[0]} ${value[1]} ${value[2]} ${value[3]} ${value[4]}`] = value[5]
      } else {
        Zle[value] = player
      }
    }
};

for (const [player, value] of Object.entries(filtr)) {
  if (value[1] == `—`) {
    Punkty[`${player} ${value[0]}`] = 0
  }else if (value[2] == `—`) {
    Punkty[`${player} ${value[0]} ${value[1]}`] = 0
  }else if (value[3] == `—`) {
    Punkty[`${player} ${value[0]} ${value[1]} ${value[2]}`] = 0
  }else if (value[4] == `—`) {
    Punkty[`${player} ${value[0]} ${value[1]} ${value[2]} ${value[3]}`] = 0
  }else if (value[5] == `—`) {
    Punkty[`${player} ${value[0]} ${value[1]} ${value[2]} ${value[3]} ${value[4]}`] = 0
  } else {
  if (value.length == 3 && value[1] == `|`) {
    Punkty[`${player} Klient`] = value[2]
    } else if (value.length == 4 && value[2] == `|`) {
    Punkty[`${player} Klient`] = value[3]
    } else if (value.length == 5 && value[3] == `|`) {
      Punkty[`${player} Klient`] = value[4]
    } else if (value.length == 6 && value[4] == `|`) {
      Punkty[`${player} Klient`] = value[5]
    } else if (value.length == 3) {
      Punkty[`${player} Klient`] = value[2]
    } else if (value.length == 4) {
      Punkty[`${player} Klient`] = value[3]
    } else if (value.length == 5) {
      Punkty[`${player} Klient`] = value[4]
    } else if (value.length == 6) {
      Punkty[`${player} Klient`] = value[5]
    }
    }
};


const filtr2 = filtr.slice(1)
const addG = ["Góra"]
const filtr3 = addG.concat(filtr2)
for (const [player, value] of Object.entries(filtr3)) {
  if (value[1] == `—`) {
    Pracownik2[`${player} ${value[0]}`] = 0
  }else if (value[2] == `—`) {
    Pracownik2[`${player} ${value[0]} ${value[1]}`] = 0
  }else if (value[3] == `—`) {
    Pracownik2[`${player+1} ${value[0]} ${value[1]} ${value[2]}`] = 0
  }else if (value[4] == `—`) {
    Pracownik2[`${player} ${value[0]} ${value[1]} ${value[2]} ${value[3]}`] = 0
  }else if (value[5] == `—`) {
    Pracownik2[`${player} ${value[0]} ${value[1]} ${value[2]} ${value[3]} ${value[4]}`] = 0
  }
}





//     Klient  Klient  Klient  Klient  Klient  Klient
for (const [player, value2] of Object.entries(Klient)) {
  Klient2 = player.split(' ')
  for (const [player, value] of Object.entries(filtr)) {
  if (`${Klient2[1]} ${Klient2[2]}` == `${value[0]} ${value[1]}`) {
    const Punkty = 0

   // console.log(`${Klient2[1]} ${Klient2[2]}`, value2)
  }
}
}




//    Pracownik    Pracownik    Pracownik    Pracownik

for (const [player, value] of Object.entries(Punkty)) {
  ID = player.split(' ')
  
    // if (ID.length == 2 && value == 0) {
    //   Pracownik6[`${ID[1]}`] = 0
    // } else if (ID.length == 3 && value == 0) {
    //   Pracownik6[`${ID[1]} ${ID[2]}`] = 0
    // } else if (ID.length == 4 && value == 0) {
    //   Pracownik6[`${ID[1]} ${ID[2]}  ${ID[3]}`] = 0
    // } else if (ID.length == 5 && value == 0) {
    //   Pracownik6[`${ID[1]} ${ID[2]}  ${ID[3]}  ${ID[4]}`] = 0
    // } else {
      if (value !== 0) {
        for (const [player, value] of Object.entries(Pracownik)) {
         const PracownikId = player.split(' ')
        if (ID[0]-1 == PracownikId[0]) {
          console.log(`Dodano punkt: ${PracownikId[1]} ${PracownikId[2]}`)
          for (let value in player) {
            
            console.log(value)
          value += 1;
          Pracownik6[`${PracownikId[1]} ${PracownikId[2]}`] = value
          };
        } else if (ID[0]-2 == PracownikId[0]) {
          console.log(`Dodano punkt: ${PracownikId[1]} ${PracownikId[2]}`)
          for (let value in player) {
            console.log(value)
          value += 1;
          Pracownik6[`${PracownikId[1]} ${PracownikId[2]}`] = value
          };
        }
      //}
    };
  console.log(Pracownik6)
}
}

    // for (const [player, value] of Object.entries(Pracownik)) {
    //   Pracownik3 = player.split(' ')
    //   for (const [player, value] of Object.entries(Pracownik2)) {
    //     Pracownik4 = player.split(' ')
    //     if (Pracownik3[0] == Pracownik4[0]-2) {
    //       Punkty[`${Pracownik3[1]} ${Pracownik3[2]}`] = {
    //         "Punkt": `${Pracownik3[0]} 1`
    //     } 
    //   } else if (Pracownik3[0] == Pracownik4[0]-3) {
    //     Punkty[`${Pracownik3[1]} ${Pracownik3[2]}`] = {
    //       "Punkt": `${Pracownik3[0]} 2`
    //     }
    //   }
//       } else if (Pracownik3[0] == Pracownik4[0]-4) {
//            Punkty[`${Pracownik3[0]} ${Pracownik3[1]} ${Pracownik3[2]}`] = {
//           "Punkt": 3
//         }
//       } else if (Pracownik3[0] == Pracownik4[0]-5) {
//           Punkty[`${Pracownik3[0]} ${Pracownik3[1]} ${Pracownik3[2]}`] = {
//           "Punkt": 4
//         }
//       } else if (Pracownik3[0] == Pracownik4[0]-6) {
//           Punkty[`${Pracownik3[0]} ${Pracownik3[1]} ${Pracownik3[2]}`] = {
//           "Punkt": 5
//         }
// }
        
        //console.log(Pracownik4[0]-Pracownik3[0]-1, Pracownik3[1], Pracownik3[2])
        
      
     //console.log(Punkty)
    

    //   for (const [player, value] of Object.entries(Pracownik)) {
    // Pracownik5 = player.split(' ')
    // if (Pracownik2.length == 2) {
    //   Pracownik6[`${Pracownik5[1]}`] = 0
    // } else if (Pracownik2.length == 3) {
    //   Pracownik6[`${Pracownik5[1]} ${Pracownik5[2]}`] = 0
    // } else if (Pracownik2.length == 4) {
    //   Pracownik6[`${Pracownik5[1]} ${Pracownik5[2]}  ${Pracownik5[3]}`] = 0
    // } else if (Pracownik2.length == 5) {
    //   Pracownik6[`${Pracownik5[1]} ${Pracownik5[2]}  ${Pracownik5[3]}  ${Pracownik5[4]}`] = 0
    // }
    //  // console.log(Pracownik2[0], Pracownik2[1], Pracownik2[2])
    // }
  

//     for (const [player, value] of Object.entries(Pracownik4)) {
//       Pracownik2 = player.split(' ')
//       if (Pracownik2.length == 2) {
//         Pracownik5[`${Pracownik2[1]}`] = 0
//       } else if (Pracownik2.length == 3) {
//         Pracownik5[`${Pracownik2[1]} ${Pracownik2[2]}`] = 0
//       } else if (Pracownik2.length == 4) {
//         Pracownik5[`${Pracownik2[1]} ${Pracownik2[2]}  ${Pracownik2[3]}`] = 0
//       } else if (Pracownik2.length == 5) {
//         Pracownik5[`${Pracownik2[1]} ${Pracownik2[2]}  ${Pracownik2[3]}  ${Pracownik2[4]}`] = 0
//       }
//      //console.log(Pracownik2[0], Pracownik2[1], Pracownik2[2])
//       }
//       for (const [player1, value1] of Object.entries(Pracownik3)) {
//         for (const [player2, value2] of Object.entries(Pracownik5)) {
// console.log(player1, player2)
//         }}

    

for (const [player, value] of Object.entries(Klient)) {
    const htmKlient = `${player} | ${value}\n`;
    const blipKlient = document.getElementById("Klient")
    blipKlient.insertAdjacentHTML("beforeend", htmKlient);
}
for (const [player, value] of Object.entries(Pracownik6)) {
    const htmPracownik = `${value} | ${player}\n`;
    const blipPracownik = document.getElementById("Pracownik")
    blipPracownik.insertAdjacentHTML("beforeend", htmPracownik);
}
for (const [player, value] of Object.entries(Zle)) {
  const htmZle = `Wiersz: ${value} | Treść: ${player}\n`;
  const blipZle = document.getElementById("Zle")
  blipZle.insertAdjacentHTML("beforeend", htmZle);
}
}
