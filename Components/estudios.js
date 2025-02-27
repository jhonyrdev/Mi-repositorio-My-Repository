const estudios = [
    {
      logo: "./assets/img/educacion/logo-UTP.png",
      alt: "Logo - Universidad Tecnológica del Perú",
      title: "Ing. de Sistemas e informática",
      duration: "2023 - En curso",
      aos: "fade-down",
      easing: "linear",
    },
    {
      logo: "./assets/img/educacion/logo-UNI.png",
      alt: "Logo - Universidad Nacional de Ingeniería",
      title: "Curso de SQL SERVER - Python",
      duration: "Enero 2025 - Febrero 2025",
      aos: "fade-down",
      easing: "linear",
    },
    {
      logo: "./assets/img/educacion/logo-Udemy.png",
      alt: "Logo - Plataforma de cursos Udemy",
      title: "Curso de Desarrollo Web",
      duration: "Junio 2023 - Julio 2024",
      aos: "fade-down",
      easing: "linear",
    },
];
  
  const estudioContainer = document.querySelector(".cards_container--estudio");
  
  estudios.forEach((estudio, index) => {
    const card = document.createElement("div");
    card.classList.add("cards--estudio");
    card.setAttribute("data-aos", estudio.aos);
    card.setAttribute("data-aos-easing", estudio.easing || "");
    card.setAttribute("data-aos-duration", "500");
  
    card.innerHTML = `
      <img class="logo-uni" src="${estudio.logo}" alt="${estudio.alt}">
      <div class="container_texto--estudio">
        <p class="estudio--curso" data-section="Estudio" data-value="estudio${index + 1}">${estudio.title}</p>
        <p class="estudio--tiempo" data-section="Estudio" data-value="tiempo-estudio${index + 1}">${estudio.duration}</p>
      </div>
    `;
  
    estudioContainer.appendChild(card);
  });
  