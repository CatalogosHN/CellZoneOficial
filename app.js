/* ===========================
   CellZoneHN - Prototype UI
   Home + Product Detail (SPA)
   =========================== */

const $ = (s, root=document) => root.querySelector(s);
const $$ = (s, root=document) => [...root.querySelectorAll(s)];

const IMG_PLACEHOLDER = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";

const state = {
  tab: "favoritos", // favoritos | nuevos | vistos
  query: "",
  cartCount: 1,
  lastViewed: [],
  favorites: new Set([1,2])
};

const products = [
  {
    "id": 1,
    "badge": "Nuevo",
    "name": "iPhone 15 Pro Max 256GB 86% ENVIOS GRATIS TODO HONDURAS",
    "brand": "Apple",
    "category": "Tecnologia y Juegos",
    "sku": "APPLE-IPHONE-15-PRO-MAX-256GB-86-ENV-1",
    "price": 18000.0,
    "gift": "INCLUYE: VIDRIO PARA CAMARAS COMPLETO DE DOBLE REFUERZO",
    "specs": {
      "Almacenamiento": {
        "Almacenamiento": "256GB",
        "Memoria Externa": "—"
      },
      "Rendimiento": {
        "Memoria RAM": "—",
        "Procesador": "—",
        "Sistema Operativo": "—"
      },
      "Potencia": {
        "Capacidad de Batería": "—",
        "Watts": "—"
      },
      "General": {
        "Condición": "86%",
        "Garantía": "Según publicación",
        "Categoría": "Tecnologia y Juegos"
      }
    },
    "shipping": [
      "Envío gratis a todo Honduras (según publicación).",
      "Para confirmar existencias, escribe por WhatsApp."
    ],
    "rating": 0,
    "images": [
      "images/ip15pm1.jpg",
      "images/ip15pm2.jpg",
      "images/ip15pm3.jpg",
      "images/ip15pm4.jpg",
      "images/ip15pm5.jpg",
      "images/ip15pm6.jpg",
      "images/ip15pm7.jpg"
    ],
    "description": [
      "⭐ INCLUYE: VIDRIO PARA CAMARAS COMPLETO DE DOBLE REFUERZO",
      "⭐ CARGADOR 20W CARGA RAPIDA GRATIS",
      "⭐ VIDRIO PANTALLA Y SI NECESITA INSTALACIÓN ES GRATIS"
    ]
  },
  {
    "id": 2,
    "badge": "Nuevo",
    "name": "iPhone 8 Plus 256GB 100% BATERIA 10/10 DISPONIBLE EN 10 DIAS",
    "brand": "Apple",
    "category": "iPhone",
    "sku": "APPLE-IPHONE-8-PLUS-256GB-100-BATERI-2",
    "price": 3600.0,
    "gift": "Vidrio Templado pantalla, Cargador.",
    "specs": {
      "Almacenamiento": {
        "Almacenamiento": "256GB",
        "Memoria Externa": "—"
      },
      "Rendimiento": {
        "Memoria RAM": "—",
        "Procesador": "—",
        "Sistema Operativo": "—"
      },
      "Potencia": {
        "Capacidad de Batería": "—",
        "Watts": "—"
      },
      "General": {
        "Condición": "10/10",
        "Garantía": "Según publicación",
        "Categoría": "iPhone"
      }
    },
    "shipping": [
      "Envíos a todo Honduras.",
      "Disponibilidad estimada: 10 días.",
      "Para confirmar existencias, escribe por WhatsApp."
    ],
    "rating": 0,
    "images": [
      "images/iphone84.jpg",
      "images/iphone81.jpg",
      "images/iphone82.jpg",
      "images/iphone83.jpg",
      "images/iphone85.jpg",
      "images/iphone86.jpg",
      "images/iphone87.jpg",
      "images/iphone88.jpg"
    ],
    "description": [
      "INCLUYE:",
      "Vidrio Templado pantalla, Cargador.",
      "Cobertor anticaidas reforzado."
    ]
  },
  {
    "id": 3,
    "badge": "Nuevo",
    "name": "Xiaomi Redmi Note 12 Pro 5G 256GB + FocoCamara GRATIS",
    "brand": "Xiaomi",
    "category": "Android",
    "sku": "XIAOMI-XIAOMI-REDMI-NOTE-12-PRO-5G-25-3",
    "price": 2300.0,
    "gift": "ENVIO GRATIS EN TODO HONDURAS",
    "specs": {
      "Almacenamiento": {
        "Almacenamiento": "256GB",
        "Memoria Externa": "—"
      },
      "Rendimiento": {
        "Memoria RAM": "—",
        "Procesador": "—",
        "Sistema Operativo": "—"
      },
      "Potencia": {
        "Capacidad de Batería": "—",
        "Watts": "—"
      },
      "General": {
        "Condición": "—",
        "Garantía": "Según publicación",
        "Categoría": "Android"
      }
    },
    "shipping": [
      "Envíos a todo Honduras.",
      "Para confirmar existencias, escribe por WhatsApp."
    ],
    "rating": 0,
    "images": [
      "images/redmix1.jpg",
      "images/redmix2.jpg",
      "images/redmix3.jpg",
      "images/redmix4.jpg",
      "images/redmix5.jpg",
      "images/redmix6.jpg",
      "images/redmix7.jpg",
      "images/redmix8.jpg",
      "images/redmix9.jpg"
    ],
    "description": [
      "ENVIO GRATIS EN TODO HONDURAS",
      "CON SU OTHERBOX GRATIS",
      "CARGADOR GRATIS"
    ]
  },
  {
    "id": 4,
    "badge": "Nuevo",
    "name": "Nokia G11 Plus 64GB con cargador",
    "brand": "Nokia",
    "category": "Android",
    "sku": "NOKIA-NOKIA-G11-PLUS-64GB-CON-CARGAD-4",
    "price": 1500.0,
    "gift": "ENVIO TOTALMENTE GRATIS EN TODO HONDURAS",
    "specs": {
      "Almacenamiento": {
        "Almacenamiento": "64GB",
        "Memoria Externa": "—"
      },
      "Rendimiento": {
        "Memoria RAM": "—",
        "Procesador": "—",
        "Sistema Operativo": "—"
      },
      "Potencia": {
        "Capacidad de Batería": "—",
        "Watts": "—"
      },
      "General": {
        "Condición": "—",
        "Garantía": "Según publicación",
        "Categoría": "Android"
      }
    },
    "shipping": [
      "Envíos a todo Honduras.",
      "Para confirmar existencias, escribe por WhatsApp."
    ],
    "rating": 0,
    "images": [
      "images/nokiag1.jpg",
      "images/nokiag2.jpg",
      "images/nokiag3.jpg",
      "images/nokiag4.jpg",
      "images/nokiag5.jpg",
      "images/nokiag6.jpg",
      "images/nokiag7.jpg",
      "images/nokiag8.jpg"
    ],
    "description": [
      "ENVIO TOTALMENTE GRATIS EN TODO HONDURAS",
      "CARGADOR GRATIS Y AURICULARES",
      "NITIDO EN BUENAS CONDICIONES"
    ]
  },
  {
    "id": 5,
    "badge": "",
    "name": "iPhone 14 Pro Max 256GB 100% BATERIA",
    "brand": "Apple",
    "category": "iPhone",
    "sku": "APPLE-IPHONE-14-PRO-MAX-256GB-100-BA-5",
    "price": 14500.0,
    "gift": "ENVIO, VIDRIO DE CAMARAS GRATIS",
    "specs": {
      "Almacenamiento": {
        "Almacenamiento": "256GB",
        "Memoria Externa": "—"
      },
      "Rendimiento": {
        "Memoria RAM": "—",
        "Procesador": "—",
        "Sistema Operativo": "—"
      },
      "Potencia": {
        "Capacidad de Batería": "—",
        "Watts": "—"
      },
      "General": {
        "Condición": "100%",
        "Garantía": "Según publicación",
        "Categoría": "iPhone"
      }
    },
    "shipping": [
      "Envíos a todo Honduras.",
      "Para confirmar existencias, escribe por WhatsApp."
    ],
    "rating": 0,
    "images": [
      "images/ip14pm1.jpg",
      "images/ip14pm2.jpg",
      "images/ip14pm3.jpg",
      "images/ip14pm4.jpg",
      "images/ip14pm5.jpg",
      "images/ip14pm6.jpg"
    ],
    "description": [
      "ENVIO, VIDRIO DE CAMARAS GRATIS",
      "CARGADOR CARGA RAPIDA 20W GRATIS",
      "VIDRIO PANTALLA GRATIS"
    ]
  },
  {
    "id": 6,
    "badge": "",
    "name": "Samsung S24 Ultra 256GB 10/10",
    "brand": "Samsung",
    "category": "Android",
    "sku": "SAMSUNG-SAMSUNG-S24-ULTRA-256GB-10-10-6",
    "price": 16899.0,
    "gift": "Vidrio Full pantalla GRATIS.",
    "specs": {
      "Almacenamiento": {
        "Almacenamiento": "256GB",
        "Memoria Externa": "—"
      },
      "Rendimiento": {
        "Memoria RAM": "—",
        "Procesador": "—",
        "Sistema Operativo": "—"
      },
      "Potencia": {
        "Capacidad de Batería": "—",
        "Watts": "—"
      },
      "General": {
        "Condición": "10/10",
        "Garantía": "Según publicación",
        "Categoría": "Android"
      }
    },
    "shipping": [
      "Envíos a todo Honduras.",
      "Para confirmar existencias, escribe por WhatsApp."
    ],
    "rating": 0,
    "images": [
      "images/s24x1.jpg",
      "images/s24x2.jpg",
      "images/s24x3.jpg",
      "images/s24x4.jpg",
      "images/s24x5.jpg",
      "images/s24x6.jpg"
    ],
    "description": [
      "INCLUYE:",
      "Vidrio Full pantalla GRATIS.",
      "Cobertor anticaidas reforzado GRATIS.",
      "Si quiere cargador 20w +140 lps"
    ]
  },
  {
    "id": 7,
    "badge": "",
    "name": "Vivo x200 Pro 1TB 97% 10/10",
    "brand": "Vivo",
    "category": "Android",
    "sku": "VIVO-VIVO-X200-PRO-1TB-97-10-10-7",
    "price": 40000.0,
    "gift": "Vidrio Templado Pantalla, Cargador 90W Original.",
    "specs": {
      "Almacenamiento": {
        "Almacenamiento": "1TB",
        "Memoria Externa": "—"
      },
      "Rendimiento": {
        "Memoria RAM": "—",
        "Procesador": "—",
        "Sistema Operativo": "—"
      },
      "Potencia": {
        "Capacidad de Batería": "—",
        "Watts": "—"
      },
      "General": {
        "Condición": "10/10",
        "Garantía": "Según publicación",
        "Categoría": "Android"
      }
    },
    "shipping": [
      "Envíos a todo Honduras.",
      "Para confirmar existencias, escribe por WhatsApp."
    ],
    "rating": 0,
    "images": [
      "images/x2001.png",
      "images/x2002.png",
      "images/x2003.png",
      "images/x2004.png"
    ],
    "description": [
      "INCLUYE:",
      "Vidrio Templado Pantalla, Cargador 90W Original.",
      "Cobertor Anticaidas Resistente y cubre incluso Camaras."
    ]
  },
  {
    "id": 8,
    "badge": "",
    "name": "Infinix GT20 Pro 256GB 24RAM 9.5/10",
    "brand": "Infinix",
    "category": "Android",
    "sku": "INFINIX-INFINIX-GT20-PRO-256GB-24RAM-9-8",
    "price": 6600.0,
    "gift": "Vidrio de Pantalla, Cargador Original de 45W",
    "specs": {
      "Almacenamiento": {
        "Almacenamiento": "256GB",
        "Memoria Externa": "—"
      },
      "Rendimiento": {
        "Memoria RAM": "24GB",
        "Procesador": "—",
        "Sistema Operativo": "—"
      },
      "Potencia": {
        "Capacidad de Batería": "—",
        "Watts": "—"
      },
      "General": {
        "Condición": "9.5/10",
        "Garantía": "Según publicación",
        "Categoría": "Android"
      }
    },
    "shipping": [
      "Envíos a todo Honduras.",
      "Para confirmar existencias, escribe por WhatsApp."
    ],
    "rating": 0,
    "images": [
      "images/gt204.png",
      "images/gt202.png",
      "images/gt203.png",
      "images/gt201.png",
      "images/gt205.jpg",
      "images/gt206.jpg"
    ],
    "description": [
      "INCLUYE:",
      "Vidrio de Pantalla, Cargador Original de 45W",
      "Cobertor Resistente de los gruesos."
    ]
  },
  {
    "id": 9,
    "badge": "",
    "name": "Samsung Tab S10 FE 128GB 6 MESES DE GARANTIA NUEVA CON SU S-PEN NUEVA DE CAJA",
    "brand": "Samsung",
    "category": "Android",
    "sku": "SAMSUNG-SAMSUNG-TAB-S10-FE-128GB-6-MES-9",
    "price": 10200.0,
    "gift": "Rendimiento superior y fluido, ideal para trabajo, estudio y entretenimiento con su procesador optimizado.",
    "specs": {
      "Almacenamiento": {
        "Almacenamiento": "128GB",
        "Memoria Externa": "—"
      },
      "Rendimiento": {
        "Memoria RAM": "—",
        "Procesador": "—",
        "Sistema Operativo": "—"
      },
      "Potencia": {
        "Capacidad de Batería": "—",
        "Watts": "—"
      },
      "General": {
        "Condición": "—",
        "Garantía": "6 meses",
        "Categoría": "Android"
      }
    },
    "shipping": [
      "Envíos a todo Honduras.",
      "Garantía: 6 meses.",
      "Para confirmar existencias, escribe por WhatsApp."
    ],
    "rating": 0,
    "images": [
      "images/tabs101.jpg",
      "images/tabs102.jpg",
      "images/tabs103.jpg"
    ],
    "description": [
      "Rendimiento superior y fluido, ideal para trabajo, estudio y entretenimiento con su procesador optimizado.",
      "Incluye S-Pen original, perfecta para tomar notas, dibujar y trabajar con precisión profesional.",
      "Garantía de 1 año y totalmente nueva en caja, ofreciéndote seguridad, estilo y tecnología Samsung de última generación."
    ]
  },
  {
    "id": 10,
    "badge": "Nuevo",
    "name": "Smart TV Hisense 58 pulgadas 4K ENVIO GRATIS TODO HONDURAS NUEVO SELLADO‼️",
    "brand": "Hisense",
    "category": "TV y Smart TV",
    "sku": "HISENSE-SMART-TV-HISENSE-58-PULGADAS-4-10",
    "price": 10500.0,
    "gift": "Pantalla gigante de 58 pulgadas con resolución 4K Ultra HD 📺✨. Vive el fútbol, películas y juegos con colores más vivos y detalles que impresionan.",
    "specs": {
      "Almacenamiento": {
        "Almacenamiento": "—",
        "Memoria Externa": "—"
      },
      "Rendimiento": {
        "Memoria RAM": "—",
        "Procesador": "—",
        "Sistema Operativo": "—"
      },
      "Potencia": {
        "Capacidad de Batería": "—",
        "Watts": "—"
      },
      "General": {
        "Condición": "—",
        "Garantía": "Según publicación",
        "Categoría": "TV y Smart TV"
      }
    },
    "shipping": [
      "Envío gratis a todo Honduras (según publicación).",
      "Para confirmar existencias, escribe por WhatsApp."
    ],
    "rating": 0,
    "images": [
      "images/hiss1.jpg",
      "images/hiss2.jpg",
      "images/hiss3.jpg"
    ],
    "description": [
      "Pantalla gigante de 58 pulgadas con resolución 4K Ultra HD 📺✨. Vive el fútbol, películas y juegos con colores más vivos y detalles que impresionan.",
      "Tecnología Dolby Vision + Escalador 4K con IA 🤖🎥 — imagen más brillante, suave y realista. ¡La misma marca patrocinadora oficial de la FIFA!",
      "Producto nuevo y sellado, modelo 2024 ⭐. Envío GRATIS a todo Honduras 🇭🇳🚚. ¡Llévatela hoy y convierte tu sala en un cine!"
    ]
  },
  {
    "id": 11,
    "badge": "Nuevo",
    "name": "TV Led Tekno 32 pulgadas ENVIO GRATIS TODO HONDURAS NUEVO SELLADO",
    "brand": "Tekno",
    "category": "TV y Smart TV",
    "sku": "TEKNO-TV-LED-TEKNO-32-PULGADAS-ENVIO-11",
    "price": 2500.0,
    "gift": "Pantalla de 32 pulgadas con colores vivos y excelente claridad 📺✨. Ideal para cuartos, salas pequeñas o negocios. ¡Se mira nítida desde cualquier ángulo!",
    "specs": {
      "Almacenamiento": {
        "Almacenamiento": "—",
        "Memoria Externa": "—"
      },
      "Rendimiento": {
        "Memoria RAM": "—",
        "Procesador": "—",
        "Sistema Operativo": "—"
      },
      "Potencia": {
        "Capacidad de Batería": "—",
        "Watts": "—"
      },
      "General": {
        "Condición": "—",
        "Garantía": "Según publicación",
        "Categoría": "TV y Smart TV"
      }
    },
    "shipping": [
      "Envío gratis a todo Honduras (según publicación).",
      "Para confirmar existencias, escribe por WhatsApp."
    ],
    "rating": 0,
    "images": [
      "images/tekk1.jpg",
      "images/tekk2.jpg"
    ],
    "description": [
      "Pantalla de 32 pulgadas con colores vivos y excelente claridad 📺✨. Ideal para cuartos, salas pequeñas o negocios. ¡Se mira nítida desde cualquier ángulo!",
      "Con 2 HDMI + 2 USB 🔌⚡ perfectos para conectar Roku, decodificadores, consolas, memorias USB y mucho más. ¡Listo para disfrutar al instante!",
      "Producto nuevo, sellado y garantizado 🆕📦. Incluye envío GRATIS a todo Honduras 🚚🇭🇳. ¡Aprovecha antes que se agoten!"
    ]
  },
  {
    "id": 12,
    "badge": "Nuevo",
    "name": "Smart TV Hisense 32 Pulgadas NUEVO SELLADO GARANTIA 6 MESES ENVIO GRATIS TODO HONDURAS‼️",
    "brand": "Hisense",
    "category": "TV y Smart TV",
    "sku": "HISENSE-SMART-TV-HISENSE-32-PULGADAS-N-12",
    "price": 3800.0,
    "gift": "Smart TV Hisense 32” con sistema VIDAA: rápido, moderno e ideal para Netflix, YouTube, Prime Video y más 📺✨. ¡Colores vivos y audio nítido!",
    "specs": {
      "Almacenamiento": {
        "Almacenamiento": "—",
        "Memoria Externa": "—"
      },
      "Rendimiento": {
        "Memoria RAM": "—",
        "Procesador": "—",
        "Sistema Operativo": "—"
      },
      "Potencia": {
        "Capacidad de Batería": "—",
        "Watts": "—"
      },
      "General": {
        "Condición": "—",
        "Garantía": "Según publicación",
        "Categoría": "TV y Smart TV"
      }
    },
    "shipping": [
      "Envío gratis a todo Honduras (según publicación).",
      "Para confirmar existencias, escribe por WhatsApp."
    ],
    "rating": 0,
    "images": [
      "images/hissx1.jpg",
      "images/hissx2.jpg",
      "images/hissx3.jpg"
    ],
    "description": [
      "Smart TV Hisense 32” con sistema VIDAA: rápido, moderno e ideal para Netflix, YouTube, Prime Video y más 📺✨. ¡Colores vivos y audio nítido!",
      "Producto nuevo, sellado de fábrica 📦💯. Incluye 6 meses de garantía para que compres con total confianza. Perfecta para cuarto o sala.",
      "Envío GRATIS a todo Honduras 🇭🇳🚚. Fácil de instalar, ligera y lista para usar. ¡Conéctala y disfruta tu contenido favorito al instante!"
    ]
  }
];

