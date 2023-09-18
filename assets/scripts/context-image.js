/*global bioData*/

const fragment = document.getElementById('context-image');

bioData.bios.forEach(bio => {
  // Create an instance of the template content
  const instance = document.importNode(fragment.content, true);
  // Add relevant content to the template
  instance.querySelector('.context-image__heading').innerText = bio.name;
  instance.querySelector('.context-image__description').innerText = bio.description;
  const img = instance.querySelector('.context-image__image');
  img.src = bio.imageSrc;
  img.alt = 'promo image of ' + bio.name;
  // Append the instance ot the DOM
  document.getElementById('program-bios').appendChild(instance);
});
