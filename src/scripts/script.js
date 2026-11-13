addEventListener("DOMContentLoaded", () => {
    menu();
    whatsappOrçamento();
    // configAno();
    // whatsappConversa();
})

function menu() {
    const menu = document.querySelector('#menuBtn')
    const nav = document.querySelector('#navLinks')

    if (menu && nav) {
        menu.addEventListener('click', () => nav.classList.toggle('open'))
        nav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => nav.classList.remove('open'))
        })
    }
}

function whatsappOrçamento() {
    const link = document.querySelector('.nav-cta')

    const numero = '5511914839105'
    const mensagem = encodeURIComponent('Olá! Acessei o seu site e gostaria de me informar sobre um orçamento.')
    const url = `https://wa.me/${numero}?text=${mensagem}`

    link.addEventListener('click', () => {
        link.href = url;
        link.target = '_blank';
        link.rel = 'noopener noreferrer'
    })
}