function money(n){
  const s = Math.round(n).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return `L${s}.00`;
}

function setWhatsAppLink(){
  const phone = "50400000000"; // <-- cambialo a tu número real
  const msg = encodeURIComponent("Hola, quiero información de un producto en CellZoneHN.");
  const url = `https://api.whatsapp.com/send/?phone=${phone}&text=${msg}`;
  $("#waFloat").href = url;
  $("#waBadge").textContent = String(state.cartCount);
}

/* -------- Router -------- */
function navigate(){
  const hash = location.hash || "#/";
  const app = $("#app");

  if(hash.startsWith("#/product/")){
    const id = parseInt(hash.split("/")[2], 10);
    const p = products.find(x => x.id === id);
    if(!p){
      app.innerHTML = notFound();
      return;
    }
    // track viewed
    if(!state.lastViewed.includes(id)){
      state.lastViewed.unshift(id);
      state.lastViewed = state.lastViewed.slice(0,8);
    }
    app.innerHTML = productPage(p);
    bindProductPage(p);
    return;
  }

  // Home
  app.innerHTML = homePage();
  bindHome();
}

/* -------- Views -------- */
function homePage(){
  const activeTab = state.tab;

  return `
    <section class="section">
      ${heroBlock()}
    </section>

    <section class="section">
      <div class="section__title">Tus Categorías<br/>Favoritas</div>

      <div class="categories">
        ${catCard("TRANSFORMA TU ENTRETENIMIENTO","cat", "#/")}
        ${catCard("TECNOLOGÍA QUE CONECTA TU VIDA","cat", "#/")}
        ${catCard("TECNOLOGÍA QUE TRANSFORMA TU HOGAR","cat cat--home", "#/")}
        ${catCard("LAPTOPS QUE VAN A TU RITMO","cat cat--laptops", "#/")}
      </div>
    </section>

    <section class="section">
      <div class="tabs" role="tablist" aria-label="Productos">
        <button class="tab ${activeTab==="favoritos"?"is-active":""}" data-tab="favoritos">Favoritos CellZoneHN</button>
        <button class="tab ${activeTab==="nuevos"?"is-active":""}" data-tab="nuevos">Nuevos Productos</button>
        <button class="tab ${activeTab==="vistos"?"is-active":""}" data-tab="vistos">Vistos Recientemente</button>
      </div>

      <div class="grid" id="productGrid">
        ${renderProductsForTab(activeTab)}
      </div>
    </section>

    <section class="section">
      ${newsletterBlock()}
    </section>

    <section class="section footer">
      ${footerBlock()}
    </section>
  `;
}

