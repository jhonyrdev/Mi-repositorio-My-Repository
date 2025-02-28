const proyectos = [
  {
    img: "./assets/img/proyectos/cap-proyecto1.png",
    alt: "Proyecto: Landing Page",
    title: "Landing Page",
    description:
      "Landing page atractiva sobre viajes y turismo, con secciones de destinos populares, lugares recomendados, y diseño sencillo e intuitivo.",
    demoLink: "https://mariasmoun.github.io/Juego-del-Ahorcado/",
    repoLink: "https://github.com/mariasmoUN/Juego-del-Ahorcado",
  },
  {
    img: "./assets/img/proyectos/cap-proyecto2.png",
    alt: "Proyecto: Mi Portafolio",
    title: "Mi Portafolio",
    description:
      "Un vistazo preciso sobre mí, mis habilidades, formación y proyectos, todo esto en un portafolio web interactivo, atractivo y profesional.",
    demoLink: "https://myrepositoryjr.netlify.app/",
    repoLink: "https://github.com/jhonyrdev/Mi-repositorio-My-Repository",
  },
  {
    img: "./assets/img/proyectos/cap-proyecto3.png",
    alt: "Proyecto: Gestor de Tareas",
    title: "Gestor de Tareas",
    description:
      "Página que simula acciones básicas de listar, eliminar, editar y agregar tareas, tareas completadas no se pueda eliminar o actualizar.",
    demoLink: "https://task-to-manager-1.onrender.com",
    repoLink: "https://github.com/jhonyrdev/Task_to_Manager",
  },
];

const proyectosContainer = document.querySelector(
  ".cards_container--proyectos"
);

proyectos.forEach((proyecto, index) => {
  const card = document.createElement("div");
  card.classList.add("cards--proyectos");
  card.setAttribute("data-aos", "zoom-in-up");
  card.setAttribute("data-aos-anchor-placement", "center-bottom");

  card.innerHTML = `
      
    <img class="imgCard--proyectos" src="${proyecto.img}" alt="${proyecto.alt}">
      
    <div class="container_textCard--proyectos">
      <h2 data-section="proyectos" data-value="title-proyecto${index + 1}">${proyecto.title}</h2>
      <p data-section="proyectos" data-value="info-proyecto${index + 1}">${proyecto.description}</p>

      <div class="container_btn--proyectos">
        <a href="${proyecto.demoLink}" target="_blank">
          <button class="btn_demo">
            <i class="fa-solid fa-eye"></i>DEMO
          </button>
        </a>
        <a href="${proyecto.repoLink}" target="_blank">
          <button class="btn_repo">
             <i class="fa-brands fa-github-alt"></i>REPO
          </button>
        </a>
      </div>
    </div>
  `;

  proyectosContainer.appendChild(card);
});
