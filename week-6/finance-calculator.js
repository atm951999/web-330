/*
============================================
; Title: Assignment 6.2 finance-calculator.js
; Author: Professor Krasso
; Date: 25 April 2021
; Modified By: Angela Martin
; Description: This program demonstrates the
; use of JavaScript modules.
;===========================================
*/

// Create the FinanceCalculator class and export it.
export class FinanceCalculator
{   
    // Create a static property named MONTHS_IN_YEAR.
    static MONTHS_IN_YEAR = 12;

    // Create a static function called calculateFutureValue.
    static calculateFutureValue(monthlyPayment, rate, years)
    {   
        // Create months variable.
        let months = (years * this.MONTHS_IN_YEAR);
        
        // Create interestRate variable.
        let interestRate = 1 + (rate / 100);

        // Create presentValue variable.
        let presentValue = (monthlyPayment * months);

        // Create futureValue variable.
        let futureValue = (presentValue * (Math.pow(interestRate, months))).toFixed(2);

        // Return futureValue
        return futureValue;
    }

    // Create static convertToCurrency function.
    static convertToCurrency(field)
    {
        let currencyFormatter = new Intl.NumberFormat("en-US", 
        {
            style: "currency",
            currency: "USD"            
        });

        return currencyFormatter.format(field);
    }
}