function heroBlock(){
  // tomo el primer producto como destacado
  const p = products[0];
  const img = (p.images && p.images.length) ? p.images[0] : "";
  const cuota = Math.max(0, Math.round((p.price || 0) / 14));

  return `
    <div class="hero">
      <div class="hero__inner">
        <div class="hero__badge">NUEVO</div>

        <div class="hero__grid">
          <div class="hero__card">
            <div class="hero__media">
              ${img ? `<img class="hero__img" src="${img}" alt="${escapeHtml(p.name)}" loading="eager">` : ``}
              <div class="hero__mediaShade"></div>
            </div>

            <div class="hero__content">
              <div class="hero__h1">${escapeHtml(p.brand)} ${escapeHtml(p.name)}</div>

              <div class="hero__price">
                <div>
                  <div class="p">Precio</div>
                  <div class="v">${money(p.price)}</div>
                </div>
                <div style="text-align:right">
                  <div class="p">Cuota</div>
                  <div class="v" style="color:var(--primary)">L${cuota}</div>
                </div>
              </div>

              <div class="hero__cta">
                <a class="btn btn--primary" href="#/product/${p.id}">
                  Ver más
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
                    <path d="M9 18 15 12 9 6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </a>
                <button class="btn btn--ghost" id="btnQuickAdd" data-id="${p.id}">
                  Agregar
                </button>
              </div>
            </div>
          </div>

          <div class="hero__card">
            <div class="promoBanner">
              <div class="promoBanner__bg"></div>
              <div class="promoBanner__txt">
                <div class="promoBanner__small">Completa tu</div>
                <div class="promoBanner__big">ECOSISTEMA</div>
                <div class="promoBanner__small">aquí</div>
              </div>

              <div class="promoDots" aria-hidden="true">
                <span class="dot is-active"></span>
                <span class="dot"></span>
                <span class="dot"></span>
                <span class="dot"></span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  `;
}

