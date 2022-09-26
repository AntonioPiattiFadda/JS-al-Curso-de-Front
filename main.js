
const menuEmail = document.querySelector (".navbar-email");
const desktopMenu = document.querySelector (".desktop-menu");
const mobileMenu = document.querySelector (".mobile-menu");
const menuHamIcon = document.querySelector (".menu");
const menuCarrito = document.querySelector (".navbar-shopping-cart");
const productDetail = document.querySelector( ".product-detail-cart");
const cardsContainer = document.querySelector ('.cards-container');
const productInfoAside = document.querySelector('.product-detail');
const cerrarProductInfoAside = document.querySelector('.product-detail-close');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarrito.addEventListener('click', toggleProductDetail);


function ocultarDetalle(){
  productInfoAside.classList.add('inactive');
}

cerrarProductInfoAside.addEventListener('click', ocultarDetalle);

function mostrarDetalle(){
  if (productInfoAside.classList.contains('inactive')){
    productInfoAside.classList.remove('inactive');
    desktopMenu.classList.add('inactive');
    productDetail.classList.add('inactive');
  }
}

function toggleDesktopMenu() {
  const isProductDetailClose = productDetail.classList.contains("inactive");
  ocultarDetalle();

  if(!isProductDetailClose){
    productDetail.classList.add("inactive");
  }
  
  desktopMenu.classList.toggle("inactive");
}
function toggleMobileMenu() {
  const isProductDetailClose = productDetail.classList.contains("inactive");
  const isproductInfoAside = productInfoAside.classList.contains("inactive");

  if (!isproductInfoAside){
    productInfoAside.classList.add("inactive");
  }
  

  if(!isProductDetailClose){
    productDetail.classList.add("inactive");
  }
  mobileMenu.classList.toggle("inactive");
}

function toggleProductDetail(){
  const isdesktopMenu = desktopMenu.classList.contains("inactive");
  const ismobileMenu = mobileMenu.classList.contains("inactive");
  const isproductInfoAside = productInfoAside.classList.contains("inactive");

  if (!isproductInfoAside){
    productInfoAside.classList.add("inactive");
  }
  if(!ismobileMenu){
    mobileMenu.classList.add("inactive");
  }
  if(!isdesktopMenu){
    desktopMenu.classList.add("inactive");
  }
  productDetail.classList.toggle("inactive");
}

const productList = [];
  productList.push({
    nombre : "Bicicleta",
    precio : 120,
    img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  })
  productList.push({
    nombre : "Monopatin",
    precio : 250,
    img: "https://www.peabody.com.ar/images/monopatin-electrico-pe-me01_5_700x500.jpg",
  })
  productList.push({
    nombre : "auto",
    precio : 2050,
    img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  })

  for (product of productList){
    const productcard = document.createElement("div");
    productcard.classList.add("product-card");

   

  
    const productImage = document.createElement('img');
    productImage.setAttribute("src", product.img);
    productImage.addEventListener('click', mostrarDetalle);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement('div');

    const productInfoPrice = document.createElement('div');
    productInfoPrice.innerText = '$' + product.precio;

    const productInfoName= document.createElement('div');
    productInfoName.innerText = product.nombre;

  

    const productIconcontainter = document.createElement ('figure');
    const productIcon = document.createElement ('img');
    productIcon.setAttribute ('src', './icons/bt_add_to_cart.svg');

    productcard.appendChild(productImage);
    productcard.appendChild(productInfo);
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productIconcontainter);
    productInfoDiv.appendChild(productInfoPrice);
    productInfoDiv.appendChild(productInfoName);
    productIconcontainter.appendChild(productIcon);
    cardsContainer.appendChild(productcard);
    
  }
  
  