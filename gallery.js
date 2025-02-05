document.addEventListener('DOMContentLoaded', () => {
    const galleryContainer = document.querySelector('.gallery-container');
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const closeModal = document.getElementById('close-modal');

    // Simulated image source (replace with your own image URLs or fetch them)
    const imageUrls = [
        'https://via.placeholder.com/300x200?text=Image+1',
        'https://via.placeholder.com/300x200?text=Image+2',
        'https://via.placeholder.com/300x200?text=Image+3',
        'https://via.placeholder.com/300x200?text=Image+4',
        'https://via.placeholder.com/300x200?text=Image+5',
        'https://via.placeholder.com/300x200?text=Image+6',
        'https://via.placeholder.com/300x200?text=Image+7',
        'https://via.placeholder.com/300x200?text=Image+8',
        'https://via.placeholder.com/300x200?text=Image+9'
    ];

    // Function to create gallery items
    function createGallery(images) {
        images.forEach(url => {
            const img = document.createElement('img');
            img.src = url;
            img.alt = 'Image';
            img.classList.add('gallery-item');
            img.setAttribute('loading', 'lazy'); // Lazy loading

            // Convert image to BLOB asynchronously
            fetch(url)
                .then(response => response.blob())
                .then(blob => {
                    const objectURL = URL.createObjectURL(blob);
                    img.src = objectURL;
                });

            img.addEventListener('click', () => {
                modal.style.display = 'block';
                modalImg.src = img.src;
            });

            galleryContainer.appendChild(img);
        });
    }

    // Close modal on click outside image or close button
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Initialize gallery
    createGallery(imageUrls);
});
