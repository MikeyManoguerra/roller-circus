/*global bioData*/

bioData.bios.forEach(({ name, imageSrc, description }) => {
  const el = document.createElement('context-image')
  el.setAttribute('data-name', name)
  el.setAttribute('image-src', imageSrc)
  el.setAttribute('description', description)
  document.getElementById('program-bios').appendChild(el);
});
