let menuBtn = document.querySelectorAll('.menu')
let sections = document.querySelectorAll('main > div')
let btnPfl = document.querySelectorAll('.btn')

menuBtn.forEach(btn => {
    btn.addEventListener('mouseenter', () => {
        btn.classList.add('menu_mouse_on')
    })
    btn.addEventListener('mouseout', () => {
        btn.classList.remove('menu_mouse_on')
    })

    btn.addEventListener('click', () => {
        btn.textContent
        let selectedSection = document.querySelector(`.${btn.textContent}`)
        sections.forEach(section => {
            section.style.display = 'none'
            if (section.classList.contains(`${btn.textContent}`) == true) {
                selectedSection.style.display = 'block'
            }
        })
    })
})

btnPfl.forEach(btn => {
    btn.addEventListener('click', () => {
        let selectedSection = document.querySelector(`.${btn.textContent}`)
        
    })
})