/*
============================================
; Title: Assignment 3.2
; Author: Professor Krasso
; Date: 11 April 2021
; Modified By: Angela Martin
; Description: This program demonstrates the
; use of JavaScript modules.
;===========================================
*/

// Import FoodModel class.
import { FoodModel } from "./food-model.js";

// Create CalorieConverter class.
export class CalorieConverter {
    // Create static variable array.
    static data = 
    [
        new FoodModel(1007, "Egg", 78),
        new FoodModel(1008, "Apple", 95),
        new FoodModel(1009, "Hamburger", 354),
        new FoodModel(1010, "Fries", 400),
        new FoodModel(1011, "Banana", 105),
        new FoodModel(1012, "Soda", 150),
    ];

    static find(searchString)
    {
        return this.data.filter(foodModel => foodModel.name.toLowerCase().includes(searchString.toLowerCase()));
    }
}

