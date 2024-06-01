


const params = new URLSearchParams(window.location.search);
const adidasModelo = params.get('modelo');

// Función para obtener los detalles de las zapatillas adidas por su modelo
const obtenerDetallesAdidas = async (modelo) => {
  try {
    const response = await fetch('https://run.mocky.io/v3/48081c79-6544-498f-be63-b8c3bee232f1');
    if (!response.ok) {
      throw new Error('La solicitud falló');
    }
    const adidas = await response.json();
    const adida = adidas.find(adida => adida.modelo === modelo);
    if (!adida) {
      throw new Error('Zapatillas adidas no encontradas');
    }
    console.log('Detalles de zapatillas adidas:', adida); // Verificar los detalles de las zapatillas
    renderizarDetalleAdidas(adida);
  } catch (error) {
    console.error('Error:', error);
  }
};

// Función para renderizar los detalles de las zapatillas adidas
const renderizarDetalleAdidas = (adida) => {
  const adidasDetailContainer = document.getElementById("adidasUnico");
  adidasDetailContainer.innerHTML = ""; // Limpiar el contenedor

  const adidasHTML = `
    <div class="card">
        <img src="${adida.img}" class="card-img-top" alt="">
        <div class="card-body">
            <h5 class="card-title">${adida.modelo}</h5>
            <p class="card-text">Precio: ${adida.precio}</p>
            <p class="card-text">Marca: ${adida.marca}</p>
            <p class="card-text">Numero: ${adida.numero}</p> 
            <p class="card-text">Stock: ${adida.stock}</p>
            <a href="javascript:history.back()" class="btn btn-primary btn-ver-style">Volver</a>
            <button class="btn btn-dark btn-style">Comprar</button>
        </div>
    </div>
  `;

  adidasDetailContainer.innerHTML = adidasHTML;
};

document.addEventListener("DOMContentLoaded", () => {
  obtenerDetallesAdidas(adidasModelo);
});


