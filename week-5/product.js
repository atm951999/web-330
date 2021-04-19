/*
============================================
; Title: Assignment 5.2 product.js
; Author: Professor Krasso
; Date: 18 April 2021
; Modified By: Angela Martin
; Description: This program demonstrates the
; use of JavaScript modules.
;===========================================
*/

// Create the Product class and export it
export class Product
{
    constructor(name, price)
    {
        this.name = name;
        this.price = price;
        this.id = Math.random().toString(16).slice(2);
    }
}