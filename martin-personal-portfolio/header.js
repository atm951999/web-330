/*
============================================
; Title: header.js
; Author: Professor Krasso
; Date: 16 May 2021
; Modified By: Angela Martin
; Description: Header component
;===========================================
*/

// Create Header component.
class Header extends HTMLElement
{
    constructor() {
        super();
    }
    
    // Call connectedCallback function.
    connectedCallback() {
        this.innerHTML = `
            <nav id="nav-bar">
                <ul id="nav-list">
                    <li>
                    <a href="martin-tech-value-stream.html">DevOps Presentations</a>
                    </li>                    
                    <li>
                        <a href="martin-api-unit-tests.html">API Unit Tests</a>
                    </li>
                    <li>
                        <a href="martin-database-diagrams.html">Database Diagrams</a>
                    </li>
                    <li>
                        <a href="martin-projects.html">Projects</a>
                    </li>
                    <li>
                        <a href="martin-resume.html">Resume</a>
                    </li>
                    <li>
                        <a href="martin-about.html">About</a>
                    </li>
                    <li>
                        <a href="martin-index.html">Home</a>
                    </li>
                    <li style="float:left; font-family: 'Arizonia'; font-size: 32px;">
                        <a href="martin-about.html">Angela Martin</a>
                    </li>
                </ul>
            </nav>
        `;
    }
}

customElements.define("header-component", Header);