function catCard(text, cls, href){
  return `
    <a class="${cls}" href="${href}">
      <div class="cat__label">${escapeHtml(text)}</div>
      <div class="cat__img"></div>
    </a>
  `;
}

function renderProductsForTab(tab){
  let list = [];

  if(tab === "favoritos"){
    list = products.filter(p => state.favorites.has(p.id));
  } else if(tab === "nuevos"){
    list = products.filter(p => (p.badge||"").toLowerCase().includes("nuevo"));
  } else if(tab === "vistos"){
    list = state.lastViewed.map(id => products.find(p => p.id === id)).filter(Boolean);
    if(list.length === 0) list = products.slice(0,2);
  }

  // aplicar búsqueda
  if(state.query.trim()){
    const q = state.query.trim().toLowerCase();
    list = list.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.brand.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q)
    );
  }

  return list.map(productCard).join("") || emptyState();
}

function productCard(p){
  const isNew = (p.badge||"").toLowerCase().includes("nuevo");
  const badge = p.badge ? `<div class="pill">${escapeHtml(p.badge)}</div>` : "";
  const imgSrc = (p.images && p.images.length) ? p.images[0] : "";
  const imgFallback = p.category && p.category.toLowerCase().includes("línea") ? "card__img alt" : "card__img";

  return `
    <article class="card" data-open="${p.id}">
      <div class="card__media">
        ${badge}
        ${imgSrc
          ? `<img class="card__photo" src="${imgSrc}" alt="${escapeHtml(p.name)}" loading="lazy">`
          : `<div class="${imgFallback}"></div>`
        }
      </div>
      <div class="card__body">
        <div class="card__name">${escapeHtml(p.name)}</div>
        <div class="card__meta">${escapeHtml(p.category || "")}</div>
        <div class="card__price">${money(p.price)}</div>
        <div class="card__row">
          <span class="badge ${state.favorites.has(p.id) ? "badge--fav":""}">
            ${state.favorites.has(p.id) ? "Favoritos" : "Guardar"}
          </span>
          <span class="badge">${isNew ? "Nuevo" : "Ver"}</span>
        </div>
      </div>
    </article>
  `;
}

