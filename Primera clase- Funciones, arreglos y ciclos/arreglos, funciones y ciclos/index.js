const input = "Tercera clase de javascrIpt";
const vowels = ["a", "e", "i", "o", "u"];
const resultArray = [];

for (let i = 0; i < input.length; i++) {
  for (let v = 0; v < vowels.length; v++) {
    if (input[i].toLowerCase() === vowels[v]) {
      resultArray.push(input[i].toLowerCase());
    }
  }
  if (input[i] === "e" || input[i] === "u") {
    resultArray.push(input[i]);
  }
}

// console.log(resultArray.join(" "));

function buttonContainer() {
  // div_container contenedor donde se va a llenar los nueve divs
  const div_container = document.getElementById("buttons");

  //   Creamos los nueve divs
  for (let i = 0; i < 9; i++) {
    const create_divs = document.createElement("DIV");
    create_divs.setAttribute("id", "btn" + (i + 1) + "" + (i + 1));

    // Crear los span para los textos
    for (let j = 0; j < 2; j++) {
      const span = document.createElement("span");

      const text = document.createTextNode(i + 1);

      //   Agregamos al span el valor de text
      span.appendChild(text);
      // Agregamos el span a los divs en create_divs
      create_divs.appendChild(span);
    }
    div_container.appendChild(create_divs);
  }
}

buttonContainer();

function rotateValues() {
  const ids = [11, 22, 33, 66, 99, 88, 77, 44];

  const whiteValues = [1, 2, 3, 6, 9, 8, 7, 4];

  const redValues = [1, 2, 3, 6, 9, 8, 7, 4];

  const btn_55 = document.getElementById("btn55");

  btn_55.addEventListener("click", function () {
    // Eliminamos el último y lo agregamos al inicio del arreglo
    whiteValues.unshift(whiteValues.pop());

    // Eliminamos el primero y lo agregamos al final del arreglo
    redValues.push(redValues.shift());

    for (let i = 0; i < ids.length; i++) {
      const buttons = document.getElementById("btn" + ids[i]).children;
      for (let j = 0; j < buttons.length; j++) {
        if (j === 0) {
          buttons[j].innerText = redValues[i];
        } else {
          buttons[j].innerText = whiteValues[i];
        }
      }
    }
  });
}

rotateValues();
