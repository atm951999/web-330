/*
============================================
; Title: Assignment 6.2 validator.js
; Author: Professor Krasso
; Date: 25 April 2021
; Modified By: Angela Martin
; Description: This program demonstrates the
; use of JavaScript modules.
;===========================================
*/

// Import needed classes.
import { RequiredField } from "./required-field.js";
import { FloatField } from "./float-field.js";
import { FloatMinField } from "./float-min-field.js";
import { FloatMaxField } from "./float-max-field.js";

// Create Validator class
export class Validator
{
    constructor(name, field)
    {
        this.name = name;
        this.field = field;
        this._validators = [];
        this._messages = [];
    }

    //Create addRequiredField function.
    addRequiredField()
    {
        this._validators.push(new RequiredField(this.name, this.field));
    }

    // Create addRequiredFloatField function.
    addRequiredFloatField()
    {
        this._validators.push(new FloatField(this.name, this.field));
    }

    // Create addFloatMinField function.
    addFloatMinField(min)
    {
        this._validators.push(new FloatMinField(this.name, this.field, min));
    }

    // Create addFloatMaxField function.
    addFloatMaxField(max)
    {
        this._validators.push(new FloatMaxField(this.name,this.field, max));
    }

    // Create validate function
    validate()
    {
      this._messages = [];
      for(let validate of this._validators)
      {
          let valid = validate.validate();
          if (valid == false)
          {
              let message = validate.getMessage();
              this._messages.push(message);
              return false;
          }
      } 
      if (this._messages.length == 0)
      {
          return true;
      } 
      else
      {
          return false;
      }
    }
}