function emptyState(){
  return `
    <div style="grid-column:1/-1; padding:18px; text-align:center; color:#64748b; font-weight:800;">
      No hay resultados con ese filtro.
    </div>
  `;
}

function newsletterBlock(){
  return `
    <div class="newsletter">
      <h3>Suscríbete a nuestro boletín</h3>
      <p>
        Sé el primero en enterarte de las ofertas y descuentos que CellZoneHN tiene para ti.
      </p>
      <div class="nl__row">
        <input type="email" placeholder="Correo Electrónico" />
        <button>Suscribirme</button>
      </div>
      <small>
        Nos preocupamos por la protección de tus datos. Lee nuestra <a href="#/">Política de Privacidad</a>.
      </small>
    </div>
  `;
}

function footerBlock(){
  return `
    <div class="footer__grid">
      <div class="footer__box">
        <div class="footer__h">Síguenos</div>
        <div class="social">
          <a href="#/" aria-label="Instagram">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
              <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5z" stroke="currentColor" stroke-width="2"/>
              <path d="M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10z" stroke="currentColor" stroke-width="2"/>
              <path d="M17.5 6.5h.01" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
            </svg>
          </a>
          <a href="#/" aria-label="TikTok">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
              <path d="M14 3v10.2a3.8 3.8 0 1 1-3-3.7" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              <path d="M14 6c1.1 1.7 2.7 2.6 5 2.7" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </a>
          <a href="#/" aria-label="Facebook">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
              <path d="M14 9h3V6h-3c-2 0-3 1-3 3v3H8v3h3v6h3v-6h3l1-3h-4V9c0-.7.3-1 1-1z" fill="currentColor"/>
            </svg>
          </a>
          <a href="#/" aria-label="X">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
              <path d="M7 17 17 7M7 7l10 10" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </a>
          <a href="#/" aria-label="YouTube">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
              <path d="M21 12s0-4-1-5-5-1-8-1-7 0-8 1-1 5-1 5 0 4 1 5 5 1 8 1 7 0 8-1 1-5 1-5z" stroke="currentColor" stroke-width="2"/>
              <path d="M10 9v6l6-3-6-3z" fill="currentColor"/>
            </svg>
          </a>
        </div>
      </div>

      <div class="footer__box">
        <div class="footer__h">Contáctanos</div>
        <p class="footer__p">
          Puedes contactarnos para consultas de servicio al cliente y asesoría llamando o escribiendo al:
        </p>
        <a class="footer__link" href="tel:+50400000000">PBX: +(504) 0000-0000</a>
        <br/>
        <a class="footer__link" href="#/">Formulario de Contacto</a>
        <br/>
        <a class="footer__link" href="#/" id="waFooterLink">WhatsApp</a>
      </div>

      <div class="footer__box">
        <div class="footer__h">CellZoneHN</div>
        <p class="footer__p">
          Tecnología y accesorios con estilo premium. Envíos a todo Honduras.
        </p>
        <a class="footer__link" href="#/">Términos y Condiciones</a>
        <br/>
        <a class="footer__link" href="#/">Política de Privacidad</a>
      </div>
    </div>

    <div class="copyright">
      Derechos Reservados © | <b>CellZoneHN</b> ${new Date().getFullYear()}
    </div>
  `;
}

function productPage(p){
  const imgs = (p.images && p.images.length) ? p.images : [];
  const main = imgs[0] || "";
  const thumbs = imgs.slice(0, 10);

  return `
    <section class="section">
      <a href="#/" class="btn btn--ghost" style="border-radius:14px;">
        ← Volver
      </a>
    </section>

    <section class="section pdp">
      <div class="pdp__gallery">
        <div class="pdp__heroimg">
  ${imgs.length
    ? `<div id="pdpSlider" class="pdp__slider" aria-label="Galería de imágenes">
        ${imgs.map((src, i)=>`
          <div class="pdp__slide" data-i="${i}">
            <img class="pdp__mainimg" ${i===0 ? `src="${src}" fetchpriority="high"` : `src="${IMG_PLACEHOLDER}" data-src="${src}"`} alt="${escapeHtml(p.name)} - Foto ${i+1}" loading="${i===0?'eager':'lazy'}" decoding="async">
          </div>
        `).join("")}
      </div>`
    : `<div class="pdp__phone" id="pdpPhone"></div>`
  }
</div>

        <div class="pdp__thumbs" id="pdpThumbs">
          ${thumbs.map((src, i)=>`
            <div class="thumb ${i===0?"is-active":""}" data-thumb="${i}" title="Imagen ${i+1}">
              <img src="${src}" alt="Miniatura ${i+1}" loading="eager" decoding="async" fetchpriority="${i<3?"high":"low"}">
            </div>
          `).join("")}
        </div>
      </div>

      <div class="pdp__info">
        <h1 class="pdp__title">${escapeHtml(p.name)}</h1>
        <a class="pdp__link" href="#/">Ver más productos ${escapeHtml(p.brand || "CellZoneHN")}</a>
        <div class="pdp__sku">SKU: ${escapeHtml(p.sku || "")}</div>

        <div class="pdp__price">${money(p.price)}</div>

        ${p.description && p.description.length ? `
          <div class="pdp__desc">
            ${p.description.slice(0,3).map(x => `• ${escapeHtml(x)}`).join("<br/>")}
          </div>
        ` : ``}

        <div class="pdp__actions">
          <button class="squarebtn" id="shareBtn" title="Compartir">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
              <path d="M12 16V3" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              <path d="M7 7l5-4 5 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M5 13v7h14v-7" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </button>

          <button class="squarebtn" id="favBtn" title="Favorito">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
              <path d="M12 21s-7-4.6-9.4-8.1C.8 9.8 2.4 6.5 5.9 5.7c1.6-.4 3.3.1 4.4 1.3 1.1-1.2 2.8-1.7 4.4-1.3 3.5.8 5.1 4.1 3.3 7.2C19 16.4 12 21 12 21z"
                    stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>

        <div class="gift">
          <div class="gift__side">REGALO</div>
          <div class="gift__body">
            <p class="gift__h">RECIBE GRATIS</p>
            <p class="gift__p">${escapeHtml(p.gift || "Promoción (según publicación)")}</p>
          </div>
        </div>

        <div class="addcart">
          <button class="btn btn--primary" id="addToCartBtn">
            🛒 Agregar a carrito
          </button>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="pdpTabs">
        <button class="pdpTab is-active" data-pdptab="car">Características</button>
        <button class="pdpTab" data-pdptab="env">Información de Envío</button>
        <button class="pdpTab" data-pdptab="eva">Evaluaciones</button>
      </div>

      <div id="pdpTabContent">
        ${pdpCharacteristics(p)}
      </div>

    <div id="lightbox" class="lightbox" aria-hidden="true">
      <div class="lightbox__inner" role="dialog" aria-modal="true" aria-label="Vista ampliada">
        <button class="lightbox__close" id="lbClose" aria-label="Cerrar">✕</button>
        <button class="lightbox__nav lightbox__prev" id="lbPrev" aria-label="Imagen anterior">‹</button>
        <img id="lbImg" class="lightbox__img" src="${IMG_PLACEHOLDER}" alt="Imagen ampliada" decoding="async" loading="eager">
        <button class="lightbox__nav lightbox__next" id="lbNext" aria-label="Imagen siguiente">›</button>
        <div class="lightbox__count" id="lbCount"></div>
      </div>
    </div>
    </section>
  `;
}

