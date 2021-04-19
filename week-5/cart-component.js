/*
============================================
; Title: Assignment 5.2 cart-component.js
; Author: Professor Krasso
; Date: 18 April 2021
; Modified By: Angela Martin
; Description: This program demonstrates the
; use of JavaScript modules.
;===========================================
*/

// Create the CartComponent class and extend it to the HTML Element
class CartComponent extends HTMLElement 
{
    constructor()
    {
        super();
        
        
    }

    // Call the connectedCallback function.
    connectedCallback()
        {   
            // Display the cart icon and the cart-count of items in the shopping cart.
            this.innerHTML = `<i id="cartIcon" class="fa fa-shopping-cart"></i> (<span id="cart-count"></span>)`;
        }
}


// Define custom element.
customElements.define("cart-component", CartComponent);