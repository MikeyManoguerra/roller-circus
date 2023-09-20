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
    const size = getContainedImageSize(this.image);
    this.#setOverlaySize(this.overlay, size);

    window.addEventListener('resize', () => {
      const size = getContainedImageSize(this.image);
      this.#setOverlaySize(this.overlay, size);
    })
  }

  #setOverlaySize(overlay, { width, height }) {
    overlay.style.width = width + 'px';
    overlay.style.height = height + 'px';
  }
}

customElements.define('context-image', ContextImage);

function getContainedImageSize(img) {
  const { width, height, naturalWidth, naturalHeight } = img;

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


