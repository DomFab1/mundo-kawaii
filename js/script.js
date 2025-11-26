document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('modal-section');
  const modalTitle = document.getElementById('modal-title');
  const modalImage = document.getElementById('modal-image');
  const modalDescription = document.getElementById('modal-description');
  const modalVideo = document.getElementById('modal-video');
  const modalClose = document.querySelector('.modal-close');

let botonesEpisodiosContainer; // Contenedor para los botones de capítulos

// Validar elementos del modal
if (!modal || !modalTitle || !modalImage || !modalDescription || !modalVideo || !modalClose) {
  console.error("No se encontró algún elemento del modal en el DOM");
}

function openModal(pelicula) {
  modalTitle.textContent = pelicula.titulo;
  modalImage.src = pelicula.imagen || '';
  modalImage.alt = pelicula.titulo || '';
  modalDescription.textContent = pelicula.descripcion || '';
  
  // Limpia contenedor de botones si ya existe
  if (botonesEpisodiosContainer) {
    botonesEpisodiosContainer.remove();
    botonesEpisodiosContainer = null;
  }

  // Si tiene episodios, crea botones para cada uno
  if (pelicula.episodios && Array.isArray(pelicula.episodios) && pelicula.episodios.length > 0) {
    // Mostrar el primer episodio por defecto
    modalVideo.src = pelicula.episodios[0].videoUrl || '';

    // Crear contenedor para botones
    botonesEpisodiosContainer = document.createElement('div');
    botonesEpisodiosContainer.style.marginTop = '10px';

    pelicula.episodios.forEach((episodio, index) => {
      const btn = document.createElement('button');
      btn.textContent = episodio.titulo || `Capítulo ${index + 1}`;
      btn.style.marginRight = '5px';
      btn.style.cursor = 'pointer';

      btn.addEventListener('click', () => {
        modalVideo.src = episodio.videoUrl;
        modalVideo.play();
      });

      botonesEpisodiosContainer.appendChild(btn);
    });

    // Insertar botones justo después de la descripción
    modalDescription.insertAdjacentElement('afterend', botonesEpisodiosContainer);

  } else {
    // Si no tiene episodios, solo muestra el video normal
    modalVideo.src = pelicula.videoUrl || '';
  }

  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');
  modal.focus();

  // Animación de entrada
  modal.style.opacity = '0';
  setTimeout(() => {
    modal.style.transition = 'opacity 0.3s ease';
    modal.style.opacity = '1';
  }, 10);
}

modalClose.addEventListener('click', () => {
  modal.style.transition = 'opacity 0.3s ease';
  modal.style.opacity = '0';

  setTimeout(() => {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    modalVideo.pause();
    modalVideo.src = '';

    // Limpiar botones episodios al cerrar modal
    if (botonesEpisodiosContainer) {
      botonesEpisodiosContainer.remove();
      botonesEpisodiosContainer = null;
    }
  }, 300);
});

// Cerrar modal haciendo click fuera del contenido
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modalClose.click();
  }
});

// Cerrar modal con tecla ESC
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal.classList.contains('active')) {
    modalClose.click();
  }
});

