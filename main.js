// let colVar = "#000000";
let num = 0;
let canvasDiv = document.getElementById("fullCanvas");

for(let i = 0;i<=4096;i++){//16777215 for full
  let hexCol = num.toString(16);
  // hexCol = String(hexCol).padStart(6, '0'); for full
  hexCol = String(hexCol).padStart(3, '0');
  console.log("#"+hexCol);

  let colorCode = hexCol.split("").reverse().join("");
  colorCode = "#"+colorCode; 

  let html = `<div class="card" style="background-color: ${colorCode};">
                <p class="card-text">${colorCode}</p>
              </div>`

  canvasDiv.insertAdjacentHTML("beforeend", html);



  num++;
}



