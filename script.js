function toggleMode () {
    const html = document.documentElement
    let img = document.querySelector('#profile img')
    html.classList.toggle('light')

    if(html.classList.contains('light')){
        img.setAttribute('src', './assets/themes/profiledark.jpg')
        img.setAttribute('alt', 'Foto do monstro')
        
    }
    else {
        img.setAttribute('src', './assets/themes/profilelight.jpg')
        img.setAttribute('alt', 'Foto minha')
        
    }
}