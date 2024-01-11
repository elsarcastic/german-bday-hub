const saudacao = document.getElementById('greetings')

const agora = new Date()

const hora = agora.getHours()

function getGreeting(hora) {
  if(hora > 3 && hora < 12) {
    return "Bom dia" 
  } else if(hora >= 13 && hora < 18) {
    return "Boa tarde"
  } else {
    return "Boa noite"
  }
}

const cumprimento = getGreeting(hora)

saudacao.innerHTML = cumprimento + "! Seja bem vindo(a) à galeria de recompensas!"

botao =  document.getElementById('close')

botao.addEventListener('click', () => {
  popup = document.querySelector('.popup-video')

  popup.style.display = 'none'
})

document.querySelectorAll('.video').forEach(vid => {
  vid.onclick = () => {
    const iframe = vid.querySelector('iframe')
    if (iframe) {
      document.querySelector('.popup-video').style.display = 'block'
      document.querySelector('.popup-video video').src = iframe.getAttribute('src')
    }
    
  }
})
