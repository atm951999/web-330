/*
============================================
; Title: Assignment 6.2 required-field.js
; Author: Professor Krasso
; Date: 25 April 2021
; Modified By: Angela Martin
; Description: This program demonstrates the
; use of JavaScript modules.
;===========================================
*/

// Create the RequiredField class and export it
export class RequiredField
{
    constructor(name, field)
    {
        this.name = name;
        this.field = field;
    }

    // Create the validate function.
    validate()
    {
        if (typeof this.field == "string" && this.field != "")
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
        return `${this.name} is a required field.`;
    }
}