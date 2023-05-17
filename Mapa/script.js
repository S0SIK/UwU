var scale = 1,
        panning = false,
        pointX = 0,
        pointY = 0,
        start = { x: 0, y: 0 },
        zoom = document.getElementById("zoom");
      function setTransform() {
        zoom.style.transform = "translate(" + pointX + "px, " + pointY + "px) scale(" + scale + ")";
      }
      zoom.onmousedown = function (e) {
        e.preventDefault();
        start = { x: e.clientX - pointX, y: e.clientY - pointY };
        panning = true;
      }
      zoom.onmouseup = function (e) {
        panning = false;
      }
      zoom.onmousemove = function (e) {
        e.preventDefault();
        if (!panning) {
          return;
        }
        pointX = (e.clientX - start.x);
        pointY = (e.clientY - start.y);
        setTransform();
      }
      zoom.onwheel = function (e) {
        e.preventDefault();
        var xs = (e.clientX - pointX) / scale,
          ys = (e.clientY - pointY) / scale,
          delta = (e.wheelDelta ? e.wheelDelta : -e.deltaY);
        (delta > 0) ? (scale *= 1.2) : (scale /= 1.2);
        pointX = e.clientX - xs * scale;
        pointY = e.clientY - ys * scale;
        setTransform();
      }


  fetch(`GPS/Lokacje.json`)
    .then(response => response.json())
    .then(data => {
console.log(data)
for (const [data1, value1] of Object.entries(data)) {
  for (const [data2, value2] of Object.entries(value1)) {
      const Blip = value2.Blip
      const Tytuł = value2.Tytuł
      const left = value2.left
      const bottom = value2.bottom
      const Png = value2.Png
      const Opis = value2.Opis
      const Produkt = value2.Produkt
      const Cena = value2.Cena
      const Craft_1 = value2.Craft_1
      const Craft_2 = value2.Craft_2
      const Craft_3 = value2.Craft_3
      const Craft_4 = value2.Craft_4

      createButton(Blip, Tytuł, left, bottom, Png, Opis, Produkt, Cena, Craft_1, Craft_2, Craft_3, Craft_4)
       }
      }

    })


  function createButton(Blip, Tytuł, left, bottom, Png, Opis, Produkt, Cena, Craft_1, Craft_2, Craft_3, Craft_4) {

    const htm =
      `<div class="punkt" style="position: relative; left: ${left}px; bottom:  ${bottom}px">
      <img class="punkt" width="15" height="15" src="../img/${Blip}.png" alt="...">
      <div class="visible">
    <div>${Tytuł}</div>
    <img width="450" height="225" src="${Png}">
    <div class="produkt">
      <div class="cena">Dnia 11.05.2023</Div>
      <div class="cena">W tym miejscu został pochowany</Div>
      <div class="cena">Jack Hillson</Div>
    </div>
      </div>`;

    const blip = document.getElementById("blip");

    blip.insertAdjacentHTML("beforeend", htm);

  }