function pdpCharacteristics(p){
  const blocks = Object.entries(p.specs || {});
  const desc = (p.description && p.description.length) ? p.description : [];

  return `
    <div class="specs">
      ${blocks.map(([title, rows]) => {
        const entries = Object.entries(rows);
        return `
          <div class="specs__block">
            <div class="specs__h">${escapeHtml(title)}</div>
            <table class="table">
              <tbody>
                ${entries.map(([k,v]) => `
                  <tr>
                    <th>${escapeHtml(k)}</th>
                    <td>${escapeHtml(v)}</td>
                  </tr>
                `).join("")}
              </tbody>
            </table>
          </div>
        `;
      }).join("")}

      ${desc.length ? `
        <div class="specs__block">
          <div class="specs__h">Descripción</div>
          <div class="specs__bullets">
            ${desc.map(x => `<div class="bullet">• ${escapeHtml(x)}</div>`).join("")}
          </div>
        </div>
      ` : ``}
    </div>
  `;
}

function pdpShipping(p){
  const items = p.shipping || [];
  return `
    <div class="specs">
      <div class="specs__block">
        <div class="specs__h">Información de envío</div>
        <div style="color:#334155; font-weight:700; line-height:1.5;">
          ${items.map(x => `• ${escapeHtml(x)}`).join("<br/>")}
        </div>
      </div>
    </div>
  `;
}

function pdpReviews(p){
  const stars = "★★★★★".slice(0, Math.max(0, Math.min(5, p.rating||0)));
  const empty = "☆☆☆☆☆".slice(0, 5 - Math.max(0, Math.min(5, p.rating||0)));
  return `
    <div class="specs">
      <div class="specs__block">
        <div class="specs__h">Evaluaciones</div>
        <div style="font-size:20px; color:#0f172a; font-weight:900;">
          ${stars}<span style="color:#cbd5e1">${empty}</span>
        </div>
        <div style="margin-top:8px; color:#64748b; font-weight:700;">
          (Demo) Luego conectamos esto a reseñas reales.
        </div>
      </div>
    </div>
  `;
}

function notFound(){
  return `
    <section class="section">
      <div class="hero" style="padding:16px;">
        <div class="section__title" style="margin:12px 0;">Página no encontrada</div>
        <div class="section__subtitle">Lo sentimos, la página que buscas no existe.</div>
        <a class="btn btn--primary" href="#/" style="width:100%; border-radius:14px;">Volver al inicio</a>
      </div>
    </section>
  `;
}

/* -------- Bindings -------- */
function bindHome(){
  // tabs
  $$(".tab").forEach(btn=>{
    btn.addEventListener("click", ()=>{
      state.tab = btn.dataset.tab;
      navigate();
    });
  });

  // open product
  $$(".card").forEach(c=>{
    c.addEventListener("click", ()=>{
      const id = c.dataset.open;
      location.hash = `#/product/${id}`;
    });
  });

  // quick add from hero
  const qa = $("#btnQuickAdd");
  if(qa){
    qa.addEventListener("click", ()=>{
      state.cartCount++;
      setWhatsAppLink();
      toast("Agregado al carrito (demo).");
    });
  }

  // search binding
  const input = $("#searchInput");
  if(input){
    input.value = state.query;
    input.addEventListener("input", ()=>{
      state.query = input.value;
      // re-render grid only
      const grid = $("#productGrid");
      if(grid) grid.innerHTML = renderProductsForTab(state.tab);
      $$(".card").forEach(c=>{
        c.addEventListener("click", ()=> location.hash = `#/product/${c.dataset.open}`);
      });
    });
  }

  // footer whatsapp
  const waFooter = $("#waFooterLink");
  if(waFooter) waFooter.href = $("#waFloat").href;
}

