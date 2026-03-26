let des = document.getElementById('des').getContext('2d')

// FUNDO
let fundo = new Image()
fundo.src = './img/img_Fundo.png'

let fantasma1 = new Fantasmas(1300, 325, 64, 64, './img/fantasma.png')
let fantasma2 = new Fantasmas(1500, 125, 64, 64, './img/fantasma.png')
let fantasma3 = new Fantasmas(1700, 400, 64, 64, './img/fantasma.png')

let grimorio1 = new Grimorios(1400, 200, 64, 64, './img/grimorio1.png')
let grimorio2 = new Grimorios(1700, 400, 64, 64, './img/grimorio2.png')
let grimorio3 = new Grimorios(2000, 300, 64, 64, './img/grimorio3.png')

let mago = new Mage(100, 325, 96, 96, './img/sprite1.png')

let t1 = new Text()
let t2 = new Text()
let fase_txt = new Text()

// SONS
let musica = new Audio('./audio/bgMusic.mp3')
let andar = new Audio('./audio/walking.mp3')
let dano = new Audio('./audio/ghost.mp3')
let coleta = new Audio('./audio/coletar.mp3')
let gameover_som = new Audio('./audio/gameOver.mp3')
let win_som = new Audio('./audio/win.mp3')

musica.loop = true
musica.volume = 0.4

andar.loop = true
andar.volume = 0.3

dano.volume = 0.5
coleta.volume = 0.5
gameover_som.volume = 0.6
win_som.volume = 0.6

let jogar = true
let fase = 1
let vitoria = false


//Movimentação Player 1
document.addEventListener('keydown', (e) => {

    musica.play()

    if (e.key === 'w' || e.key === 'ArrowUp') {
        mago.dir -= 10
        andar.play()
    } 
    else if (e.key === 's' || e.key === 'ArrowDown') {
        mago.dir += 10
        andar.play()
    }
})

document.addEventListener('keyup', (e) => {

    if (e.key === 'w' || e.key === 'ArrowUp') {
        mago.dir = 0
        andar.pause()
        andar.currentTime = 0
    } 
    else if (e.key === 's' || e.key === 'ArrowDown') {
        mago.dir = 0
        andar.pause()
        andar.currentTime = 0
    }
})


function game_over() {
    if (mago.vida <= 0) {
        jogar = false
        vitoria = false
        musica.pause()
        gameover_som.play()
    }

    document.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {

            mago.vida = 5
            mago.pontos = 0
            jogar = true
            vitoria = false
            fase = 1

            fundo.src = './img/img_Fundo.png'

            musica.currentTime = 0
            musica.play()

            fantasma1.x = 1300
            fantasma2.x = 1500
            fantasma3.x = 1700
        }
    })
}


function ver_fase() { 

    if (mago.pontos > 20 && fase === 1) {
        fase = 2
        fundo.src = './img/img_Fundo2.png'
        

        fantasma1.vel = 4
        fantasma2.vel = 4
        fantasma3.vel = 4
    } 
    else if (mago.pontos > 40 && fase === 2) {
        fase = 3
        fundo.src = './img/img_Fundo3.png'
       

        fantasma1.vel = 6
        fantasma2.vel = 6
        fantasma3.vel = 6
    } 
    else if (mago.pontos > 100 && fase === 3) {
        fase = 4
         fundo.src = './img/img_Fundo4.png'
        

        fantasma1.vel = 8
        fantasma2.vel = 8
        fantasma3.vel = 8
    } 
    else if (mago.pontos > 150 && fase === 4) {
        fase = 5
        fundo.src = './img/img_Fundo5.png'

        fantasma1.vel = 10
        fantasma2.vel = 10
        fantasma3.vel = 10
    }
}


function colisao() {
    if (mago.colid(fantasma1)) {
        dano.play()
        fantasma1.recomeca()
        mago.vida--
    }

    if (mago.colid(fantasma2)) {
        dano.play()
        fantasma2.recomeca()
        mago.vida--
    }

    if (mago.colid(fantasma3)) {
        dano.play()
        fantasma3.recomeca()
        mago.vida--
    }
}


function pontuacao() {
    if (mago.colid(grimorio1)) {
        coleta.play()
        mago.pontos += 10
        grimorio1.recomeca()
    }

    if (mago.colid(grimorio2)) {
        coleta.play()
        mago.pontos += 10
        grimorio2.recomeca()
    }

    if (mago.colid(grimorio3)) {
        coleta.play()
        mago.pontos += 10
        grimorio3.recomeca()
    }

    if (mago.pontos >= 300) {
        jogar = false
        vitoria = true
        musica.pause()
        win_som.play()
    }
}


function desenha() {
    if (jogar) {

        des.drawImage(fundo, 0, 0, 1200, 700)

        des.fillStyle = 'rgba(0,0,0,0.4)'
        des.fillRect(0,0,1200,60)

        fantasma1.des_quad()
        fantasma2.des_quad()
        fantasma3.des_quad()

        grimorio1.des_quad()
        grimorio2.des_quad()
        grimorio3.des_quad()

        mago.des_mage()

        t2.des_text('Vidas: ' + mago.vida, 20, 40, 'red', '20px "Press Start 2P"')
        fase_txt.des_text('Fase: ' + fase, 520, 40, 'white', '20px "Press Start 2P"')
        t1.des_text('Pontos: ' + mago.pontos, 900, 40, 'yellow', '20px "Press Start 2P"')

    } else {

        if(vitoria){

            t1.des_text('VITORIA!', 330, 300, 'yellow', '40px "Press Start 2P"')
            t2.des_text('PLAYER 1 VENCEU', 320, 350, 'white', '20px "Press Start 2P"')
            t2.des_text('Pontuação Final: ' + mago.pontos, 320, 380, 'white', '20px "Press Start 2P"')
            t2.des_text('Pressione ENTER para jogar novamente',180,480,'white','18px "Press Start 2P"')

        }else{

            t1.des_text('GAME OVER', 330, 300, 'red', '40px "Press Start 2P"')
            t2.des_text('Pontuação Final: ' + mago.pontos, 320, 380, 'white', '20px "Press Start 2P"')
            t2.des_text('Pressione ENTER para recomeçar o jogo!',180, 480, 'white','20px "Press Start 2P"')

        }
    }
}


function atualiza() {
    if (jogar) {
        mago.mov_mage()
        mago.anim('sprite')

        fantasma1.mov_fan()
        fantasma2.mov_fan()
        fantasma3.mov_fan()

        grimorio1.mov_grim()
        grimorio2.mov_grim()
        grimorio3.mov_grim()

        colisao()
        pontuacao()
        ver_fase()
        game_over()
    }
}


function main() {
    des.clearRect(0,0, 1200, 700)
    desenha()
    atualiza()
    requestAnimationFrame(main)
}

main()