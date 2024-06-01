//copiar todo este code

const btnCart = document.querySelector('.container-cart-icon');
const containerCartProducts = document.querySelector('.container-cart-products');

btnCart.addEventListener('click',()=>{
    containerCartProducts.classList.toggle('hidden-cart');
})

// ============================
const cartInfo = document.querySelector('.cart-product');
const rowProduct = document.querySelector('.row-product');
// lista de todos los contenedores de productos
//de aqui pa abajo no se q wea
const productList = document.querySelector('.container-items');
//arreglo
let allProducts = [];

const valorTotal = document.querySelector('.total-pagar');

const countProduct = document.querySelector('#contador-productos');

productList.addEventListener('click',e =>{
    console.log("Profe si lee esto no funciona el carrito en las paginas de nike, adidas y newBalance, solo funciona en la principal, le prometo que funcionara como proyecto final");
    if(e.target.classList.contains('btn-add-function')){
        
        const product = e.target.parentElement;

        const infoProduct = {
            quantity: 1,
            title: product.querySelector('.title').textContent,
            price: product.querySelector('.price').textContent,
            stock: product.querySelector('.stock').textContent
        };

        const exits = allProducts.some(product => product.title === infoProduct.title )


        //funcion para que se sumen los objetos en la tienda
        if(exits){
            const products = allProducts.map(product =>{
                if(product.title === infoProduct.title){
                    product.quantity++;
                    return product
                }else{
                    return product
                }
            })
            allProducts = [...products];
        }else{
            allProducts = [...allProducts, infoProduct];
        }

        showHTML();

    }
});

rowProduct.addEventListener('click',(e) =>{
    if(e.target.classList.contains('icon-close')){
        const product = e.target.parentElement
        const title = product.querySelector('info-cart-product');

        allProducts = allProducts.filter(
            product => product.title !== title
        );

        console.log(allProducts);

        showHTML();
    }
});
///
// functioneliminarElementoPorPosicion(array, posicion) { if (posicion < 0 || posicion >= array.length) {
//      // Si la posición está fuera del rango del array, lanzamos un mensaje de errorreturn"La posición está fuera del rango del array"; } array.splice(posicion, 1); 
//      // Elimina 1 elemento en la posición dadareturn array; } // Ejemplo de uso:let miArray = ["a", "b", "c", "d", "e"]; console.log(eliminarElementoPorPosicion(miArray, 2)); 
//      // Elimina el elemento en la posición 2 ("c")
// };





//Funcion para mostrarl HTML

const showHTML = () =>{
    //limpiar html, para que no se repitan
    rowProduct.innerHTML='';

    let total = 0;
    let totalDeProductos = 0;

    allProducts.forEach(product => {
        const containerProduct = document.createElement('div')
        containerProduct.classList.add('card-product')

        containerProduct.innerHTML = `
            <div class="info-cart-product">
                 <span class="cantidad-producto-cart">${product.quantity}</span>
                  <p class="titulo-producto-card">${product.title}</p>
                 <span class="precio-producto-cart">${product.price}</span>
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke-width="1.5" 
                    stroke="currentColor"
                    class="icon-close"
                    >
            
                    <path 
                        stroke-linecap="round" 
                        stroke-linejoin="round"
                        d="M6 18 18 6M6 6l12 12" 
                    />
                </svg>  
            </div>
        
        
        `

        rowProduct.append(containerProduct);
    
        total = total + parseInt(product.quantity * product.price.slice(1));
        totalDeProductos = totalDeProductos + product.quantity;

    });

    valorTotal.innerText = `$${total}`
    countProduct.innerText = totalDeProductos;

};