/**
 * Image Popover Script
 * Makes images clickable and displays them in a full-size overlay
 */

(function() {
    'use strict';

    // Create modal overlay and elements
    function createModal() {
        const modal = document.createElement('div');
        modal.id = 'image-modal';
        modal.className = 'image-modal';
        modal.innerHTML = `
            <div class="modal-content">
                <span class="modal-close">&times;</span>
                <img class="modal-image" src="" alt="">
            </div>
        `;
        document.body.appendChild(modal);
        return modal;
    }

    // Initialize when DOM is ready
    function init() {
        const modal = createModal();
        const modalImg = modal.querySelector('.modal-image');
        const closeBtn = modal.querySelector('.modal-close');

        // Get all images in articles
        const images = document.querySelectorAll('article img');

        // Add click/touch handlers to each image
        images.forEach(img => {
            // Make images look clickable
            img.style.cursor = 'pointer';
            
            // Click/touch handler
            img.addEventListener('click', function() {
                modal.style.display = 'flex';
                modalImg.src = this.src;
                modalImg.alt = this.alt;
                // Prevent body scroll when modal is open
                document.body.style.overflow = 'hidden';
            });
        });

        // Close modal when clicking the X button
        closeBtn.addEventListener('click', function() {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });

        // Close modal when clicking outside the image
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });

        // Close modal on ESC key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && modal.style.display === 'flex') {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    }

    // Run when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
