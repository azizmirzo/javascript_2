window.addEventListener(type:'DOMContentLoaded',listener: function() {
  let products = document.querySelectorAll(selectors:'.product'),
      buttons = document.querySelectorAll(selectors:'button'),
      openBtn = document.querySelector(selectors:'.open');

  function createCart() {
     let cart = document.createElement(tagName:'div'),
         field = document.createElement(tagName:'div'),
         heading = document.createElement(tagName:'h2'),
         closeBtn = document.createElement(tagName:'button');
     
     cart.classList.add('cart')
     field.classList.add('cart-field')
     closeBtn.classList.add('close')

     heading.textContent = 'В нашей корзине'
     closeBtn.textContent = 'Закрыть'

     document.body.appendChild(cart)
     cart.appendChild(heading)
     cart.appendChild(field)
     cart.appendChild(closeBtn)
  } 
  createCart()

  let cart = document.querySelector(selectors: '.cart'),
      closeBtn = document.querySelector(selectors:'.close'),
      field = document.querySelector(selectors:'.cart-fiald')

  openBtn.addEventListener(type: 'click', listener: function () {
     cart.style.display = 'block'
  })
  closeBtn.addEventListener(type:'click', listener:function () {
     cart.style.display = 'none'
  })

  buttons.forEach(callbacfn:function(item :HTMLButtonElement, i :number) {
    item.addEventListener(type:'click', listener: function () {
      let cloneItem = products[i].cloneNode(deep: true),
         btn = cloneItem.querySelector(selectors: 'button');

      btn.remove()
      field.appendChild(cloneItem)
      products[i].remove() 
    })
  })
})