function bindProductPage(p){
  const imgs = (p.images && p.images.length) ? p.images : [];
  const slider = $("#pdpSlider");
  const thumbsWrap = $("#pdpThumbs");
  const thumbs = $$("#pdpThumbs .thumb");
  const slideImgs = slider ? $$("#pdpSlider img") : [];

  const clamp = (n, a, b) => Math.max(a, Math.min(b, n));

  const getIndex = () => {
    if(!slider || !slider.clientWidth) return 0;
    return clamp(Math.round(slider.scrollLeft / slider.clientWidth), 0, Math.max(0, imgs.length - 1));
  };

  const loadSlide = (i) => {
    if(!slideImgs.length) return;
    const idx = clamp(i, 0, slideImgs.length - 1);
    const img = slideImgs[idx];
    if(!img) return;
    const ds = img.getAttribute("data-src");
    if(ds && img.getAttribute("src") === IMG_PLACEHOLDER){
      img.src = ds;
      img.removeAttribute("data-src");
    }
  };

  const decodeIfPossible = (imgEl) => {
    try{
      if(imgEl && typeof imgEl.decode === "function"){
        imgEl.decode().catch(()=>{});
      }
    }catch(e){}
  };

  // Precarga progresiva: hace que al tocar miniaturas cambie casi instantáneo (Android)
  const preloadAllSlides = () => {
    if(!slideImgs.length) return;
    let k = 0;
    const step = () => {
      let n = 0;
      while(n < 2 && k < slideImgs.length){
        const el = slideImgs[k++];
        const ds = el.getAttribute("data-src");
        if(ds){
          el.src = ds;
          el.removeAttribute("data-src");
          decodeIfPossible(el);
        }
        n++;
      }
      if(k < slideImgs.length){
        if(window.requestIdleCallback) requestIdleCallback(step, {timeout: 900});
        else setTimeout(step, 120);
      }
    };
    if(window.requestIdleCallback) requestIdleCallback(step, {timeout: 1200});
    else setTimeout(step, 150);
  };

  const ensureThumbVisible = (el) => {
    if(!thumbsWrap || !el) return;
    const cLeft = thumbsWrap.scrollLeft;
    const cRight = cLeft + thumbsWrap.clientWidth;
    const tLeft = el.offsetLeft;
    const tRight = tLeft + el.offsetWidth;

    if(tLeft < cLeft || tRight > cRight){
      const target = tLeft - (thumbsWrap.clientWidth/2 - el.offsetWidth/2);
      thumbsWrap.scrollTo({ left: target, behavior: "smooth" });
    }
  };

  const setActiveThumb = (i) => {
    thumbs.forEach(x => x.classList.remove("is-active"));
    const t = thumbs.find(x => parseInt(x.dataset.thumb, 10) === i);
    if(t){
      t.classList.add("is-active");
      // solo mueve el carrusel de minis, NO la página
      ensureThumbVisible(t);
    }
  };

  const goTo = (i, smooth=true) => {
    if(!slider) return;
    const idx = clamp(i, 0, Math.max(0, imgs.length - 1));

    // carga progresiva (mejor rendimiento en Android)
    loadSlide(idx);
    loadSlide(idx + 1);
    loadSlide(idx - 1);

    const left = slider.clientWidth * idx;
    slider.scrollTo({ left, behavior: smooth ? "smooth" : "auto" });
    setActiveThumb(idx);
  };

  // Click en miniaturas
  thumbs.forEach(t=>{
    t.addEventListener("click", ()=>{
      const i = parseInt(t.dataset.thumb, 10);
      goTo(i, true);
      pauseAuto();
    });
  });

  // Sincronizar miniatura al deslizar (sin saltos de scroll)
  let scrollTick = null;
  if(slider){
    slider.addEventListener("scroll", ()=>{
      if(scrollTick) cancelAnimationFrame(scrollTick);
      scrollTick = requestAnimationFrame(()=>{
        const idx = getIndex();
        setActiveThumb(idx);
        loadSlide(idx + 1);
      });
    }, {passive:true});
  }

  // Auto slider cada 3s (solo cuando el slider está visible)
  let autoTimer = null;
  let resumeTimer = null;
  let isVisible = true;

  function canAuto(){
    return !!slider && imgs.length > 1 && !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }

  function startAuto(){
    stopAuto();
    if(!canAuto() || !isVisible) return;
    autoTimer = setInterval(()=>{
      const next = (getIndex() + 1) % imgs.length;
      goTo(next, true);
    }, 3000);
  }

  function stopAuto(){
    if(autoTimer){ clearInterval(autoTimer); autoTimer = null; }
  }

  function pauseAuto(){
    stopAuto();
    if(resumeTimer) clearTimeout(resumeTimer);
    // reanudar luego de 6s sin tocar
    resumeTimer = setTimeout(startAuto, 6000);
  }

  if(slider && imgs.length > 0){
    requestAnimationFrame(()=>{
      goTo(0, false);
      loadSlide(0);
      loadSlide(1);
      preloadAllSlides();
    });

    ["touchstart","pointerdown","mousedown","wheel"].forEach(ev=>{
      slider.addEventListener(ev, pauseAuto, {passive:true});
    });

    // Observa visibilidad para evitar "loco" al hacer scroll en móvil
    if("IntersectionObserver" in window){
      const io = new IntersectionObserver((entries)=>{
        isVisible = !!(entries[0] && entries[0].isIntersecting);
        if(isVisible) startAuto();
        else stopAuto();
      }, {threshold: 0.6});
      io.observe(slider);
    } else {
      startAuto();
    }

    document.addEventListener("visibilitychange", ()=>{
      if(document.hidden) stopAuto();
      else startAuto();
    });

    window.addEventListener("resize", ()=>{
      goTo(getIndex(), false);
    });

  // ---------- Lightbox (tocar imagen grande) ----------
  const lb = $("#lightbox");
  const lbInner = lb ? $(".lightbox__inner", lb) : null;
  const lbImg = $("#lbImg");
  const lbCount = $("#lbCount");
  const lbPrev = $("#lbPrev");
  const lbNext = $("#lbNext");
  const lbClose = $("#lbClose");

  let lbIndex = 0;
  const isLbOpen = ()=> !!(lb && lb.classList.contains("is-open"));

  const preloadLbAround = (i) => {
    if(!imgs.length) return;
    const a = (i + 1) % imgs.length;
    const b = (i - 1 + imgs.length) % imgs.length;
    [a,b].forEach(k=>{
      const url = imgs[k];
      if(!url) return;
      try{
        const im = new Image();
        im.src = url;
        if(typeof im.decode === "function") im.decode().catch(()=>{});
      }catch(e){}
    });
  };

  const setLb = (i) => {
    if(!lb || !lbImg || !imgs.length) return;
    lbIndex = clamp(i, 0, Math.max(0, imgs.length - 1));
    const src = imgs[lbIndex];
    if(src){
      // asegura que el recurso ya esté cargado/cached
      loadSlide(lbIndex);
      loadSlide(lbIndex+1);
      loadSlide(lbIndex-1);
      lbImg.src = src;
      decodeIfPossible(lbImg);
      preloadLbAround(lbIndex);
    }
    if(lbCount) lbCount.textContent = `${lbIndex+1}/${imgs.length}`;
  };

  const openLb = (i) => {
    if(!lb || !imgs.length) return;
    lb.classList.add("is-open");
    lb.setAttribute("aria-hidden","false");
    document.body.classList.add("no-scroll");
    setLb(i);
  };

  const closeLb = () => {
    if(!lb) return;
    lb.classList.remove("is-open");
    lb.setAttribute("aria-hidden","true");
    document.body.classList.remove("no-scroll");
  };

  if(lb){
    lb.addEventListener("click", (e)=>{
      // click en el fondo oscuro cierra
      if(e.target === lb) closeLb();
    });
  }
  if(lbClose) lbClose.addEventListener("click", (e)=>{ e.stopPropagation(); closeLb(); });
  if(lbPrev) lbPrev.addEventListener("click", (e)=>{ e.stopPropagation(); setLb((lbIndex - 1 + imgs.length) % imgs.length); });
  if(lbNext) lbNext.addEventListener("click", (e)=>{ e.stopPropagation(); setLb((lbIndex + 1) % imgs.length); });

  document.addEventListener("keydown", (e)=>{
    if(!isLbOpen()) return;
    if(e.key === "Escape") closeLb();
    if(e.key === "ArrowLeft") setLb((lbIndex - 1 + imgs.length) % imgs.length);
    if(e.key === "ArrowRight") setLb((lbIndex + 1) % imgs.length);
  });

  // Swipe dentro del lightbox
  if(lbInner){
    let sx=0, sy=0;
    lbInner.addEventListener("touchstart",(e)=>{
      const t = e.touches && e.touches[0];
      if(!t) return;
      sx = t.clientX; sy = t.clientY;
    }, {passive:true});

    lbInner.addEventListener("touchend",(e)=>{
      const t = e.changedTouches && e.changedTouches[0];
      if(!t) return;
      const dx = t.clientX - sx;
      const dy = t.clientY - sy;
      if(Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy)){
        if(dx > 0) setLb((lbIndex - 1 + imgs.length) % imgs.length);
        else setLb((lbIndex + 1) % imgs.length);
      }
    }, {passive:true});
  }

  // Abrir lightbox con tap (no swipe) sobre la imagen grande
  if(slider && imgs.length){
    let downX=0, downY=0, downT=0, moved=false;
    slider.addEventListener("pointerdown",(e)=>{
      downX = e.clientX; downY = e.clientY; downT = Date.now(); moved = false;
    }, {passive:true});

    slider.addEventListener("pointermove",(e)=>{
      if(Math.abs(e.clientX - downX) > 10 || Math.abs(e.clientY - downY) > 10){
        moved = true;
      }
    }, {passive:true});

    slider.addEventListener("pointerup",()=>{
      const dt = Date.now() - downT;
      if(!moved && dt < 350){
        openLb(getIndex());
      }
    }, {passive:true});
  }
  }

  // fav toggle
  const favBtn = $("#favBtn");
  if(favBtn){
    favBtn.addEventListener("click", ()=>{
      if(state.favorites.has(p.id)) state.favorites.delete(p.id);
      else state.favorites.add(p.id);
      toast(state.favorites.has(p.id) ? "Guardado en favoritos." : "Quitado de favoritos.");
    });
  }

  // share
  const shareBtn = $("#shareBtn");
  if(shareBtn){
    shareBtn.addEventListener("click", async ()=>{
      const url = location.href;
      try{
        if(navigator.share){
          await navigator.share({ title: "CellZoneHN", text: p.name, url });
        } else {
          await navigator.clipboard.writeText(url);
          toast("Link copiado.");
        }
      }catch(e){
        // ignore
      }
    });
  }

  // add to cart
  const add = $("#addToCartBtn");
  if(add){
    add.addEventListener("click", ()=>{
      state.cartCount++;
      setWhatsAppLink();
      toast("Agregado al carrito (demo).");
    });
  }

  // pdp tabs
  $$(".pdpTab").forEach(btn=>{
    btn.addEventListener("click", ()=>{
      $$(".pdpTab").forEach(x=>x.classList.remove("is-active"));
      btn.classList.add("is-active");
      const key = btn.dataset.pdptab;
      const cont = $("#pdpTabContent");
      if(!cont) return;
      if(key === "car") cont.innerHTML = pdpCharacteristics(p);
      if(key === "env") cont.innerHTML = pdpShipping(p);
      if(key === "eva") cont.innerHTML = pdpReviews(p);
    });
  });
}


