


async function fetchZapatillas() {
    const url = 'https://run.mocky.io/v3/d414a5e0-78fc-4a16-9d70-5b82dc6bfbe6';
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('La solicitud falló');
        }
        return await response.json();
    } catch (error) {
        console.error('Error:', error);
        return [];
    }
}


function createCard(data) {
    const cardContainer = document.getElementById('card-container');
    
    const card = document.createElement('div');
    card.className = 'card col-xl-3 col-lg-3 col-md-3 col-sm-12 col-xs-12 mb-5';

    card.innerHTML = `
        <img src="${data.img}" class="card-img-top" alt="${data.modelo}">
        <div class="card-body">
            <h5 class="card-title">${data.modelo}</h5>
            <h5 class="card-title">${data.precio}</h5>
            <h5 class="card-title">Stock: ${data.stock}</h5>
            <button class="btn btn-primary"><i class="fa-solid fa-cart-shopping"></i>&nbsp;Ver zapatilla</button>
            <button class="btn btn-warning btn-style">Comprar</button>
        </div>
    `;

    
    card.querySelector('button').addEventListener('click', () => {
        window.location.href = `adidasUnico.html?modelo=${encodeURIComponent(data.modelo)}`;
    });

    cardContainer.appendChild(card);
}

function renderZapatillas(zapatillas) {
    const cardContainer = document.getElementById('card-container');
    cardContainer.innerHTML = '';
    zapatillas.forEach(createCard);
}

function filtrarZapatillas(zapatillas, termino) {
    return zapatillas.filter(zapatilla =>
        zapatilla.modelo.toLowerCase().includes(termino)
    );
}

document.getElementById('nombre').addEventListener('input', async () => {
    const searchTerm = document.getElementById('nombre').value.trim().toLowerCase();
    const zapatillas = await fetchZapatillas();
    const filteredZapatillas = filtrarZapatillas(zapatillas, searchTerm);
    renderZapatillas(filteredZapatillas);
});

(async function init() {
    const zapatillas = await fetchZapatillas();
    renderZapatillas(zapatillas);
})();







