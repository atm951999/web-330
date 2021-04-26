/*
============================================
; Title: Assignment 6.2 float-min-field.js
; Author: Professor Krasso
; Date: 25 April 2021
; Modified By: Angela Martin
; Description: This program demonstrates the
; use of JavaScript modules.
;===========================================
*/

// Create the FloatMinField class and export it.
export class FloatMinField
{
    constructor(name, field, min)
    {
        this.name = name;
        this.field = field;
        this.min = min;
    }

    // Create the validate function.
    validate()
    {
        if (this.field > this.min)
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
        return `${this.name} must be more than ${this.min}. You entered ${this.field}`;
    }
}