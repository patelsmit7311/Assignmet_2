// Array of image data
const imagesData = [
  {
    large: 'images/flowers-pink-large.jpg',
    small: 'images/flowers-pink-small.jpg',
    caption: 'Sunflowers in the hamlet Dernekamp, Kirchspiel, Dülmen, North Rhine-Westphalia, Germany',
  },
  {
    large: 'images/flowers-purple-large.jpg',
    small: 'images/flowers-purple-small.jpg',
    caption: 'Poppies in cornfield, Dülmen, North Rhine-Westphalia, Germany',
  },
  {
    large: 'images/flowers-red-large.jpg',
    small: 'images/flowers-red-small.jpg',
    caption: 'Daffodils in Sentmaring park, Münster, North Rhine-Westphalia, Germany',
  },
  {
    large: 'images/flowers-white-large.jpg',
    small: 'images/flowers-white-small.jpg',
    caption: 'Sentmaring Park, Münster, North Rhine-Westphalia, Germany',
  },
  {
    large: 'images/flowers-yellow-large.jpg',
    small: 'images/flowers-yellow-small.jpg',
    caption: 'Market in Münster, North Rhine-Westphalia, Germany',
  },
];

// Get references to the featured image, caption, and thumbnail list
const featuredImage = document.getElementById('featuredImage');
const imageCaption = document.getElementById('imageCaption');
const thumbnailList = document.getElementById('thumbnailList');

// Function to update the main featured image and caption
function updateFeaturedImage(index) {
  featuredImage.src = imagesData[index].large;
  imageCaption.textContent = imagesData[index].caption;
}

// Add event listeners to each thumbnail for updating the main image
thumbnailList.querySelectorAll('li img').forEach((thumbnail, index) => {
  thumbnail.addEventListener('click', () => {
    updateFeaturedImage(index);
  });
});
