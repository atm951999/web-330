class Footer extends HTMLElement
{
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <div id="footer">
                <p>
                    <nav id="links">
                        <a href="https://github.com/atm951999" target="_blank">My GitHub</a> |
                        <a href="https://www.bellevue.edu/degrees/bachelor/web-development-bs/" target="_blank">Bellevue University Web Development</a> |
                        <a href="/js/">Web 330's YouTube</a> |
                        <a href="https://github.com/buwebdev/web-330" target="_blank">Web 330's GitHub</a>
                    </nav>

                    Copyright &copy; 2021 Angela Martin
                </p>
            </div>
        `;
    }
}

customElements.define("footer-component", Footer);