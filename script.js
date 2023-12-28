
window.onload = function() {
    // Images for the slideshow
    const images = ['img.jpeg', 'img1.jpeg', 'img2.jpeg', 'img3.jpeg'];
    const imageContainer = document.getElementById('image-container');
    let currentImageIndex = 0;

    // Function to change image
    function changeImage() {
        imageContainer.innerHTML = '';
        const img = document.createElement('img');
        img.src = 'img/' + images[currentImageIndex];
        img.style.width = '250px'; // Adjusted width
        img.style.height = '300px'; // Adjusted height
        imageContainer.appendChild(img);

        // Update the index for the next image
        currentImageIndex = (currentImageIndex + 1) % images.length;
    }

    // Initial image setup
    changeImage();

    // Change image every 5 seconds
    setInterval(changeImage, 2000);

    // Popup message for the 'Add to Basket' button
    const addToBasketButton = document.getElementById('add-to-basket');
    addToBasketButton.onclick = function() {
        alert('Thanks for visiting us, we are currently on holidays until the 17th of January. Please contact us directly for new orders / new information. Thank you.');
    };
};

document.getElementById('more-info-button').addEventListener('click', function() {
    var productDetails = document.getElementById('product-details');
    if (productDetails.style.display === 'none') {
        productDetails.style.display = 'block';
    } else {
        productDetails.style.display = 'none';
    }
});
