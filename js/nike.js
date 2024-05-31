


document.addEventListener('DOMContentLoaded', () => {
    async function fetchZapatillasNike() {
        const url = 'https://run.mocky.io/v3/c3b6035d-a8ad-4041-8c34-d322b58d1d8a';
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

    function createCard(zapatillaNike) {
        const cardContainer = document.getElementById('nike-card-container');

        const card = document.createElement('div');
        card.className = 'card col-xl-3 col-lg-3 col-md-3 col-sm-12 col-xs-1 mb-5';

        card.innerHTML = `
            <img src="${zapatillaNike.img}" class="card-img-top" alt="${zapatillaNike.modelo}">
            <div class="card-body">
                <h5 class="card-title">${zapatillaNike.modelo}</h5>
                <h5 class="card-title">${zapatillaNike.precio}</h5>
                <h5 class="card-title">Stock: ${zapatillaNike.stock}</h5>
                <div>
                    <button class="btn btn-primary btn-ver-style"><i class="fa-solid fa-cart-shopping"></i>&nbsp;Comprar</button>
                    <button class="btn btn-warning btn-style">Comprar</button>
                </div>
            </div>
        `;

        card.querySelector('.btn-ver-style').addEventListener('click', () => {
            window.location.href = `nikeUnico.html?modelo=${encodeURIComponent(zapatillaNike.modelo)}`;
        });

        cardContainer.appendChild(card);
    }

    function renderZapatillasNike(zapatillasNike) {
        const cardContainer = document.getElementById('nike-card-container');
        cardContainer.innerHTML = '';
        zapatillasNike.forEach(createCard);
    }

    function filtrarZapatillasNike(zapatillasNike, termino) {
        return zapatillasNike.filter(zapatillaNike =>
            zapatillaNike.modelo.toLowerCase().includes(termino)
        );
    }

    document.getElementById('nombre').addEventListener('input', async () => {
        const searchTerm = document.getElementById('nombre').value.trim().toLowerCase();
        const zapatillasNike = await fetchZapatillasNike();
        const filteredZapatillasNike = filtrarZapatillasNike(zapatillasNike, searchTerm);
        renderZapatillasNike(filteredZapatillasNike);
    });

    (async function init() {
        const zapatillasNike = await fetchZapatillasNike();
        renderZapatillasNike(zapatillasNike);
    })();
});