// PELICULAS...
const peliculas = [
  {
    titulo: "Thor",
    imagen: "imagen/thor.webp",
    descripcion: "“Thor, el dios rudo, aprende a ser un héroe con mucho corazón y rayos mágicos ⚡🌸.”",
    videoUrl: "video/peliculas/thor.mp4",
    categoria: "peliculas"
  },
  {
    titulo: "Thor: un mundo oscuro",
    imagen: "imagen/thor2.webp",
    descripcion: "“Thor regresa con su martillo y amigos, luchando contra villanos con mucha fuerza y brillo ✨🔨🌸.”",
    videoUrl: "video/peliculas/mundooscuro.mp4",
    categoria: "peliculas"
  },
  {
    titulo: "Thor: Ragnarok",
    imagen: "imagen/thor3.jpg",
    descripcion: "“Thor enfrenta aventuras cósmicas llenas de risas, peleas épicas y nuevos amigos galácticos 🌟⚡😂.”",
    videoUrl: "video/peliculas/ragnarok.mp4",
    categoria: "peliculas"
  },
  {
    titulo: "Thor: Amor y trueno",
    imagen: "imagen/thor4.jpg",
    descripcion: "“Thor vuelve con más poder, nuevos desafíos y un viaje lleno de corazón y diversión 🌈⚡💖.”",
    videoUrl: "video/peliculas/amortrueno.mp4",
    categoria: "peliculas"
  },
  {
    titulo: "Avenger: Los Vengadores",
    imagen: "imagen/avenger.webp",
    descripcion: "“Los héroes más poderosos se juntan para salvar el mundo con mucho teamwork y valentía 💥🦸‍♂️🌸.”",
    videoUrl: "video/peliculas/vengadores.mp4",
    categoria: "peliculas"
  },
  {
    titulo: "Avenger: La era Ultron",
    imagen: "imagen/vengadores2.jpg",
    descripcion: "“Los héroes se unen para detener a Ultrón, una mente que quiere acabar con todo 🤖🔥.”",
    videoUrl: "video/peliculas/eraultron.mp4",
    categoria: "peliculas"
  },
  {
    titulo: "Avenger: Infinity War",
    imagen: "imagen/infinity3.jpg",
    descripcion: "“Los héroes se unen para detener a Thanos antes de que consiga todas las Gemas del Infinito 💎🔥.”",
    videoUrl: "video/peliculas/infinitywar.mp4",
    categoria: "peliculas"
  },
  {
    titulo: "Avenger: Endgame",
    imagen: "imagen/endgame4.jpg",
    descripcion: "“Los héroes enfrentan su batalla final contra Thanos para salvar el universo 💫🔥.”",
    videoUrl: "video/peliculas/endgame.mp4",
    categoria: "peliculas"
  },
  {
    titulo: "Iron Man",
    imagen: "imagen/iroman1.webp",
    descripcion: "“Tony Stark crea su primera armadura para escapar del peligro y se convierte en el legendario Iron Man 🦾⚡.”",
    videoUrl: "video/peliculas/iroman1.mp4",
    categoria: "peliculas"
  },
  {
    titulo: "Iron Man 2",
    imagen: "imagen/iroman2.jpg",
    descripcion: "“Nuevos enemigos, más poder… ¡y el doble de acción! 🔥⚡.”",
    videoUrl: "video/peliculas/iroman2.mp4",
    categoria: "peliculas"
  },
  {
    titulo: "Iron Man 3",
    imagen: "imagen/iroman3.webp",
    descripcion: "“Tony enfrenta su mayor prueba… sin su armadura💥💔.”",
    videoUrl: "video/peliculas/iroman3.mp4",
    categoria: "peliculas"
  },

  // ANIME...    
  {
    categoria: "anime",
    titulo: "KonoSuba: ¡Bendición a este maravilloso mundo!",
    descripcion: "Kazuma Satou ...",
    temporada: "Temporada 1",
    imagen: "imagen/konosuba2.jpg",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    episodios: [
      { titulo: "Capítulo 1", videoUrl: "video/anime/capitulo1.mp4" },
      { titulo: "Capítulo 2", videoUrl: "video/anime/capitulo2.mp4" },
      { titulo: "Capítulo 3", videoUrl: "video/anime/capitulo3.mp4" },
      // ...
    ]
  },
  {
    categoria: "pelicula",
    titulo: "Película XYZ",
    descripcion: "...",
    videoUrl: "https://example.com/pelicula.mp4",
    // No episodios porque es película
  },
  // Otros videos...



  {
    titulo: "KonoSuba: ¡Bendición a este Maravilloso Mundo!",
    imagen: "imagen/konosuba2.jpg",
    descripcion: "“Kazuma continúa metiéndose en líos y situaciones ridículas.🔥⚡.”",
    temporada: "Temporada 2",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    categoria: "anime"
  },
  {
    titulo: "KonoSuba: ¡Bendición a este Maravilloso Mundo!",
    imagen: "imagen/konosuba3.jpg",
    descripcion: "“Un viaje a la capital, donde Kazuma vivirá una temporada con la princesa Iris.🔥⚡.”",
    temporada: "Temporada 3",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    categoria: "anime"
  },

  // DRAMAS CHINO VARIADOS...
  {
    titulo: "Barajeo de Karma",
    imagen: "imagen/barajeo.jfif",
    descripcion: "“🔥⚡.”",
    temporada: "Temporada 1",
    videoUrl: "video/drama/Barajeo de Karma.mp4",
    categoria: "drama"
  },
  {
    titulo: "Corriste a un Genio Tech",
    imagen: "imagen/geniotech.jpg",
    descripcion: "“.”",
    temporada: "Temporada 1",
    videoUrl: "video/drama/Corriste a un Genio Tech.mp4",
    categoria: "drama"
  },
  {
    titulo: "Desperte de la Mentira",
    imagen: "imagen/despertedelamentira.jfif",
    descripcion: "“🔥⚡.”",
    temporada: "Temporada 1",
    videoUrl: "video/drama/Desperté de la mentira.mp4",
    categoria: "drama"
  },
  {
    titulo: "Dinero, armas feliz navidad",
    imagen: "imagen/dineroarmasfeliznavidad.jfif",
    descripcion: "“.”",
    temporada: "Temporada 1",
    videoUrl: "video/drama/dinero armas feliz navidad.mp4",
    categoria: "drama"
  },
  {
    titulo: "El mundo a mis pies",
    imagen: "imagen/mundoatuspies.jpg",
    descripcion: "“🔥⚡.”",
    temporada: "Temporada 1",
    videoUrl: "video/drama/El Mundo A Mis Pies.mp4",
    categoria: "drama"
  },
  {
    titulo: "Amor en la deuda de sangre",
    imagen: "imagen/año de la serpiente.jfif",
    descripcion: "“.”",
    temporada: "Temporada 1",
    videoUrl: "video/drama/amor en la deuda de sangre.mp4",
    categoria: "drama"
  },

  // SERIES CHINAS VARIADOS...
  {
    categoria: "series",
    titulo: "No soy un Robot",
    descripcion: " ...................",
    temporada: "Temporada 1",
    imagen: "imagen/konosuba2.jpg",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    episodios: [
      { titulo: "Capítulo 1", videoUrl: "video/series/yo no soy un robot/capitulo1.mp4" },
      { titulo: "Capítulo 2", videoUrl: "video/series/yo no soy un robot/capitulo2.mp4" },
      { titulo: "Capítulo 3", videoUrl: "video/series/yo no soy un robot/capitulo3.mp4" },
      // ...
    ]
  },
  {
    categoria: "series",
    titulo: "Propuesta laboral",
    descripcion: " ...........",
    temporada: "Temporada 1",
    imagen: "imagen/konosuba2.jpg",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    episodios: [
      { titulo: "Capítulo 1", videoUrl: "video/series/propuesta laboral/capitulo1.mp4" },
      { titulo: "Capítulo 2", videoUrl: "video/series/propuesta laboral/capitulo2.mp4" },
      { titulo: "Capítulo 3", videoUrl: "video/series/propuesta laboral/capitulo3.mp4" },
      // ...
    ]
  },

  // ENTRETENIMIENTO SERIES HBO NETFLIX DISNEY...
  {
    categoria: "entretenimiento",
    titulo: "La teoria del big bang",
    descripcion: " ...",
    temporada: "Temporada 1",
    imagen: "imagen/t1.webp",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    episodios: [
      { titulo: "Capítulo 1", videoUrl: "video/entretenimiento/la teoria del big bang/L4 T30R14 D3L B1G B4NG 1x01.mp4" },
      { titulo: "Capítulo 2", videoUrl: "video/entretenimiento/la teoria del big bang/L4 T30R14 D3L B1G B4NG 1x02.mp4" },
      { titulo: "Capítulo 3", videoUrl: "video/entretenimiento/la teoria del big bang/capitulo3.mp4" },
      // ...
    ]
  },
  {
    categoria: "entretenimiento",
    titulo: "La teoria del big bang T2",
    descripcion: " ...",
    temporada: "Temporada 2",
    imagen: "imagen/t2.webp",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    episodios: [
      { titulo: "Capítulo 1", videoUrl: "video/entretenimiento/la teoria del big bang/L4 T30R14 D3L B1G B4NG 1x01.mp4" },
      { titulo: "Capítulo 2", videoUrl: "video/entretenimiento/la teoria del big bang/L4 T30R14 D3L B1G B4NG 1x02.mp4" },
      { titulo: "Capítulo 3", videoUrl: "video/entretenimiento/la teoria del big bang/capitulo3.mp4" },
      // ...
    ]
  },
  {
    categoria: "entretenimiento",
    titulo: "La teoria del big bang T3",
    descripcion: " ...",
    temporada: "Temporada 3",
    imagen: "imagen/t3.webp",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    episodios: [
      { titulo: "Capítulo 1", videoUrl: "video/entretenimiento/la teoria del big bang/L4 T30R14 D3L B1G B4NG 1x01.mp4" },
      { titulo: "Capítulo 2", videoUrl: "video/entretenimiento/la teoria del big bang/L4 T30R14 D3L B1G B4NG 1x02.mp4" },
      { titulo: "Capítulo 3", videoUrl: "video/entretenimiento/la teoria del big bang/capitulo3.mp4" },
      // ...
    ]
  },
  {
    categoria: "entretenimiento",
    titulo: "La teoria del big bang T4",
    descripcion: " ...",
    temporada: "Temporada 4",
    imagen: "imagen/t4.webp",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    episodios: [
      { titulo: "Capítulo 1", videoUrl: "video/entretenimiento/la teoria del big bang/L4 T30R14 D3L B1G B4NG 1x01.mp4" },
      { titulo: "Capítulo 2", videoUrl: "video/entretenimiento/la teoria del big bang/L4 T30R14 D3L B1G B4NG 1x02.mp4" },
      { titulo: "Capítulo 3", videoUrl: "video/entretenimiento/la teoria del big bang/capitulo3.mp4" },
      // ...
    ]
  },
  {
    categoria: "entretenimiento",
    titulo: "La teoria del big bang T5",
    descripcion: " ...",
    temporada: "Temporada 5",
    imagen: "imagen/t5.webp",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    episodios: [
      { titulo: "Capítulo 1", videoUrl: "video/entretenimiento/la teoria del big bang/L4 T30R14 D3L B1G B4NG 1x01.mp4" },
      { titulo: "Capítulo 2", videoUrl: "video/entretenimiento/la teoria del big bang/L4 T30R14 D3L B1G B4NG 1x02.mp4" },
      { titulo: "Capítulo 3", videoUrl: "video/entretenimiento/la teoria del big bang/capitulo3.mp4" },
      // ...
    ]
  },
  {
    categoria: "entretenimiento",
    titulo: "La teoria del big bang T6",
    descripcion: " ...",
    temporada: "Temporada 6",
    imagen: "imagen/t6.jpg",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    episodios: [
      { titulo: "Capítulo 1", videoUrl: "video/entretenimiento/la teoria del big bang/L4 T30R14 D3L B1G B4NG 1x01.mp4" },
      { titulo: "Capítulo 2", videoUrl: "video/entretenimiento/la teoria del big bang/L4 T30R14 D3L B1G B4NG 1x02.mp4" },
      { titulo: "Capítulo 3", videoUrl: "video/entretenimiento/la teoria del big bang/capitulo3.mp4" },
      // ...
    ]
  },
  {
    categoria: "entretenimiento",
    titulo: "La teoria del big bang T7",
    descripcion: " ...",
    temporada: "Temporada 7",
    imagen: "imagen/t7.webp",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    episodios: [
      { titulo: "Capítulo 1", videoUrl: "video/entretenimiento/la teoria del big bang/L4 T30R14 D3L B1G B4NG 1x01.mp4" },
      { titulo: "Capítulo 2", videoUrl: "video/entretenimiento/la teoria del big bang/L4 T30R14 D3L B1G B4NG 1x02.mp4" },
      { titulo: "Capítulo 3", videoUrl: "video/entretenimiento/la teoria del big bang/capitulo3.mp4" },
      // ...
    ]
  },
  {
    categoria: "entretenimiento",
    titulo: "La teoria del big bang T8",
    descripcion: " ...",
    temporada: "Temporada 8",
    imagen: "imagen/t8.webp",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    episodios: [
      { titulo: "Capítulo 1", videoUrl: "video/entretenimiento/la teoria del big bang/L4 T30R14 D3L B1G B4NG 1x01.mp4" },
      { titulo: "Capítulo 2", videoUrl: "video/entretenimiento/la teoria del big bang/L4 T30R14 D3L B1G B4NG 1x02.mp4" },
      { titulo: "Capítulo 3", videoUrl: "video/entretenimiento/la teoria del big bang/capitulo3.mp4" },
      // ...
    ]
  },
  {
    categoria: "entretenimiento",
    titulo: "La teoria del big bang T9",
    descripcion: " ...",
    temporada: "Temporada 9",
    imagen: "imagen/t9.jpg",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    episodios: [
      { titulo: "Capítulo 1", videoUrl: "video/entretenimiento/la teoria del big bang/L4 T30R14 D3L B1G B4NG 1x01.mp4" },
      { titulo: "Capítulo 2", videoUrl: "video/entretenimiento/la teoria del big bang/L4 T30R14 D3L B1G B4NG 1x02.mp4" },
      { titulo: "Capítulo 3", videoUrl: "video/entretenimiento/la teoria del big bang/capitulo3.mp4" },
      // ...
    ]
  },
  {
    categoria: "entretenimiento",
    titulo: "La teoria del big bang T10",
    descripcion: " ...",
    temporada: "Temporada 10",
    imagen: "imagen/t10.jpg",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    episodios: [
      { titulo: "Capítulo 1", videoUrl: "video/entretenimiento/la teoria del big bang/L4 T30R14 D3L B1G B4NG 1x01.mp4" },
      { titulo: "Capítulo 2", videoUrl: "video/entretenimiento/la teoria del big bang/L4 T30R14 D3L B1G B4NG 1x02.mp4" },
      { titulo: "Capítulo 3", videoUrl: "video/entretenimiento/la teoria del big bang/capitulo3.mp4" },
      // ...
    ]
  },
  {
    categoria: "entretenimiento",
    titulo: "La teoria del big bang T11",
    descripcion: " ...",
    temporada: "Temporada 11",
    imagen: "imagen/t11.jpg",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    episodios: [
      { titulo: "Capítulo 1", videoUrl: "video/entretenimiento/la teoria del big bang/L4 T30R14 D3L B1G B4NG 1x01.mp4" },
      { titulo: "Capítulo 2", videoUrl: "video/entretenimiento/la teoria del big bang/L4 T30R14 D3L B1G B4NG 1x02.mp4" },
      { titulo: "Capítulo 3", videoUrl: "video/entretenimiento/la teoria del big bang/capitulo3.mp4" },
      // ...
    ]
  },
  {
    categoria: "entretenimiento",
    titulo: "La teoria del big bang T12",
    descripcion: " ...",
    temporada: "Temporada 12",
    imagen: "imagen/t12.jpg",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    episodios: [
      { titulo: "Capítulo 1", videoUrl: "video/entretenimiento/la teoria del big bang/L4 T30R14 D3L B1G B4NG 1x01.mp4" },
      { titulo: "Capítulo 2", videoUrl: "video/entretenimiento/la teoria del big bang/L4 T30R14 D3L B1G B4NG 1x02.mp4" },
      { titulo: "Capítulo 3", videoUrl: "video/entretenimiento/la teoria del big bang/capitulo3.mp4" },
      // ...
    ]
  },
  {
    categoria: "entretenimiento",
    titulo: "Peace Maker",
    descripcion: " ...",
    temporada: "Temporada 1",
    imagen: "imagen/peacet1.webp",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    episodios: [
      { titulo: "Capítulo 1", videoUrl: "video/entretenimiento/peacemaker/capitulo1.mp4" },
      { titulo: "Capítulo 2", videoUrl: "video/entretenimiento/peacemaker/capitulo2.mp4" },
      { titulo: "Capítulo 3", videoUrl: "video/entretenimiento/peacemaker/capitulo3.mp4" },
      { titulo: "Capítulo 4", videoUrl: "video/entretenimiento/peacemaker/capitulo4.mp4" },
      { titulo: "Capítulo 5", videoUrl: "video/entretenimiento/peacemaker/capitulo5.mp4" },
      { titulo: "Capítulo 6", videoUrl: "video/entretenimiento/peacemaker/capitulo6.mp4" },
      { titulo: "Capítulo 7", videoUrl: "video/entretenimiento/peacemaker/capitulo7.mp4" },
      { titulo: "Capítulo 8", videoUrl: "video/entretenimiento/peacemaker/capitulo8.mp4" },
      { titulo: "Capítulo 9", videoUrl: "video/entretenimiento/peacemaker/capitulo9.mp4" },
      { titulo: "Capítulo 10", videoUrl: "video/entretenimiento/peacemaker/capitulo10.mp4" },
      // ...
    ]
  },
  {
    categoria: "entretenimiento",
    titulo: "Peace Maker",
    descripcion: " ...",
    temporada: "Temporada 1",
    imagen: "imagen/peacet2.webp",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    episodios: [
      { titulo: "Capítulo 1", videoUrl: "video/entretenimiento/peacemaker/capitulo1.mp4" },
      { titulo: "Capítulo 2", videoUrl: "video/entretenimiento/peacemaker/capitulo2.mp4" },
      { titulo: "Capítulo 3", videoUrl: "video/entretenimiento/peacemaker/capitulo3.mp4" },
      { titulo: "Capítulo 4", videoUrl: "video/entretenimiento/peacemaker/capitulo4.mp4" },
      { titulo: "Capítulo 5", videoUrl: "video/entretenimiento/peacemaker/capitulo5.mp4" },
      { titulo: "Capítulo 6", videoUrl: "video/entretenimiento/peacemaker/capitulo6.mp4" },
      { titulo: "Capítulo 7", videoUrl: "video/entretenimiento/peacemaker/capitulo7.mp4" },
      { titulo: "Capítulo 8", videoUrl: "video/entretenimiento/peacemaker/capitulo8.mp4" },
      { titulo: "Capítulo 9", videoUrl: "video/entretenimiento/peacemaker/capitulo9.mp4" },
      { titulo: "Capítulo 10", videoUrl: "video/entretenimiento/peacemaker/capitulo10.mp4" },
      // ...
    ]
  },


];

