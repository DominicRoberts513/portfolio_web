let menuBtn = document.querySelectorAll('.menu')

menuBtn.forEach(btn => {
    btn.addEventListener('mouseenter', () => {
        btn.classList.add('menu_mouse_on')
    })
    btn.addEventListener('mouseout', () => {
        btn.classList.remove('menu_mouse_on')
    })
})