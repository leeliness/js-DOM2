const gallery = document.getElementById('gallery');
const loadMoreButton = document.getElementById('loadMore');
const clearGalleryButton = document.getElementById('clearGallery');
const removeLastButton = document.getElementById('removeLast');
const reverseGalleryButton = document.getElementById('reverseGallery');

let images = [];

const loadImages = async (count = 4) => {
    const response = await fetch(`https://picsum.photos/v2/list?page=1&limit=${count}`);
    const data = await response.json();
    images.push(...data);
    renderGallery();
};

const renderGallery = () => {
    gallery.innerHTML = '';
    images.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = image.download_url;
        imgElement.alt = image.author;
        gallery.appendChild(imgElement);
    });
};

loadImages();

loadMoreButton.addEventListener('click', () => loadImages());
clearGalleryButton.addEventListener('click', () => {
    images = [];
    renderGallery();
});
removeLastButton.addEventListener('click', () => {
    images.pop();
    renderGallery();
});
reverseGalleryButton.addEventListener('click', () => {
    images.reverse();
    renderGallery();
});
