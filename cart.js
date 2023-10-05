const productsContainer = document.querySelector(".products-container")

const deleteProduct = e => {
   if (e.target.classList.contains ("delete-btn")) {
      const product = e.target.closest(".product")
      product.remove()
   }
}

const addItem = e => {   
   if (e.target.classList.contains("plus-btn")) {
      const quantityItem = e.target.nextElementSibling
      // priceItem gets the element <p class="item-price" value="104">104</p>
      const priceItem = quantityItem.parentElement.nextElementSibling.lastElementChild

      let currentQuantity = parseInt(quantityItem.textContent)
      // currentPrice gets the number in value by default, 104
      let currentPrice = priceItem.getAttribute("value")

      currentQuantity++

      quantityItem.textContent = currentQuantity
      priceItem.textContent = currentPrice * currentQuantity
   }
}

const decreaseItem = e => {   
   if (e.target.classList.contains("minus-btn")) {
      const quantityItem = e.target.previousElementSibling
      const priceItem = quantityItem.parentElement.nextElementSibling.lastElementChild

      let currentQuantity = parseInt(quantityItem.textContent)
      let currentPrice = priceItem.getAttribute("value")

      
      // stop decreasing when number is 0
      if (currentQuantity > 0 ) {
         currentQuantity--
         priceItem.textContent = currentPrice * currentQuantity
      }
      quantityItem.textContent = currentQuantity
   }
}

const handleClick = e => {
   deleteProduct(e)
   addItem(e)
   decreaseItem(e)
}

productsContainer.addEventListener("click", handleClick)