const videoCardsContainer = document.querySelector('.video-cards');
const menuButtons = document.querySelectorAll('.menu-button');

function mostrarPeliculasPorCategoria(categoria) {
  videoCardsContainer.innerHTML = '';

  const peliculasFiltradas = peliculas.filter(pelicula => pelicula.categoria === categoria);

  peliculasFiltradas.forEach(pelicula => {
    const card = document.createElement('div');
    card.classList.add('card');

    // 🔹 Efecto hover y texto “imagen de referencia”
    card.innerHTML = `
      <div class="card-image-container">
        <img src="${pelicula.imagen}" alt="${pelicula.titulo}" loading="lazy" class="fade-in"/>
        <span class="hover-text">Imagen de referencia</span>
      </div>
      <div class="card-info">
        <h3>${pelicula.titulo}</h3>
        <p>${pelicula.descripcion}</p>
      </div>
    `;

    // 🔹 Efecto de aparición de tarjeta
    card.style.opacity = '0';
    setTimeout(() => {
      card.style.transition = 'opacity 0.6s ease';
      card.style.opacity = '1';
    }, 50);

    card.addEventListener('click', () => openModal(pelicula));

    videoCardsContainer.appendChild(card);
  });
}

// Agregar evento a los botones del menú para filtrar categorías
menuButtons.forEach(button => {
  button.addEventListener('click', () => {
    const categoria = button.getAttribute('data-category');
    mostrarPeliculasPorCategoria(categoria);
  });
});

