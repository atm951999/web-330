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

// Create Bill class.
export class Bill {
  constructor() {
    // Create empty arrays.
    this._beverages = [];
    this._appetizers = [];
    this._mainCourses = [];
    this._desserts = [];
  }

  // Add beverage to beverage array.
  addBeverage(beverage) {
    this._beverages.push(beverage);
  }

  // Add appetizer to appetizer array.
  addAppetizer(appetizer) {
    this._appetizers.push(appetizer);
  }

  // Add main course to main course array.
  addMainCourse(mainCourse) {
    this._mainCourses.push(mainCourse);
  }

  // Add dessert to dessert array.
  addDessert(dessert) {
    this._desserts.push(dessert);
  }

  // Get total price.
  getTotal() {
    // Create total variable.
    let total = 0;

    // Create beverageTotal variable.
    let beverageTotal = this._beverages.forEach(function (beverage) {
      total += parseFloat(beverage.price);
    });

    // Create appetizerTotal variable.
    let appetizerTotal = this._appetizers.forEach(function (appetizer) {
      total += parseFloat(appetizer.price);
    });

    // Create mainCourseTotal variable.
    let mainCourseTotal = this._mainCourses.forEach(function (mainCourse) {
      total += parseFloat(mainCourse.price);
    });

    // Create dessertTotal variable.
    let dessertTotal = this._desserts.forEach(function (dessert) {
      total += parseFloat(dessert.price);
    });

    // Return total with fixed decimal point to two places.
    return total.toFixed(2);
  }
}
