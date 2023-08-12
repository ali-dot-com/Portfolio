window.onload = () => {
    gsap.registerPlugin(ScrollTrigger);
    const aboutTextElements = gsap.utils.toArray('.about-line-words');
    aboutTextElements.forEach(text => {
        gsap.to(text, {
            backgroundSize: '100%',
            ease: 'none',
            scrollTrigger: {
                trigger: text,
                start: 'center 80%',
                end: 'center 40%',
                scrub: true,
            },
        });
    });

    const skillsTextElements = gsap.utils.toArray('.skillsText');
    skillsTextElements.forEach(text => {
        gsap.to(text, {
            backgroundSize: '100%',
            ease: 'none',
            scrollTrigger: {
                trigger: text,
                start: 'center 80%',
                end: 'center 40%',
                scrub: true,
            },
        });
    });

    const cursor = document.getElementById('cursor');
    // document.body.addEventListener("mousemove", function (e) {
    //     cursor.style.left = e.clientX + "px";
    //     cursor.style.top = e.clientY + "px";
    // });

    const icons = document.getElementsByClassName('icons');
    for (let i = 0; i < icons.length; i++) {
        icons[i].addEventListener("mouseenter", (e) => {
            cursor.style.mixBlendMode = "overlay"
        })
    }
    for (let i = 0; i < icons.length; i++) {
        icons[i].addEventListener("mouseleave", (e) => {
            cursor.style.mixBlendMode = "normal"
        })
    }

    // function getScrollFraction() {
    //     var h = document.documentElement,
    //         b = document.body,
    //         st = 'scrollTop',
    //         sh = 'scrollHeight';
    //     return (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight);
    // }

    const line = document.getElementsByClassName('hero-lines')
    const firstText = document.getElementById('big-hover-effect');

    firstText.addEventListener("mouseenter", (e) => {
        cursor.style.height = "400px"
        cursor.style.width = "400px"
        cursor.style.mixBlendMode = "difference"

        line[0].addEventListener("mouseover", (e) => {
            line[0].innerHTML = "Hiding";
            line[0].style.color = '#eb5939'
        })
        line[0].addEventListener("mouseleave", (e) => {
            line[0].innerHTML = "Making";
            line[0].style.color = '#d1ccc5'
        })

        line[1].addEventListener("mouseover", (e) => {
            line[1].innerHTML = "Bad";
            line[1].style.color = '#eb5939'
        })
        line[1].addEventListener("mouseleave", (e) => {
            line[1].innerHTML = "Cool";
            line[1].style.color = '#eb5939'
        })

        line[3].addEventListener("mouseover", (e) => {
            line[3].style.color = '#eb5939'
            line[4].style.color = '#eb5939'
        })
        line[3].addEventListener("mouseleave", (e) => {
            line[3].style.color = '#d1ccc5'
            line[4].style.color = '#d1ccc5'
        })

        line[4].addEventListener("mouseover", (e) => {
            line[3].style.color = '#eb5939'
            line[4].style.color = '#eb5939'
        })
        line[4].addEventListener("mouseleave", (e) => {
            line[3].style.color = '#d1ccc5'
            line[4].style.color = '#d1ccc5'
        })

        designLine = document.getElementsByClassName('design-line');
        designLine[0].addEventListener('mouseover', (e) => {
            designLine[0].innerHTML = "Inspired: Minh Pham"
        })
        designLine[0].addEventListener('mouseleave', (e) => {
            designLine[0].innerHTML = "Designed: Not Me"
        })

    })
    firstText.addEventListener("mouseleave", (e) => {
        cursor.style.height = "35px"
        cursor.style.width = "35px"
        cursor.style.mixBlendMode = "normal"
    })




    const aboutHoverBox = document.getElementById('about-section-hover-effect')
    aboutHoverBox.addEventListener('mouseenter', () => {
        cursor.style.height = "300px"
        cursor.style.width = "300px"
        cursor.style.backgroundColor = 'transparent'
        cursor.style.outline = '3px solid #eb5939'
        aboutHoverBox.style.filter = "grayscale(2)"
    })
    aboutHoverBox.addEventListener('mouseleave', () => {
        cursor.style.height = "35px"
        cursor.style.width = "35px"
        cursor.style.backgroundColor = '#eb5939'
        aboutHoverBox.style.filter = "grayscale(0)"
        cursor.style.outline = '0px'
    })


    const about = document.getElementsByClassName('about-hover-effect')
    console.log(about)
    about[0].addEventListener('mouseenter', () => {
        about[0].innerText = `I'm an insane and irrational`
    })
    about[0].addEventListener('mouseleave', () => {
        about[0].innerText = `I'm a creative and dynamic`
    })

    about[3].addEventListener('mouseenter', () => {
        about[3].innerText = `stunning cash flow dreams.`
    })
    about[3].addEventListener('mouseleave', () => {
        about[3].innerText = `stunning digital dreams.`
    })

    // about[3].addEventListener('mouseenter', () => {
    //     about[3].innerText = `not-so-stunning digital dreams` 
    // })
    // about[3].addEventListener('mouseleave', () => {
    //     about[3].innerText = `stunning digital dreams` 
    // })


    // const aboutText = "I'm a skilled full-stack developer, focused strongly on turning code into stunning digital dreams, and who's passion for development knows no bounds."
    // const aboutText2 = "I'm an insane full-stack developer, focused strongly on turning code into not-so-stunning digital dreams, and who's passion for Formula 1 knows no bounds."
    // const highlightTextClass = 'class = "highlight aboutOnLoad"';
    // const notHighlighted = 'class = "not-highlighted aboutOnLoad"';
    // const redNotHighlighted = 'class = "red-not-highlighted aboutOnLoad"';
    // const redHighlighted = 'class = "red-highlighted aboutOnLoad"'

    // let words = aboutText.split(" ");
    // let text = document.querySelector('.about-text');

    // text.innerHTML = words.map((w) => {
    //     if (w == "full-stack" || w == 'developer,' || w == 'development') {
    //         return `<span class="aboutOnLoad" style="color: #eb593930">${w}</span>`
    //     }
    //     else
    //         return `<span class="aboutOnLoad" style="color: #d1ccc530">${w}</span>`
    // }).join(" ")


    // const aboutChange = document.querySelectorAll('.aboutOnLoad'); 

    // window.addEventListener('scroll', () => {
    //     let scroll = getScrollFraction();
    //     let offset = window.scrollY;
    //     console.log(offset)
    //     console.log(scroll)

    //     if (offset > 250 && offset < 650){
    //         let words_highlighted = ((scroll-0.2) * words.length);
    //         text.innerHTML = words.map((w, i) => {
    //             if (w == 'full-stack' || w == 'developer,' || w == 'development') {
    //                 return `<span ${i < words_highlighted ? redHighlighted : redNotHighlighted}>${w}</span>`
    //             }
    //             else
    //                 return `<span ${i < words_highlighted ? highlightTextClass : notHighlighted}>${w}</span>`
    //         }).join(' ')
    //     }
    //     else if (offset > 650){
    //         let words_highlighted = ((scroll+0.01) * words.length);
    //         text.innerHTML = words.map((w, i) => {
    //             if (w == 'full-stack' || w == 'developer,' || w == 'development') {
    //                 return `<span ${i < words_highlighted ? redHighlighted : redNotHighlighted}>${w}</span>`
    //             }
    //             else
    //                 return `<span ${i < words_highlighted ? highlightTextClass : notHighlighted}>${w}</span>`
    //         }).join(' ')
    //     }
    // })



}


