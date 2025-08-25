// reusable code
function getElement(id) {
  return document.getElementById(id);
}
function getNumber(value) {
  return Number(value);
}

// Global count
let count = 0;
// DOM Traverse
const cartButtons = document.getElementsByClassName("cart-btn");
for (let cartButton of cartButtons) {
  cartButton.addEventListener("click", function () {
    const productImg = cartButton.parentNode.children[0].children[0].src;
    const productTitle = cartButton.parentNode.children[2].innerText;
    let productPrice = getNumber(
      cartButton.parentNode.children[3].children[0].innerText
    );
    let purchase = getNumber(getElement("total-price").innerText);
    console.log(purchase);

    // update total price
    let totalPrice = purchase + productPrice;
    getElement("total-price").innerText = totalPrice.toFixed(2);
    // update quantity
    count++;
    getElement("quantity").innerText = count;

    // cart-container
      const cartContainer=getElement('cart-container')

  const newCart= document.createElement('div')
    newCart.innerHTML=`<div class="flex justify-between items-center bg-gray-200 p-4 rounded-xl my-5">
                    <div>
                        <img src="${productImg}" alt="" class="w-1/2">
                    </div>
                    <div>
                    <h2>${productTitle}</h2>
                    <p class="text-center">${productPrice}Tk</p>
                    </div>
 </div>`
     cartContainer.appendChild(newCart)
  });
}

// add clear
getElement('reset-btn').addEventListener('click',function(){
          const cartContainer=getElement('cart-container')
          cartContainer.innerHTML=""
            getElement("total-price").innerText = 0
          getElement("quantity").innerText = 0

})






