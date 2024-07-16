'use strict';
/////////biblioteki////////////
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
//////////błąd//////////////
iziToast.error({
  position: 'topRight',
  icon: 'none',
  message:
    'Sorry, there are no images matching your search query. Please try again!',
  messageColor: 'white',
  messageSize: '16px',
  backgroundColor: '#EC3E3E',
  theme: 'dark',
});
