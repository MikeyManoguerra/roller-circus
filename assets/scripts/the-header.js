class TheHeader extends HTMLElement {
  template = `
    <style>
    .heading-wrapper {
      display: flex;
      justify-content: center;
    }

    .heading-wrapper-inner {
      display: flex;
      flex-direction: column;
    }

    .heading-wrapper-inner > a {
      text-decoration: none;
    }

    .header__nav {
      display: flex;
      justify-content: space-between;
      gap: 1rem;

      padding-top: 20px;
      padding-bottom: 20px;
    }

    h1 {
      font-size: 35px;
      font-family: var(--serif);
    }


    @media (min-width:475px) {
      h1 {
        font-size: 50px;
      }

    }
    </style>

    <header class="header">
    <!-- simpler solution of absolute path, so we dont have to figure out absolute path at this time -->
      <div class="__layout">
        <nav class="header__nav">
          <div class="heading-wrapper">
            <div class="heading-wrapper-inner">
              <a href="https://rollercircusofficial.com">
                <h1>Roller Circus</h1>
              </a>
              <p>The Greatest Show on Wheels!</p>
            </div>
          </div>
          <a href="https://rollercircusofficial.com/programs">Programs</a>
        </nav>
      </div>
    </header>
 `


 connectedCallback(){
  // we want to take advantage of global styling, and dont have a need a for scoped shadow dom at this time
  // const template = document.createElement('template');
  // template.innerHTML = this.template;
  // this.shadowRoot.appendChild(template.content.cloneNode(true))

  this.innerHTML = this.template;
 }

}

customElements.define('the-header', TheHeader);
