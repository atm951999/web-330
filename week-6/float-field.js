/*
============================================
; Title: Assignment 6.2 float-field.js
; Author: Professor Krasso
; Date: 25 April 2021
; Modified By: Angela Martin
; Description: This program demonstrates the
; use of JavaScript modules.
;===========================================
*/

// Create the FloatField class and export it.
export class FloatField
{
    constructor(name, field)
    {
        this.name = name;
        this.field = field;
    }

    // Create the validate function.
    validate()
    {
        const value = parseFloat(this.field);
        if (isNaN(value))
        {
            return false;
        }
        else
        {
            return true;
        }
    }

    // Create the getMessage function.
    getMessage()
    {
        return `${this.name} must be a float value. You entered ${this.field}`;
    }

}