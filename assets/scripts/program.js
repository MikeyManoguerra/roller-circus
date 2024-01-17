/*global castBios*/

// loop over the cast and create a context image component for each, append to dom
function build(slugs) {
  slugs.forEach(slug => {
    try {
      const { name, imageSrc, description } = castBios.find(bio => bio.slug === slug);
      const el = document.createElement('context-image')
      el.setAttribute('data-name', name)
      el.setAttribute('image-src', imageSrc)
      el.setAttribute('description', description)
      document.getElementById('program-bios').appendChild(el);
    } catch (error) {
      console.log(error);
    }
  });
}

const program = (() => ({
  build,
}))();
