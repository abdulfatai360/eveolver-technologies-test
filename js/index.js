function navMenuToggleFunctionality() {
    const navMenuOpenIcon = document.querySelector('.primary-nav-switcher');
    const navMenuCloseIcon = document.querySelector(
        '.primary-nav--sm-screen__close-icon img'
    );

    navMenuOpenIcon.addEventListener('click', (e) => {
        const smScreenNavMenu = document.querySelector(
            '.primary-nav--sm-screen'
        );
        smScreenNavMenu.classList.add('show');
        document.querySelector('html').classList.add('menu-is-shown');
    });

    navMenuCloseIcon.addEventListener('click', (e) => {
        const smScreenNavMenu = document.querySelector(
            '.primary-nav--sm-screen'
        );
        smScreenNavMenu.classList.remove('show');
        document.querySelector('html').classList.remove('menu-is-shown');
    });
}

function heroBgImageSwitchFunctionality() {
    const heroBgImgList = [
        '/images/evolver-tech-hero.jpg',
        '/images/evolver-tech-hero-2.svg',
    ];

    const heroSectionBgSwitchers = document.querySelectorAll(
        '.hero-bg-switcher__item'
    );

    heroSectionBgSwitchers.forEach((elem) => {
        elem.addEventListener('click', switchHeroBgImage);
    });

    function setActiveClass(activeIndex) {
        heroSectionBgSwitchers.forEach((elem) => {
            elem.classList.remove('active');

            if (elem.dataset.index === activeIndex) {
                elem.classList.add('active');
            }
        });
    }

    function switchHeroBgImage(e) {
        const index = e.target.dataset.index;
        const heroSection = document.querySelector('.hero');

        setActiveClass(index);
        heroSection.style.backgroundImage = `url(${heroBgImgList[index]})`;
    }
}

navMenuToggleFunctionality();
heroBgImageSwitchFunctionality();
