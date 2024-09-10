const translations = {
  en: {
    homeNav: 'Home',
    aboutNav: 'About',
    portfolioNav: 'Portfolio',
    contactNav: 'Contact',
    downloadCV: 'Download CV',
    hello: "Hello, I'm",
    myName: 'Alexander Chorny',
    profession: 'Web',
    professionSpan: 'Developer',
    aboutMe:
      'I strive to create reliable, adaptive, cross-browser web products based on best practices and accessibility.',
  },
  uk: {
    homeNav: 'Головна',
    aboutNav: 'Про мене',
    portfolioNav: 'Портфоліо',
    contactNav: 'Контакти',
    downloadCV: 'Резюме',
    hello: 'Привіт, Я',
    myName: 'Oлександр Чорний',
    profession: 'Веб',
    professionSpan: 'Розробник',
    aboutMe:
      'Я прагну створювати надійні, адаптивні, кросбраузерні веб-продукти, дотримуючись найкращих практик і доступності.',
  },
};

document.addEventListener('DOMContentLoaded', () => {
  const languageSelector = document.getElementById('lang-sel');
  const homeNav = document.getElementById('home-nav');
  const aboutNav = document.getElementById('about-nav');
  const portfolioNav = document.getElementById('portfolio-nav');
  const contactNav = document.getElementById('contact-nav');
  const downloadCV = document.getElementById('download-cv');
  const hello = document.getElementById('hello');
  const myName = document.getElementById('myName');
  const profession = document.getElementById('profession');
  const professionSpan = document.getElementById('profession-span');
  const aboutMe = document.getElementById('about-me');

  languageSelector.addEventListener('change', (event) => {
    setLanguage(event.target.value);
  });

  const setLanguage = (language) => {
    if (language === 'en') {
      homeNav.innerText = translations.en.homeNav;
      aboutNav.innerText = translations.en.aboutNav;
      portfolioNav.innerText = translations.en.portfolioNav;
      contactNav.innerText = translations.en.contactNav;
      downloadCV.innerText = translations.en.downloadCV;
      hello.innerText = translations.en.hello;
      myName.innerText = translations.en.myName;
      profession.firstChild.nodeValue = translations.en.profession + ' ';
      professionSpan.innerText = translations.en.professionSpan;
      aboutMe.innerText = translations.en.aboutMe;
    } else if (language === 'uk') {
      homeNav.innerText = translations.uk.homeNav;
      aboutNav.innerText = translations.uk.aboutNav;
      portfolioNav.innerText = translations.uk.portfolioNav;
      contactNav.innerText = translations.uk.contactNav;
      downloadCV.innerText = translations.uk.downloadCV;
      hello.innerText = translations.uk.hello;
      myName.innerText = translations.uk.myName;
      profession.firstChild.nodeValue = translations.uk.profession + ' ';
      professionSpan.innerText = translations.uk.professionSpan;
      aboutMe.innerText = translations.uk.aboutMe;
    }
  };
});
