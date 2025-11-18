
// Tab functionality


const tabs = document.querySelectorAll('.destinations-section-unique-part1-nav-link');
const tabContents = document.querySelectorAll('.pwd-tab-content');


tabs.forEach(tab => {
    tab.addEventListener('click', function (e) {
        e.preventDefault();

        // Get the region from data attribute
        const region = this.getAttribute('data-region');

        // Remove active class from all tabs
        tabs.forEach(t => t.classList.remove('active'));

        // Add active class to clicked tab
        this.classList.add('active');


        // Hide all tab contents
        tabContents.forEach(content => {
            content.classList.remove('active');
            content.style.display = 'none';
        });

        // Show the selected region content
        const targetContent = document.getElementById(region);
        if (targetContent) {
            targetContent.classList.add('active');
            targetContent.style.display = 'block';
        }
    });
});

// const pwdTabs = document.querySelectorAll('.pwd-tab-btn');
// const pwdContents = document.querySelectorAll('.pwd-tab-content');

// pwdTabs.forEach(tab => {
//     tab.addEventListener('click', e => {
//         e.preventDefault();
//         const region = tab.getAttribute('data-region');

//         // Deactivate all tabs
//         pwdTabs.forEach(t => t.classList.remove('active'));

//         // Activate clicked tab
//         tab.classList.add('active');

//         // Hide all content sections
//         pwdContents.forEach(content => {
//             content.classList.remove('active');
//             content.style.display = 'none';
//         });

//         // Show the selected section
//         const targetContent = document.getElementById(region);
//         if (targetContent) {
//             targetContent.classList.add('active');
//             targetContent.style.display = 'block';
//         }
//     });
// });


// explore top destinations by region js ends here 




// Top trending destinations js starts here 

const tmdTrack = document.getElementById('tmdCarouselTrack');
const tmdPrevBtn = document.getElementById('tmdPrevBtn');
const tmdNextBtn = document.getElementById('tmdNextBtn');
const tmdCards = document.querySelectorAll('.tmd__destination-card');

let tmdCurrentIndex = 0;
let tmdCardsPerView = 5;
let tmdTotalCards = tmdCards.length;

// Clone cards for infinite loop
function tmdCloneCards() {
    // Clone all cards and append to track
    tmdCards.forEach(card => {
        const clone = card.cloneNode(true);
        tmdTrack.appendChild(clone);
    });

    // Clone all cards again and prepend to track
    const cardsArray = Array.from(tmdCards);
    cardsArray.reverse().forEach(card => {
        const clone = card.cloneNode(true);
        tmdTrack.insertBefore(clone, tmdTrack.firstChild);
    });
}

function tmdUpdateCardsPerView() {
    const width = window.innerWidth;
    if (width <= 576) {
        tmdCardsPerView = 1;
    } else if (width <= 768) {
        tmdCardsPerView = 2;
    } else if (width <= 992) {
        tmdCardsPerView = 3;
    } else if (width <= 1200) {
        tmdCardsPerView = 4;
    } else {
        tmdCardsPerView = 5;
    }
}

function tmdUpdateCarousel(animate = true) {
    const allCards = document.querySelectorAll('.tmd__destination-card');
    const cardWidth = allCards[0].offsetWidth;
    const gap = 18;

    // Start from the middle set (original cards)
    const actualIndex = tmdCurrentIndex + tmdTotalCards;
    const offset = actualIndex * (cardWidth + gap);

    if (animate) {
        tmdTrack.style.transition = 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
    } else {
        tmdTrack.style.transition = 'none';
    }

    tmdTrack.style.transform = `translateX(-${offset}px)`;

    // Always enable buttons for infinite scroll
    tmdPrevBtn.disabled = false;
    tmdNextBtn.disabled = false;
}

function tmdCheckLoop() {
    const allCards = document.querySelectorAll('.tmd__destination-card');
    const cardWidth = allCards[0].offsetWidth;
    const gap = 18;

    // If we've scrolled past the end, jump back to start
    if (tmdCurrentIndex >= tmdTotalCards) {
        setTimeout(() => {
            tmdCurrentIndex = 0;
            tmdUpdateCarousel(false);
        }, 500);
    }

    // If we've scrolled before the start, jump to end
    if (tmdCurrentIndex < 0) {
        setTimeout(() => {
            tmdCurrentIndex = tmdTotalCards - 1;
            tmdUpdateCarousel(false);
        }, 500);
    }
}

tmdPrevBtn.addEventListener('click', () => {
    tmdCurrentIndex--;
    tmdUpdateCarousel(true);
    tmdCheckLoop();
});

tmdNextBtn.addEventListener('click', () => {
    tmdCurrentIndex++;
    tmdUpdateCarousel(true);
    tmdCheckLoop();
});

let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        // your resize logic here
        tmdUpdateCardsPerView();
        tmdUpdateCarousel(false);
    }, 500);

});

// Initialize
tmdCloneCards();
tmdUpdateCardsPerView();
tmdUpdateCarousel(false);


// Top trending destinations js ends here 



