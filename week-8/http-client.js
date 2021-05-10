 /*
============================================
; Title: Assignment 8.2
; Author: Professor Krasso
; Date: 9 May 2021
; Modified By: Angela Martin
; Description: This program demonstrates the
; use of JavaScript types, values, and
; and variables in an application.
;===========================================
*/

// Export the HttpClient class.
export class HttpClient
{
    async get(url, params = "") {
        url = new URL(url);

        url.search = new URLSearchParams(params);

        const res = await fetch(url.toString(), {
            method: "GET",
        }).then(res => res.text());
        return JSON.parse(res);
    }
}