/* -------- Menu / Drawer -------- */
function bindDrawer(){
  const drawer = $("#drawer");
  const open = ()=> drawer.classList.add("is-open");
  const close = ()=> drawer.classList.remove("is-open");

  $("#btnMenu").addEventListener("click", open);
  $("#btnCloseDrawer").addEventListener("click", close);
  $("#drawerBackdrop").addEventListener("click", close);

  // close on link click
  $$(".drawer__link").forEach(a => a.addEventListener("click", close));
}

/* -------- Helpers -------- */
function escapeHtml(str){
  return String(str ?? "")
    .replaceAll("&","&amp;")
    .replaceAll("<","&lt;")
    .replaceAll(">","&gt;")
    .replaceAll('"',"&quot;")
    .replaceAll("'","&#039;");
}

let toastTimer;
function toast(msg){
  clearTimeout(toastTimer);
  let el = $("#toast");
  if(!el){
    el = document.createElement("div");
    el.id = "toast";
    el.style.position = "fixed";
    el.style.left = "50%";
    el.style.bottom = "calc(92px + env(safe-area-inset-bottom))";
    el.style.transform = "translateX(-50%)";
    el.style.padding = "12px 14px";
    el.style.borderRadius = "14px";
    el.style.background = "rgba(15,23,42,.92)";
    el.style.color = "#fff";
    el.style.fontWeight = "800";
    el.style.fontSize = "13px";
    el.style.boxShadow = "0 16px 30px rgba(2,6,23,.25)";
    el.style.zIndex = "120";
    document.body.appendChild(el);
  }
  el.textContent = msg;
  el.style.opacity = "1";
  toastTimer = setTimeout(()=>{ el.style.opacity="0"; }, 1700);
}

/* -------- Global bindings -------- */
function bindSearchButton(){
  $("#btnSearch").addEventListener("click", ()=>{
    toast("Buscando... (demo)");
  });
}

function init(){
  setWhatsAppLink();
  bindDrawer();
  bindSearchButton();
  window.addEventListener("hashchange", navigate);

  // keep query synced even on product page
  $("#searchInput").addEventListener("input", (e)=>{
    state.query = e.target.value;
  });

  navigate();
}

init();
