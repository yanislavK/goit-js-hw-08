

// Add imports above this line
import { galleryItems } from './gallery-items.js';

// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const ul = document.querySelector('.gallery');

galleryItems.forEach(image => {
  const li = document.createElement(`li`);
  const a = document.createElement(`a`);
  const img = document.createElement(`img`);

  li.classList.add('gallery__item');
  a.classList.add('gallery__link');
  img.classList.add('gallery__image');

  a.setAttribute('href', `${image.original}`);
  img.setAttribute('src', `${image.preview}`);
  img.setAttribute('data-source', `${image.original}`);
  img.setAttribute('alt', `${image.description}`);

  a.appendChild(img);
  li.appendChild(a);

  ul.appendChild(li);
});


const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: `alt`,
  captionDelay: 250,
});
