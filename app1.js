
var productPrice = 50;

function addToCartBtnClicked()
{
    var element = this;

    var price = this.getAttribute('data-product-price');
    var name = this.getAttribute('data-product-name');

    var productCost = document.querySelector(`[data-product-name-price="${name}"]`);
    var oldProductCost = document.querySelector(`[data-product-name-price="${name}"]`).innerHTML;
    productCost.innerHTML = parseInt(oldProductCost) + parseInt(price);

}



document.addEventListener('DOMContentLoaded', function() {
    var addToCartBtn = document.getElementsByClassName('addToCartBtn');
    for (var i = 0; i < addToCartBtn.length; i++) {
        addToCartBtn[i].addEventListener("click", addToCartBtnClicked);
    }
    console.log(addToCartBtn);
}, false);
