document.addEventListener('DOMContentLoaded', function() {
    const acc = document.querySelectorAll('.accordion');
    acc.forEach(button => {
        button.addEventListener('click', function() {
            this.classList.toggle('active');
            const panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + 'px';
            }
        });
    });

    const itemBtns = document.querySelectorAll('.item-btn');
    itemBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const itemName = this.getAttribute('data-item-name');
            toggleItemDetails(itemName, this);
        });
    });

    const closeBtn = document.querySelector('.close-btn');
    if (closeBtn) {
        closeBtn.addEventListener('click', closeItemDetails);
    }

    const prevBtn = document.getElementById('prevCharacterBtn');
    const nextBtn = document.getElementById('nextCharacterBtn');
    if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', prevCharacter);
        nextBtn.addEventListener('click', nextCharacter);
    }
});

let currentCharacter = 0;

function showCharacter(index) {
    const characters = document.querySelectorAll('.carousel-item');
    characters.forEach((character, i) => {
        character.style.transform = `translateX(-${index * 100}%)`;
    });
}

function prevCharacter() {
    const characters = document.querySelectorAll('.carousel-item');
    currentCharacter = (currentCharacter > 0) ? currentCharacter - 1 : characters.length - 1;
    showCharacter(currentCharacter);
}

// Mostrar el primer personaje al cargar la página
showCharacter(currentCharacter);

function nextCharacter() {
    const characters = document.querySelectorAll('.carousel-item');
    currentCharacter = (currentCharacter < characters.length - 1) ? currentCharacter + 1 : 0;
    showCharacter(currentCharacter);
}

function toggleItemDetails(itemName, button) {
    const itemNameElement = document.getElementById('itemName');
    const itemPickupTextElement = document.getElementById('itemPickupText');
    const itemDescriptionElement = document.getElementById('itemDescription');
    const itemIcon = document.getElementById('itemIcon');
    const itemDetails = document.getElementById('itemDetails');

    // Configurar el icono, el nombre, el texto de recogida y la descripción del ítem seleccionado
    switch (itemName) {
        case 'Brimstone':
            itemIcon.innerHTML = '<img src="images/brimstone.png" alt="Brimstone Icon" class="icon">';
            itemNameElement.innerText = 'Brimstone';
            itemPickupTextElement.innerText = 'Has recogido Brimstone';
            itemDescriptionElement.innerText = 'Dispara un rayo láser poderoso.';
            break;
        case 'Mom\'s Knife':
            itemIcon.innerHTML = '<img src="images/moms_knife.png" alt="Mom\'s Knife Icon" class="icon">';
            itemNameElement.innerText = 'Mom\'s Knife';
            itemPickupTextElement.innerText = 'Has recogido Mom\'s Knife';
            itemDescriptionElement.innerText = 'Un cuchillo lanzable de alto daño.';
            break;
        case 'The Halo':
            itemIcon.innerHTML = '<img src="images/the_halo.png" alt="The Halo Icon" class="icon">';
            itemNameElement.innerText = 'The Halo';
            itemPickupTextElement.innerText = 'Has recogido The Halo';
            itemDescriptionElement.innerText = 'Mejora todas tus estadísticas.';
            break;
        case 'Polyphemus':
            itemIcon.innerHTML = '<img src="images/polyphemus.png" alt="Polyphemus Icon" class="icon">';
            itemNameElement.innerText = 'Polyphemus';
            itemPickupTextElement.innerText = 'Has recogido Polyphemus';
            itemDescriptionElement.innerText = 'Aumenta significativamente el daño, pero reduce la velocidad de disparo.';
            break;
        case 'Sacred Heart':
            itemIcon.innerHTML = '<img src="images/sacred_heart.png" alt="Sacred Heart Icon" class="icon">';
            itemNameElement.innerText = 'Sacred Heart';
            itemPickupTextElement.innerText = 'Has recogido Sacred Heart';
            itemDescriptionElement.innerText = 'Proporciona un gran aumento en el daño y en la curación.';
            break;
        default:
            break;
    }

    // Aplicar animación al ítem seleccionado
    button.classList.add('clicked');

    // Mostrar los detalles del ítem con animación
    itemDetails.style.display = 'flex';
    itemDetails.classList.add('fadeIn');
}

function closeItemDetails() {
    const itemDetails = document.getElementById('itemDetails');

    // Remover efecto del ítem seleccionado
    const itemBtns = document.querySelectorAll('.item-btn');
    itemBtns.forEach(btn => {
        btn.classList.remove('clicked');
    });

    // Ocultar los detalles del ítem con animación
    itemDetails.classList.remove('fadeIn');
    setTimeout(() => {
        itemDetails.style.display = 'none';
    }, 500); // Esperar a que termine la animación
}

  // Funciones para abrir y cerrar los modales
  function showModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

// Cerrar el modal cuando el usuario haga clic fuera del contenido del modal
window.onclick = function(event) {
    var modals = document.getElementsByClassName("modal");
    for (var i = 0; i < modals.length; i++) {
        if (event.target == modals[i]) {
            modals[i].style.display = "none";
        }
    }
}

document.addEventListener("DOMContentLoaded", function() {
    let lastScrollY = window.scrollY;
    const header = document.querySelector("header");

    window.addEventListener("scroll", function() {
        if (window.scrollY > lastScrollY) {
            // Scrolling down
            header.classList.add("hidden");
        } else {
            // Scrolling up
            header.classList.remove("hidden");
        }
        lastScrollY = window.scrollY;
    });
});


