/*
============================================
; Title: Assignment 4.2
; Author: Professor Krasso
; Date: 10 April 2021
; Modified By: Angela Martin
; Description: This program demonstrates the
; use of JavaScript modules.
;===========================================
*/

import { CalorieConverter } from "./calorie-converter.js";
// Create the FoodModel class.
export class FoodModel
{
    constructor(id, name, calories)
    {
        this.id = id;
        this.name = name;
        this.calories = calories;
    }
}