// Mostrar películas por defecto al cargar la página
mostrarPeliculasPorCategoria('peliculas');

// Ajuste responsivo forzado para .video-cards (5 -> 4 -> 2 -> 1)
(function() {
  const container = document.querySelector('.video-cards');
  if (!container) return;

  function ajustarColumnas() {
    const w = window.innerWidth;
    if (w <= 450) {
      container.style.gridTemplateColumns = '1fr';
    } else if (w <= 700) {
      container.style.gridTemplateColumns = 'repeat(2, 1fr)';
    } else if (w <= 1000) {
      container.style.gridTemplateColumns = 'repeat(4, 1fr)';
    } else {
      container.style.gridTemplateColumns = 'repeat(5, 1fr)';
    }
  }

  window.addEventListener('resize', ajustarColumnas);
  window.addEventListener('DOMContentLoaded', ajustarColumnas);
  ajustarColumnas();
})();

// Función para reproducir episodio por índice
function reproducirEpisodio(pelicula, index) {
  if (!pelicula.episodios || index < 0 || index >= pelicula.episodios.length) return;
  episodioActual = index;
  const episodio = pelicula.episodios[index];
  modalVideo.src = episodio.videoUrl;
  modalTitle.textContent = `${pelicula.titulo} - ${episodio.titulo}`;
  modalVideo.play();
}

