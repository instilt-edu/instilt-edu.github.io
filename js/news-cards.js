const cardData = [
    {
        imgSrc: '../assets/img/news-cards/RwandaGrad.png',
        heading: 'Celebrating the Completion of our First Africa Batch!',
        about: 'In 2023, we launched our first cohort in Rwanda, marking our inaugural venture into a new continent. Partnering with the Rwanda Girls Initiative, we empowered bright female students through immersive English learning and educational support, demonstrating the impact of our program.',
        link: 'https://instilts-newsletter-0a931b.beehiiv.com/p/celebrating-the-completion-of-our-first-africa-batch',
    },  
    {
        imgSrc: '../assets/img/news-cards/emp-edu.png',
        heading: 'Empowering Education: New Batches in India and Africa',
        about: 'This year, we expanded education initiatives in Africa, India, and beyond. Partnering with Barefoot College International, we launched English programs in Senegal, Madagascar, Zanzibar, and Guatemala. In Punjab, India, we enhanced English proficiency for students and teachers to boost access to higher education.',
        link: 'https://instilts-newsletter-0a931b.beehiiv.com/p/empowering-education-new-batches-in-india-and-africa-and-launching-the-india-council',
    },
    {
        imgSrc: '../assets/img/news-cards/INEN28grad.png',
        heading: 'Salaam Baalak Trust - First Batch Graduation!',
        about: 'In July, our first batch with Salaam Baalak Trust saw 14 high school graduates transform through Instilt\'s lessons. They improved their English and experienced personal growth, celebrated in a heartfelt graduation ceremony honoring their journey and hard work.',
        link: 'https://instilts-newsletter-0a931b.beehiiv.com/p/salaam-baalak-trust-batch-s-graduation',
    }, 
];


function createPosts(cards) {
    const container = document.getElementById('card-container');
    cards.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('news-col-md-4');

        let iconClass = "fa-brands fa-linkedin";
        if (card.type?.toLowerCase() === "instagram") {
            iconClass = "fa-brands fa-instagram";
        } else if (card.type?.toLowerCase() === "linkedin") {
            iconClass = "fa-brands fa-linkedin";
        }
        cardElement.innerHTML = `
        <div class="news-card1">
            <div class="news-card-body text-center">
                <img src="${card.imgSrc}" class="news-card-img">
                <h3 class="news-heading-container" id="interactive">${card.heading}</h3>
                
                <div class="news-text-container">
                    <p class="article-about medium" id="interactive-about">${card.about}</p>
                </div>
                
                <div class="button-container">
                    <a href="${card.link}" target="_blank">
                        <button class="news-button1"> Read More </button>
                    </a>
                </div>
            </div>
        </div>
        `;

        container.appendChild(cardElement);
    });
}

createPosts(cardData);

export { cardData };