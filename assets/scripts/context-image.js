class ContextImage extends HTMLElement {
  // for window resize listener
  image = null;
  overlay = null;

  connectedCallback() {
    const fragment = document.getElementById('context-image');
    const instance = document.importNode(fragment.content, true);
    this.image = instance.querySelector('.context-image__image');
    this.overlay = instance.querySelector('.context-image__image-overlay');

    this.#initElementContent(instance);

    // Append the instance ot the DOM
    document.getElementById('program-bios').appendChild(instance);
    this.#initImageOverlay();
  }

  disconnectedCallback() {
    window.removeEventListener('resize');
  }

  #initElementContent(instance) {
    // Add relevant content to the template
    const imageSrc = this.getAttribute("image-src")

    const description = this.getAttribute("description")
    const dataName = this.getAttribute("data-name")

    instance.querySelector('.context-image__heading').innerText = dataName;
    instance.querySelector('.context-image__description').innerText = description;

    this.image.src = '../../' + imageSrc;
    this.image.alt = 'promo image of ' + dataName.name;
  }

  #initImageOverlay() {
    this.#setOverlaySize(this.overlay);

    // uncached page load fix
    setTimeout(() => {
      this.#setOverlaySize(this.overlay);
    }, 2000);

    window.addEventListener('resize', () => {
      this.#setOverlaySize(this.overlay);
    })
  }

  #setOverlaySize(overlay, ) {
    const { width, height } = getContainedImageSize(this.image);

    overlay.style.width = width + 'px';
    overlay.style.height = height + 'px';
  }
}

customElements.define('context-image', ContextImage);

const NO_DIMENSIONS = { width: 0, height: 0, }

function getContainedImageSize(img) {
  const { width, height, naturalWidth, naturalHeight } = img;
  if (!img) return NO_DIMENSIONS;
  if (![width, height, naturalWidth, naturalHeight].every(Boolean)) return NO_DIMENSIONS;

  const ratio = naturalWidth / naturalHeight;
  let actualWidth = height * ratio;
  let actualHeight = height;

  if (actualWidth > width) {
    actualWidth = width;
    actualHeight = width / ratio;
  }

  return {
    width: actualWidth,
    height: actualHeight,
  };
}


