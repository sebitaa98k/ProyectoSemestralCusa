



export async function obtenerDetallesNewBalance(modelo) {
  try {
    const response = await fetch('https://run.mocky.io/v3/8ff4b5ca-31ab-470e-983a-3ac87b17fa80');
    if (!response.ok) {
      throw new Error('La solicitud falló');
    }
    const newBalance = await response.json();
    const zapatilla = newBalance.find(item => item.modelo === modelo);
    if (!zapatilla) {
      throw new Error('Zapatillas New Balance no encontradas');
    }
    console.log('Detalles de zapatillas New Balance:', zapatilla); // Verificar los detalles de las zapatillas
    renderizarDetalleNewBalance(zapatilla);
  } catch (error) {
    console.error('Error:', error);
  }
}

// Función para renderizar los detalles de las zapatillas New Balance
function renderizarDetalleNewBalance(zapatilla) {
  const newBalanceDetailContainer = document.getElementById("newBalanceUnico");
  newBalanceDetailContainer.innerHTML = ""; // Limpiar el contenedor

  const newBalanceHTML = `
    <div class="card">
        <img src="${zapatilla.img}" class="card-img-top" alt="">
        <div class="card-body">
            <h5 class="card-title">${zapatilla.modelo}</h5>
            <p class="card-text">Precio: ${zapatilla.precio}</p>
            <p class="card-text">Marca: ${zapatilla.marca}</p>
            <p class="card-text">Numero: ${zapatilla.numero}</p>
            <p class="card-text">Stock: ${zapatilla.stock}</p>
            <a href="javascript:history.back()" class="btn btn-primary">Volver</a>
        </div>
    </div>
  `;

  newBalanceDetailContainer.innerHTML = newBalanceHTML;
}

document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const modelo = params.get('modelo');
  obtenerDetallesNewBalance(modelo);
});


