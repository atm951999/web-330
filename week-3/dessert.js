/*
============================================
; Title: Assignment 3.2
; Author: Professor Krasso
; Date: 04 April 2021
; Modified By: Angela Martin
; Description: This program demonstrates the
; use of JavaScript modules.
;===========================================
*/

import { Product } from "./product.js";

// Create Dessert class.
export class Dessert extends Product
{
    constructor(name, price)
    {
        super(name, price);
    }
}