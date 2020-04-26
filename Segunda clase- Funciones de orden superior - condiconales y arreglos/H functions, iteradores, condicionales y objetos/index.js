const modules = [
  {
    id: 1,
    title: "Módulo deddeeded",
    content: "Este módulo es lalala",
    published: true,
    course: "programacion",
  },
  {
    id: 2,
    title: "Módulo 2",
    content: "Este módulo es lalala",
    published: false,
    course: "programacion",
  },
  {
    id: 3,
    title: "Módulo 32",
    content: "Este módulo es lalala",
    published: true,
    course: "matematica",
  },
  {
    id: 4,
    title: "Módulo 4",
    content: "Este módulo es dddddd",
    published: false,
    course: "ingles",
  },
  {
    id: 5,
    title: "Módulo frfrr",
    content: "Este módulo es lalala",
    published: true,
    course: "ingles",
  },
  {
    id: 6,
    title: "Módulo frfr",
    content: "Este módulo es lalala",
    published: true,
    course: "fisica",
  },
];
// Seleccionamos un select
const select_course = document.getElementById("select");
let select_value = select_course.value;

function getCourse() {
  // Evento onchange
  select_course.addEventListener("change", function () {
    select_value = select_course.value;

    const filter_modules = modules.filter(
      (module) => module.course === select_value
    );
    fillDOMWithModules(filter_modules);
    getModuleIdAndListenChanges();
  });
}

getCourse();

function filterModules() {
  // Creamos nuestros divs de manera dinámica
  const filter_modules = modules.filter(
    (module) => module.course === select_value
  );
  return filter_modules;
}

function fillDOMWithModules(modules) {
  // console.log(modules);
  const module_container = document.getElementById("modulesContainer");

  module_container.innerHTML = "";

  modules.map((module) => {
    const divs = document.createElement("DIV");
    divs.classList.add("modules");

    for (let index = 0; index <= 4; index++) {
      const spans = document.createElement("SPAN");

      if (index === 0) {
        // Creamos texto
        const text = document.createTextNode(module.title);

        const strong = document.createElement("STRONG");

        // Agregamos texto al strong
        strong.appendChild(text);
        spans.appendChild(strong);
      } else if (index === 1) {
        const text = document.createTextNode(module.content);
        spans.appendChild(text);
      } else if (index === 2) {
        const text = document.createTextNode(
          module.published ? "Estado: Publicado" : "Estado: Suspendido"
        );
        spans.appendChild(text);
      } else if (index === 3) {
        const text = document.createTextNode("Curso: " + module.course);
        spans.appendChild(text);
      } else {
        const text = document.createTextNode("X");
        spans.classList.add("btn-remove");
        spans.setAttribute("value", module.id);
        spans.appendChild(text);
      }
      divs.appendChild(spans);
    }

    module_container.appendChild(divs);
  });

  // console.log(module_container);
}
fillDOMWithModules(filterModules());

// Función para remover información del DOM
function getModuleIdAndListenChanges() {
  const btns = document.getElementsByClassName("btn-remove");
  for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      removeModule(btns[i].getAttribute("value"));
    });
  }
}
getModuleIdAndListenChanges();

let new_modules = [];
function removeModule(module_id) {
  const filter_modules = modules.filter(
    (module) => module.course === select_value
  );

  if (new_modules.length === 0) {
    new_modules = filter_modules;
  }

  // Busca el ebjecto y devuelve la posición
  const find_index = new_modules.findIndex(
    (module) => module.id === parseInt(module_id)
  );

  new_modules.splice(find_index, 1);

  // console.log(new_modules);
  fillDOMWithModules(new_modules);
  getModuleIdAndListenChanges();
}
