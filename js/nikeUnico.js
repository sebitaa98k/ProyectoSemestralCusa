


const params = new URLSearchParams(window.location.search);
const nikeModelo = params.get('modelo');

// Función para obtener los detalles de las zapatillas Nike por su modelo
const obtenerDetallesNike = async (modelo) => {
  try {
    const response = await fetch('https://run.mocky.io/v3/1c559273-ac92-4707-9d9f-208440f7fbea');
    if (!response.ok) {
      throw new Error('La solicitud falló');
    }
    const nikes = await response.json();
    const nike = nikes.find(nike => nike.modelo === modelo);
    if (!nike) {
      throw new Error('Zapatillas Nike no encontradas');
    }
    console.log('Detalles de zapatillas Nike:', nike); // Verificar los detalles de las zapatillas
    renderizarDetalleNike(nike);
  } catch (error) {
    console.error('Error:', error);
  }
};

// Función para renderizar los detalles de las zapatillas Nike
const renderizarDetalleNike = (nike) => {
  const nikesDetailContainer = document.getElementById("nikeUnico");
  nikesDetailContainer.innerHTML = ""; // Limpiar el contenedor

  const nikeHTML = `
    <div class="card">
        <img src="${nike.img}" class="card-img-top" alt="">
        <div class="card-body">
            <h5 class="card-title">${nike.modelo}</h5>
            <p class="card-text">Precio: ${nike.precio}</p>
            <p class="card-text">Marca: ${nike.marca}</p>
            <p class="card-text">Número: ${nike.numero}</p>
            <p class="card-text">Stock: ${nike.stock}</p>
            <a href="javascript:history.back()" class="btn btn-primary">Volver</a>
        </div>
    </div>
  `;

  nikesDetailContainer.innerHTML = nikeHTML;
};

document.addEventListener("DOMContentLoaded", () => {
  obtenerDetallesNike(nikeModelo);
});


