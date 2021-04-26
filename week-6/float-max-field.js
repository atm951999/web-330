/*
============================================
; Title: Assignment 6.2 float-max-field.js
; Author: Professor Krasso
; Date: 25 April 2021
; Modified By: Angela Martin
; Description: This program demonstrates the
; use of JavaScript modules.
;===========================================
*/

// Create the FloatMaxField class and export it.
export class FloatMaxField
{
    constructor(name, field, max)
    {
        this.name = name;
        this.field = field;
        this.max = max;
    }

    // Create the validate function.
    validate()
    {
        if (this.field < this.max)
        {
            return true;
        }
        else
        {
            return false;
        }
    }

    // Create the getMessage function.
    getMessage()
    {
        return `${this.name} must be less than ${this.max}. You entered ${this.field}`;
    }
}