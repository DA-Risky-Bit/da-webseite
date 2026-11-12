class header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  static get observedAttributes() {
    return ['activeSite'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'activeSite') {
      this.render();
    }
  }


  render() {
    const active = this.getAttribute('activeSite') || '';

    this.innerHTML = `
      <div class="header-inner">
        <a class="brand-link" href="index.html" aria-label="Risky Bit – Startseite">
            <img class="logo-icon" src="RBit_Logo_TerminalLock dark.svg" alt="Risky Bit Logo">
            <span class="brand-copy">
                <img class="logo-header" src="RBit_Text_Prompt dark.svg" alt="Risky Bit Logo">
                <span class="brand-caption">Diplomarbeit 2026/27</span>
            </span>
        </a>
        <nav class="site-nav" aria-label="Hauptnavigation">
            <a class="${active === 'home' ? 'is-current' : ''}" href="index.html">Überblick</a>
            <a class="${active === 'result' ? 'is-current' : ''}" href="ergebnis.html">Ergebnis</a>
            <a class="${active === 'features' ? 'is-current' : ''}" href="features.html">Features</a>
            <a class="${active === 'contact' ? 'is-current' : ''}" href="kontakt.html">Kontakt</a>
        </nav>
    </div>
    `;
  }
}

customElements.define('custom-header', header);