// Variable global para el episodio actual
let episodioActual = 0;

if (modalVideo) {
  // Crear contenedor para controles
  const navContainer = document.createElement('div');
  navContainer.classList.add('nav-container');

  // Crear botones
  const btnAnterior = document.createElement('button');
  btnAnterior.textContent = '⏮️ Anterior';
  btnAnterior.classList.add('nav-btn');

  const btnSiguiente = document.createElement('button');
  btnSiguiente.textContent = '⏭️ Siguiente';
  btnSiguiente.classList.add('nav-btn');

  const btnFullscreen = document.createElement('button');
  btnFullscreen.textContent = '⛩️ Pantalla Completa';
  btnFullscreen.classList.add('nav-btn');

  // Añadir botones al contenedor
  navContainer.appendChild(btnAnterior);
  navContainer.appendChild(btnFullscreen);
  navContainer.appendChild(btnSiguiente);

  // Insertar contenedor justo después del video
  modalVideo.insertAdjacentElement('afterend', navContainer);

  // Función para cambiar episodio
  function reproducirEpisodio(pelicula, index) {
    if (!pelicula.episodios || index < 0 || index >= pelicula.episodios.length) return;
    episodioActual = index;
    const episodio = pelicula.episodios[index];
    modalVideo.src = episodio.videoUrl;
    modalVideo.play();
    // Cambiar título modal si quieres (opcional)
    const modalTitle = document.getElementById('modal-title');
    if (modalTitle) {
      modalTitle.textContent = `${pelicula.titulo} - ${episodio.titulo}`;
    }
  }

  // Eventos botones siguiente y anterior
  btnSiguiente.addEventListener('click', () => {
    if (window.peliculaActual?.episodios) {
      const siguiente = episodioActual + 1;
      if (siguiente < window.peliculaActual.episodios.length) {
        reproducirEpisodio(window.peliculaActual, siguiente);
      }
    }
  });

  btnAnterior.addEventListener('click', () => {
    if (window.peliculaActual?.episodios) {
      const anterior = episodioActual - 1;
      if (anterior >= 0) {
        reproducirEpisodio(window.peliculaActual, anterior);
      }
    }
  });

  // Evento para reproducir siguiente automáticamente
  modalVideo.addEventListener('ended', () => {
    if (window.peliculaActual?.episodios) {
      const siguiente = episodioActual + 1;
      if (siguiente < window.peliculaActual.episodios.length) {
        reproducirEpisodio(window.peliculaActual, siguiente);
      }
    }
  });

  // Evento pantalla completa
  btnFullscreen.addEventListener('click', () => {
    if (!document.fullscreenElement) {
      if (modalVideo.requestFullscreen) {
        modalVideo.requestFullscreen();
      } else if (modalVideo.webkitRequestFullscreen) {
        modalVideo.webkitRequestFullscreen(); // Safari
      } else if (modalVideo.msRequestFullscreen) {
        modalVideo.msRequestFullscreen(); // IE/Edge
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen(); // Safari
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen(); // IE/Edge
      }
    }
  });

} else {
  console.error('No se encontró el elemento video con id "modal-video"');
}



