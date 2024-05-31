


document.addEventListener('DOMContentLoaded', () => {
    async function fetchNewBalanceZapatillas() {
        const url = 'https://run.mocky.io/v3/8ff4b5ca-31ab-470e-983a-3ac87b17fa80';
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

    function createNewBalanceCard(zapatilla) {
        const cardContainer = document.getElementById('newBalance-card-container');
        if (!cardContainer) return; // Verificar si el contenedor existe

        const card = document.createElement('div');
        card.className = 'card col-xl-3 col-lg-3 col-md-3 col-sm-12 col-xs-1 mb-5';

        card.innerHTML = `
            <img src="${zapatilla.img}" class="card-img-top" alt="${zapatilla.modelo}">
            <div class="card-body">
                <h5 class="card-title">${zapatilla.modelo}</h5>
                <h5 class="card-title">${zapatilla.precio}</h5>
                <h5 class="card-title">Stock: ${zapatilla.stock}</h5>
                <button class="btn btn-primary btn-ver-style"><i class="fa-solid fa-cart-shopping"></i>&nbsp;Ver zapatilla</button>
                <button class="btn btn-dark btn-style">Comprar</button>
            </div>
        `;

        card.querySelector('.btn-ver-style').addEventListener('click', () => {
            window.location.href = `newBalanceUnico.html?modelo=${encodeURIComponent(zapatilla.modelo)}`;
        });

        cardContainer.appendChild(card);
    }

    function renderNewBalanceZapatillas(zapatillas) {
        const cardContainer = document.getElementById('newBalance-card-container');
        if (!cardContainer) return; // Verificar si el contenedor existe
        cardContainer.innerHTML = '';
        zapatillas.forEach(createNewBalanceCard);
    }

    function filtrarNewBalanceZapatillas(zapatillas, termino) {
        return zapatillas.filter(zapatilla =>
            zapatilla.modelo.toLowerCase().includes(termino)
        );
    }

    document.getElementById('nombre').addEventListener('input', async () => {
        const searchTerm = document.getElementById('nombre').value.trim().toLowerCase();
        const zapatillas = await fetchNewBalanceZapatillas();
        const filteredZapatillas = filtrarNewBalanceZapatillas(zapatillas, searchTerm);
        renderNewBalanceZapatillas(filteredZapatillas);
    });

    (async function init() {
        const zapatillas = await fetchNewBalanceZapatillas();
        renderNewBalanceZapatillas(zapatillas);
    })();
});



