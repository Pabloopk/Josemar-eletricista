const navMenu = document.getElementById("nav-menu")
const navLink = document.querySelectorAll(".nav-link")
const hamburger = document.getElementById("hamburger")

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("left-[0]")
    hamburger.classList.toggle('ri-close-large-line')
})

navLink.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.toggle("left-[0]")
        hamburger.classList.toggle('ri-close-large-line')
    })
})

/*~~~~~~~~~~~~~~~ SHOW SCROLL UP ~~~~~~~~~~~~~~~*/
const scrollUp = () => {
    const scrollUp8tn = document.getElementById("scroll-up")

    if(this.scrollY >= 250) {
        scrollUp8tn.classList.remove("-bottom-1/2")
        scrollUp8tn.classList.add("bottom-4")
    } else {
        scrollUp8tn.classList.add("-bottom-1/2")
        scrollUp8tn.classList.remove("bottom-4")
    }

}


window.addEventListener("scroll", scrollUp)

/*~~~~~~~~~~~~~~~ CHANGE BACKGROUND HEADER ~~~~~~~~~~~~~~~*/
const scrollHeader = () => {
    const header = document.getElementById("navbar")

    if(this.scrollY >= 50) {
        header.classList.add("border-b", "border-blue-500")
    } else {
        header.classList.remove("border-b", "border-blue-500")
    }

}


window.addEventListener("scroll", scrollHeader)

/*~~~~~~~~~~~~~~~ SWIPER ~~~~~~~~~~~~~~~*/
const swiper = new Swiper('.swiper', {
  
  // If we need pagination
  speed:300,
  spaceBetween: 30,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
    grabCursor: true,
    breakpoints:{
        640: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 4
        },
        1024: {
            slidesPerView: 4
        },
        
    }
});


/*~~~~~~~~~~~~~~~ SCROLL SECTIONS ACTIVE LINK ~~~~~~~~~~~~~~~*/
const activeLink = () => {
    const sections = document.querySelectorAll('section')
    const navLinks = document.querySelectorAll(".nav-link")

    let current = "home"

    sections.forEach(section => {
        const sectionTop = section.offsetTop;

        if(this.scrollY >= sectionTop - 60) {
            current = section.getAttribute("id")
        }
    })

    navLinks.forEach(item => {
        item.classList.remove("active")

        if(item.href.includes(current)) {
            item.classList.add("active")
        }

    })

}


window.addEventListener("scroll", activeLink)

/*~~~~~~~~~~~~~~~ SCROLL REVEAL ANIMATION ~~~~~~~~~~~~~~~*/

const sr = ScrollReveal({
    origin:"top",
    distance: "60px",
    duration: 2500,
    delay: 300,
    reset: true
})

sr.reveal('.home__data, .about__top, .popular__top, .costumer__top, .footer__icon, .footer__content, .copy__right')
sr.reveal('.home__image', {delay: 600, scale:0.5})

sr.reveal('.service__card, .popular__card, .review__swiper', {interval: 200})

sr.reveal('.about__leaf', {delay: 1000, origin: "right"})

sr.reveal('.about__item__1-content, .about__item__2-img', {origin:"right"})

sr.reveal('.about__item__2-content, .about__item__1-img', {origin:"left"})

sr.reveal('.review__leaf, .footer__floral', {delay: 1000, origin:"left"})