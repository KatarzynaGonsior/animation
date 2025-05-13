document.addEventListener('DOMContentLoaded', function() {
    // SVG definitions for the book and finger
    const bookSVG = `
    <svg width="330" height="171" viewBox="0 0 330 171" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_d_54_7476)">
    <g clip-path="url(#clip0_54_7476)">
    <rect x="5" y="3" width="320" height="161.574" rx="1.39891" fill="white"/>
    <rect id="photo1" x="207" y="14" width="99" height="62" stroke="#D2DAE0" stroke-width="4"/>
    <path id="photo1-img" d="M243.244 40.5468L253.866 52.9784V52.9137L269.193 32L286 59H230L243.244 40.5468Z" fill="#D2DAE0"/>
    <rect id="photo1-overlay" width="103" height="66" transform="translate(204.825 11.7758)" fill="#3F88C5" fill-opacity="0.45"/>
    <rect id="photo2" x="206" y="89" width="99" height="62" stroke="#D2DAE0" stroke-width="4"/>
    <path id="photo2-img" d="M242.244 115.547L252.866 127.978V127.914L268.193 107L285 134H229L242.244 115.547Z" fill="#D2DAE0"/>
    <rect id="photo2-overlay" width="103" height="66" transform="translate(204.825 86.7758)" fill="#3F88C5" fill-opacity="0.45"/>
    <rect id="photo3" x="33" y="36" width="102" height="97" stroke="#D2DAE0" stroke-width="4"/>
    <path id="photo3-img" d="M64.8904 77.4656L79.3589 94.517V94.4282L100.238 65.7429L123.131 102.776H46.8505L64.8904 77.4656Z" fill="#D2DAE0"/>
    <rect id="photo3-overlay" width="106" height="101" transform="translate(31 34)" fill="#3F88C5" fill-opacity="0.45"/>
    <g filter="url(#filter1_f_54_7476)">
    <rect width="7" height="164" transform="translate(168.5 1.7868)" fill="#D2DAE0"/>
    </g>
    </g>
    </g>
    <defs>
    <filter id="filter0_d_54_7476" x="0.803279" y="0.202186" width="328.393" height="169.967" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
    <feOffset dy="1.39891"/>
    <feGaussianBlur stdDeviation="2.09836"/>
    <feComposite in2="hardAlpha" operator="out"/>
    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_54_7476"/>
    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_54_7476" result="shape"/>
    </filter>
    <filter id="filter1_f_54_7476" x="160.456" y="-6.25691" width="23.0874" height="180.087" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
    <feGaussianBlur stdDeviation="4.02186" result="effect1_foregroundBlur_54_7476"/>
    </filter>
    <clipPath id="clip0_54_7476">
    <rect x="5" y="3" width="320" height="161.574" rx="1.39891" fill="white"/>
    </clipPath>
    </defs>
    </svg>
    `;
    
    // Using the clean finger SVG
    const fingerSVG = `
    <svg width="51" height="74" viewBox="0 0 51 74" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_54_7491)" id="tap-finger">
    <path class="finger" d="M51.1671 36.5578V51.6491C51.1671 63.7505 41.3164 73.6013 29.215 73.6013C21.6279 73.6013 14.343 69.1293 10.1863 61.9386L0.459009 46.1193C-0.597241 44.4049 -0.199114 42.1543 1.36414 40.8916L2.31151 40.123C5.20563 37.8318 9.33638 38.2023 11.7365 40.9599L15.4951 45.2548V13.4389C15.4951 10.7219 17.333 8.377 19.8713 7.85538C21.7091 7.4995 23.5616 8.06175 24.8649 9.35038C25.8935 10.3936 26.4704 11.7651 26.4704 13.2325V26.3219C27.2796 25.8555 28.2124 25.5809 29.215 25.5809C30.6824 25.5809 32.0555 26.1578 33.0971 27.1864C33.687 27.7763 34.1258 28.4896 34.4004 29.2583C35.2649 28.6684 36.3211 28.3255 37.4456 28.3255C38.913 28.3255 40.2861 28.9024 41.3278 29.931C41.9176 30.5209 42.3564 31.2343 42.631 32.0029C43.4955 31.413 44.5518 31.0701 45.6763 31.0701C47.1436 31.0701 48.5168 31.647 49.5584 32.6756C50.587 33.7189 51.1639 35.0904 51.1639 36.5578H51.1671Z" fill="white"/>
    <path class="finger-outline" d="M49.5568 32.6789C48.52 31.6405 47.1404 31.0701 45.6779 31.0701C44.5501 31.0701 43.4988 31.413 42.6278 31.998C42.358 31.231 41.9176 30.5274 41.3261 29.9342C40.2894 28.8959 38.9098 28.3255 37.4473 28.3255C36.3195 28.3255 35.2681 28.6684 34.3971 29.2534C34.1274 28.4864 33.687 27.7828 33.0955 27.1896C32.0588 26.1513 30.6791 25.5809 29.2166 25.5809C28.2189 25.5809 27.2813 25.849 26.472 26.317V13.2325C26.472 11.7684 25.9016 10.392 24.8633 9.35362C23.5681 8.05687 21.7059 7.49462 19.8745 7.85375C17.3379 8.36887 15.4968 10.717 15.4968 13.4372V45.2531L11.7446 40.9664C9.34127 38.199 5.20564 37.8285 2.31151 40.1279L1.37226 40.8916C-0.203985 42.1559 -0.597234 44.4065 0.459016 46.1257L10.1944 61.9386C14.3446 69.1325 21.6328 73.6012 29.2183 73.6012C41.3229 73.6012 51.1704 63.7537 51.1704 51.6491V36.5577C51.1704 35.0936 50.6 33.7172 49.5616 32.6789H49.5568ZM48.4225 51.6507C48.4225 62.2425 39.8068 70.8582 29.215 70.8582C22.7069 70.8582 16.1728 66.8201 12.5474 60.5346L2.79414 44.6893C2.45451 44.1384 2.57802 43.4412 3.09477 43.0285L4.03077 42.268C4.79127 41.6619 5.69802 41.3661 6.59827 41.3661C7.73902 41.3661 8.87002 41.8439 9.67602 42.7717L15.838 49.8096C16.6716 50.7635 18.243 50.172 18.243 48.9061V13.4405C18.243 12.0202 19.1595 10.8031 20.414 10.548C21.3533 10.3644 22.2649 10.6374 22.9263 11.2955C23.4463 11.8139 23.7323 12.5029 23.7323 13.2341V40.6739C23.7323 41.4311 24.3465 42.0454 25.1038 42.0454C25.861 42.0454 26.4753 41.4311 26.4753 40.6739V31.2716C26.4753 29.6905 27.772 28.254 29.3515 28.3304C30.0324 28.3629 30.6694 28.644 31.1585 29.1331C31.6785 29.6515 31.9645 30.3405 31.9645 31.0717V40.6755C31.9645 41.4327 32.5788 42.047 33.336 42.047C34.0933 42.047 34.7075 41.4327 34.7075 40.6755V34.0162C34.7075 32.4351 36.0043 30.9986 37.5838 31.075C38.2646 31.1075 38.9016 31.3886 39.3908 31.8777C39.9108 32.3961 40.1968 33.0851 40.1968 33.8164V40.6771C40.1968 41.4344 40.811 42.0486 41.5683 42.0486C42.3255 42.0486 42.9398 41.4344 42.9398 40.6771V36.7625C42.9398 35.1814 44.2365 33.7449 45.816 33.8212C46.4969 33.8537 47.1339 34.1349 47.623 34.624C48.143 35.1424 48.429 35.8314 48.429 36.5626V51.654L48.4225 51.6507Z" fill="#203343"/>
    <path class="tap-indicator" d="M12.7375 18.5154C13.381 18.1156 13.5776 17.269 13.1779 16.6255C12.2565 15.1435 11.769 13.4291 11.769 11.666C11.769 6.47738 15.9891 2.25725 21.1778 2.25725C26.3664 2.25725 30.5865 6.47738 30.5865 11.666C30.5865 13.4291 30.1006 15.1435 29.1776 16.6255C28.7779 17.269 28.9745 18.114 29.618 18.5154C29.8439 18.6568 30.0941 18.7217 30.3411 18.7217C30.7994 18.7217 31.2479 18.4926 31.5079 18.0734C32.699 16.1575 33.3295 13.941 33.3295 11.666C33.3295 4.96613 27.8776 -0.485748 21.1778 -0.485748C14.4779 -0.485748 9.026 4.96613 9.026 11.666C9.026 13.941 9.6565 16.1575 10.8476 18.0734C11.249 18.7169 12.094 18.9135 12.7375 18.5138V18.5154Z" fill="#203343"/>
    </g>
    <defs>
    <clipPath id="clip0_54_7491">
    <rect width="51" height="74" fill="white"/>
    </clipPath>
    </defs>
    </svg>
    `;

    // Insert SVGs into the DOM
    document.getElementById('book-container').innerHTML = bookSVG;
    document.getElementById('finger-container').innerHTML = fingerSVG;
    
    // Get finger element and photo elements
    const fingerElement = document.getElementById('finger-container');
    const animationContainer = document.querySelector('.animation-container');
    const photoElements = {
        photo1: {
            overlay: document.getElementById('photo1-overlay'),
            rect: document.getElementById('photo1')
        },
        photo2: {
            overlay: document.getElementById('photo2-overlay'),
            rect: document.getElementById('photo2')
        },
        photo3: {
            overlay: document.getElementById('photo3-overlay'),
            rect: document.getElementById('photo3')
        }
    };
    
    // Define relative positions as percentages of the container size
    // These percentages are based on the original fixed positions relative to container size
    const relativePositions = {
        finger: { xOffset: 8, yOffset: 12 }, // Percentage offsets for finger position
        photos: {
            photo3: { x: 22.5, y: 28 },  // Large photo on left
            photo1: { x: 64, y: 15 },    // Top right photo
            photo2: { x: 64, y: 40 }     // Bottom right photo
        }
    };
    
    // Choose which photo to tap (using the large photo on the left)
    const photoToTap = 'photo3';
    
    // Set the initial opacity for all overlays to make them visible (active state)
    for (const photo in photoElements) {
        if (photoElements[photo].overlay) {
            photoElements[photo].overlay.style.opacity = '0.45'; // Increased default active state opacity
        }
    }

    // Function to calculate absolute positions based on container size
    function calculatePositions() {
        const containerWidth = animationContainer.offsetWidth;
        const containerHeight = animationContainer.offsetHeight;
        
        // Calculate actual photo positions based on container size
        const photoPositions = {};
        for (const photo in relativePositions.photos) {
            photoPositions[photo] = {
                x: (relativePositions.photos[photo].x * containerWidth) / 100,
                y: (relativePositions.photos[photo].y * containerHeight) / 100
            };
        }
        
        // Calculate finger offset based on container size
        const fingerOffset = {
            x: (relativePositions.finger.xOffset * containerWidth) / 100,
            y: (relativePositions.finger.yOffset * containerHeight) / 100
        };
        
        // Scale finger size based on container width (with min/max limits)
        const baseFinger = { width: 51, height: 74 };
        const scaleFactor = Math.min(Math.max(containerWidth / 400, 0.7), 1.3); // Limit scale between 0.7x and 1.3x
        const fingerSize = {
            width: Math.round(baseFinger.width * scaleFactor),
            height: Math.round(baseFinger.height * scaleFactor)
        };
        
        // Update finger element size
        fingerElement.style.width = `${fingerSize.width}px`;
        fingerElement.style.height = `${fingerSize.height}px`;
        
        return { photoPositions, fingerOffset };
    }
    
    // Function to run the animation
    function runAnimation() {
        // Get current positions based on container size
        const { photoPositions, fingerOffset } = calculatePositions();
        
        // Reset finger position
        fingerElement.style.transform = 'translate(-100px, 0px)';
        fingerElement.style.opacity = '1'; // Ensure finger is fully visible at start
        
        // Reset all photo overlays to default active state
        for (const photo in photoElements) {
            if (photoElements[photo].overlay) {
                photoElements[photo].overlay.style.opacity = '0.45'; // Increased default active state opacity
            }
        }

        // Function to calculate the exact finger position for tapping
        function getFingerTapPosition(photoPos) {
            return {
                x: photoPos.x - fingerOffset.x,
                y: photoPos.y - fingerOffset.y
            };
        }
        
        // Calculate tap position with offset
        const tapPosition = getFingerTapPosition(photoPositions[photoToTap]);

        const sequence = [
            // Animation sequence - Just a single tap
            // 1. Move to the target photo
            { 
                element: fingerElement,
                property: 'transform',
                from: 'translate(-100px, 0px)',
                to: `translate(${tapPosition.x}px, ${tapPosition.y}px)`,
                duration: 1000,
                easing: 'ease-out'
            },
            // 2. Tap animation on the photo and darken the overlay
            {
                element: document.querySelector('#tap-finger .tap-indicator'),
                property: 'opacity',
                from: '0',
                to: '1',
                duration: 300,
                easing: 'ease-in'
            },
            {
                element: photoElements[photoToTap].overlay,
                property: 'opacity',
                from: '0.45',
                to: '0.8', // Increased opacity when pressed for better visibility
                duration: 300,
                easing: 'ease-in'
            },
            // Return overlay to normal active state
            {
                element: photoElements[photoToTap].overlay,
                property: 'opacity',
                from: '0.8',
                to: '0.45',
                duration: 300,
                easing: 'ease-out',
                delay: 600
            },
            // Fade out tap animation
            {
                element: document.querySelector('#tap-finger .tap-indicator'),
                property: 'opacity',
                from: '1',
                to: '0',
                duration: 300,
                easing: 'ease-out',
                delay: 0
            }
        ];

        // Execute the animation sequence
        let currentTime = 0;
        let animations = [];

        sequence.forEach(step => {
            const delay = step.delay || 0;
            currentTime += delay;

            const animation = step.element.animate([
                { [step.property]: step.from },
                { [step.property]: step.to }
            ], {
                duration: step.duration,
                easing: step.easing,
                fill: 'forwards',
                delay: currentTime
            });

            currentTime += step.duration;
            animations.push(animation);
        });

        // After the sequence completes, fade out the finger with a short delay
        setTimeout(() => {
            // Fade out finger without moving it
            fingerElement.animate([
                { opacity: 1 },
                { opacity: 0 }
            ], {
                duration: 800,
                easing: 'ease-out',
                fill: 'forwards'
            });
        }, currentTime + 500); // Short delay of 500ms after tapping is complete

        return animations;
    }
    
    // Initial setup - Position finger off-screen initially
    fingerElement.style.transform = 'translate(-100px, 0px)';
    
    // Set proper size for finger element to match SVG viewBox ratio
    fingerElement.style.width = '51px';
    fingerElement.style.height = '74px';
    
    // Add tap indicator styling
    const tapIndicator = document.querySelector('#tap-finger .tap-indicator');
    if (tapIndicator) {
        tapIndicator.style.opacity = '0';
    }
    
    // Add window resize event listener to update animation on viewport changes
    window.addEventListener('resize', () => {
        // Allow time for resize to complete before recalculating
        clearTimeout(window.resizeTimer);
        window.resizeTimer = setTimeout(() => {
            runAnimation();
        }, 250);
    });
    
    // Start animation automatically
    runAnimation();
});