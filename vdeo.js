const meuVideo=document.querySelector('#meuVideo')
const tocar=document.querySelector('.tocar')
const assistir=document.querySelector('.assistir')
const iconplay=document.querySelector('#iconplay')
const textoplay=document.querySelector('#textoplay')
const tocarPlay=document.querySelector('#tocarPlay')
console.log(meuVideo)
console.log(tocar)

tocar.addEventListener('click', (evt)=>{
    if(meuVideo.paused){
        meuVideo.play()
        // tocar.textContent='icons/pause.png'
        iconplay.src='icons/pause.png'

    }else{
        meuVideo.pause()
        // tocar.textContent='Reproduzir'
        iconplay.src='icons/play.png'
    }
})

assistir.addEventListener('click', (evt)=>{
    if(meuVideo.paused){
        meuVideo.play()
        tocarPlay.src='icons/pauseWhite_32.png'
        textoplay.textContent='Pausar'
    }else{
        meuVideo.pause()
        tocarPlay.src='icons/playWhite_32.png'
        textoplay.textContent='Assistir o video'
    }
})
