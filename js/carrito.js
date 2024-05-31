const btnCart = document.querySelector('.container-cart-icon')
const containerCartProducts = document.querySelector('.container-cart-products')

btnCart.addEventListener('click',()=>{
    containerCartProducts.classList.toggle('hidden-cart')
})

// ============================
const cartInfo = document.querySelector('.cart-product')
const rowProduct = document.querySelector('.row-product')
// lista de todos los contenedores de productos
//de aqui pa abajo no se q wea
const productList = document.querySelector('.container-items')
//arreglo
let allProducts = []

productList.addEventListener('click',e =>{
    console.log(e.target);
})