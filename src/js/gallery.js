'use strict';

///////// Biblioteki //////////
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

///////// Zmienne globalne //////////
const searchForm = document.querySelector('.form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

///////// Event Listener dla formularza wyszukiwania //////////
searchForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const searchTerm = event.target.querySelector('input').value.trim();
  if (!searchTerm) {
    iziToast.error({
      position: 'topRight',
      message: 'Please complete the form',
    });
    return;
  }

  loader.style.display = 'block'; // Pokazanie wskaźnika ładowania
  gallery.innerHTML = ''; // Czyszczenie poprzednich wyników wyszukiwania

  fetchImages(searchTerm)
    .then(response => {
      if (response.totalHits === 0) {
        iziToast.error({
          position: 'topRight',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
        loader.style.display = 'none';
        return;
      }

      displayImages(response.hits);
      loader.style.display = 'none'; // Ukrycie wskaźnika ładowania

      const lightbox = new SimpleLightbox('.gallery a');
      lightbox.refresh(); // Odświeżenie SimpleLightbox
    })
    .catch(error => {
      iziToast.error({
        position: 'topRight',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
      loader.style.display = 'none'; // Ukrycie wskaźnika ładowania
      console.error(error);
    });
});

///////// Funkcja do pobierania obrazów z backendu //////////
function fetchImages(query) {
  const apiKey = '44961445-711bc8a23588390ccc23a177e';
  const url = `https://pixabay.com/api/?key=${apiKey}&q=${query}&image_type=photo&pretty=true`;

  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  });
}

///////// Funkcja do wyświetlania obrazów //////////
function displayImages(images) {
  const markup = images
    .map(({ webformatURL, largeImageURL, tags }) => {
      return `
      <a href="${largeImageURL}" class="gallery-item">
        <img src="${webformatURL}" alt="${tags}" loading="lazy"/>
      </a>
    `;
    })
    .join('');

  gallery.innerHTML = markup;
}
