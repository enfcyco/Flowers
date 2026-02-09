/**
 * Image Popover Script
 * Makes images clickable and displays them in a full-size overlay
 * Includes accessibility features: focus trap, keyboard navigation, and screen reader support
 */

(function() {
    'use strict';

    let lastFocusedElement = null;

    // Create modal overlay and elements
    function createModal() {
        const modal = document.createElement('div');
        modal.id = 'image-modal';
        modal.className = 'image-modal';
        modal.setAttribute('role', 'dialog');
        modal.setAttribute('aria-modal', 'true');
        modal.setAttribute('aria-label', 'Image viewer');
        modal.innerHTML = `
            <div class="modal-content">
                <span class="modal-close" role="button" tabindex="0" aria-label="Close image viewer">&times;</span>
                <img class="modal-image" src="" alt="">
            </div>
        `;
        document.body.appendChild(modal);
        return modal;
    }

    // Trap focus within modal
    function trapFocus(modal) {
        const focusableElements = modal.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstFocusable = focusableElements[0];
        const lastFocusable = focusableElements[focusableElements.length - 1];

        modal.addEventListener('keydown', function(e) {
            if (e.key !== 'Tab') return;

            if (e.shiftKey) {
                if (document.activeElement === firstFocusable) {
                    lastFocusable.focus();
                    e.preventDefault();
                }
            } else {
                if (document.activeElement === lastFocusable) {
                    firstFocusable.focus();
                    e.preventDefault();
                }
            }
        });
    }

    // Close modal helper function
    function closeModal(modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
        // Return focus to the element that opened the modal
        if (lastFocusedElement) {
            lastFocusedElement.focus();
            lastFocusedElement = null;
        }
    }

    // Open modal helper function
    function openModal(modal, modalImg, img) {
        lastFocusedElement = img;
        modal.style.display = 'flex';
        modalImg.src = img.src;
        modalImg.alt = img.alt;
        // Prevent body scroll when modal is open
        document.body.style.overflow = 'hidden';
        // Focus the close button for keyboard users
        const closeBtn = modal.querySelector('.modal-close');
        closeBtn.focus();
    }

    // Initialize when DOM is ready
    function init() {
        const modal = createModal();
        const modalImg = modal.querySelector('.modal-image');
        const closeBtn = modal.querySelector('.modal-close');

        // Set up focus trap
        trapFocus(modal);

        // Get all images in articles
        const images = document.querySelectorAll('article img');

        // Add click/touch handlers to each image
        images.forEach(img => {
            img.addEventListener('click', function() {
                openModal(modal, modalImg, this);
            });

            // Add keyboard support for images
            img.addEventListener('keydown', function(e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    openModal(modal, modalImg, this);
                }
            });
        });

        // Close modal when clicking the X button
        closeBtn.addEventListener('click', function() {
            closeModal(modal);
        });

        // Close modal when pressing Enter or Space on close button
        closeBtn.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                closeModal(modal);
            }
        });

        // Close modal when clicking outside the image
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeModal(modal);
            }
        });

        // Close modal on ESC key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && modal.style.display === 'flex') {
                closeModal(modal);
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
