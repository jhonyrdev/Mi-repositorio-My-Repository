const habilidades = [
  { name: "HTML & CSS", image: "./assets/img/habilidades/icon-html&css.png", duration: 500 },
  { name: "Java Script", image: "./assets/img/habilidades/icon-javascript.png", duration: 500 },
  { name: "Tailwind", image: "./assets/img/habilidades/icon-tailwind.png", duration: 700 },
  { name: "React JS", image: "./assets/img/habilidades/icon-reactjs.png", duration: 500 },
  { name: "Java", image: "./assets/img/habilidades/icon-java.png", duration: 700 },
  { name: "Spring Boot", image: "./assets/img/habilidades/icon-spring-boot.png", duration: 500 },
  { name: "SQL Server", image: "./assets/img/habilidades/icon-sqlserver.png", duration: 700 },
  { name: "Git & Github", image: "./assets/img/habilidades/icon-git&github.png", duration: 500 },
];

// Función para generar las tarjetas
function generarTarjetas(contenedorId, habilidades) {
  const habilidadesSection = document.querySelector(`#${contenedorId}`);

  habilidades.forEach((habilidad) => {
    const card = document.createElement("div");
    card.classList.add("cards--habilidades");
    card.setAttribute("data-aos", "fade-up");
    card.setAttribute("data-aos-duration", habilidad.duration);

    card.innerHTML = `
      <img class="logo-habilidades" src="${habilidad.image}" alt="${habilidad.name}">
      <p class="nombre-habilidades">${habilidad.name}</p>
    `;

    habilidadesSection.appendChild(card);
  });
}

// Dividir las habilidades en 3 grupos
const habilidadesGrupo1 = habilidades.slice(0, 4); // Primer grupo (0-3)
const habilidadesGrupo2 = habilidades.slice(4, 8); // Segundo grupo (4-6)

// Llamar a la función para generar las tarjetas en cada contenedor
generarTarjetas('habilidades-1', habilidadesGrupo1);
generarTarjetas('habilidades-2', habilidadesGrupo2);