// Modificar openModal para actualizar episodios y controles
const originalOpenModal = openModal;
openModal = function(pelicula) {
  window.peliculaActual = pelicula;
  originalOpenModal(pelicula);

  if (pelicula.episodios && pelicula.episodios.length > 0) {
    episodioActual = 0;
    reproducirEpisodio(pelicula, episodioActual);
    // Mostrar botones
    const navContainer = document.querySelector('.nav-container');
    if (navContainer) navContainer.style.display = 'flex';
  } else {
    // Si no hay episodios, ocultar botones
    const navContainer = document.querySelector('.nav-container');
    if (navContainer) navContainer.style.display = 'none';
  }
};


//---------------------------------------------
// BUSCADOR
//---------------------------------------------
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const cardsContainer = document.querySelector(".video-cards");

// FUNCIÓN BUSCAR
function searchVideos() {
    const text = searchInput.value.toLowerCase().trim();
    const cards = document.querySelectorAll(".card");

    let found = false;

    cards.forEach(card => {
        const title = card.querySelector("h3").textContent.toLowerCase();

        if (title.includes(text)) {
            card.style.display = "block";
            found = true;
        } else {
            card.style.display = "none";
        }
    });

    // Si no encontró nada → mostrar mensaje animado
    showNoResults(!found);
}

// FUNCIÓN MOSTRAR / OCULTAR MENSAJE “NO HAY PELICULA”
function showNoResults(show) {
    let noResult = document.getElementById("no-result");

    if (!noResult) {
        noResult = document.createElement("div");
        noResult.id = "no-result";
        noResult.className = "no-result";
        noResult.innerHTML = "😭 No encontramos tu película 😭";
        cardsContainer.appendChild(noResult);
    }

    noResult.style.display = show ? "flex" : "none";
}

(() => {

// EVENTOS
searchButton.addEventListener("click", searchVideos);

searchInput.addEventListener("keyup", (e) => {
    if (e.key === "Enter") searchVideos();
});

// MENU HAMBURGUESA
const hamburgerBtn = document.getElementById("hamburguesa-btn");
const menuList = document.querySelector(".menu-list");

hamburgerBtn.addEventListener("click", () => {
  const isOpen = menuList.classList.toggle("active");

  // Cambiar icono
  hamburgerBtn.textContent = isOpen ? "✖" : "☰";

  // Animación de rotación
  hamburgerBtn.classList.toggle("active", isOpen);
});

})(); 
}); // <-- CIERRE CORRECTO
