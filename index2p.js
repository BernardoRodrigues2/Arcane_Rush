let des = document.getElementById('des').getContext('2d')

let fantasma1 = new Fantasmas(1300, 325, 64, 64, './img/fantasma.png')
let fantasma2 = new Fantasmas(1500, 125, 64, 64, './img/fantasma.png')
let fantasma3 = new Fantasmas(1700, 400, 64, 64, './img/fantasma.png')

let grimorio1 = new Grimorios(1400, 200, 64, 64, './img/grimorio1.png')
let grimorio2 = new Grimorios(1700, 400, 64, 64, './img/grimorio2.png')
let grimorio3 = new Grimorios(2000, 300, 64, 64, './img/grimorio3.png')

let mago = new Mage(100, 325, 96, 96, './img/sprite1.png')
let mago2 = new Mage(100, 325, 96, 96, './img/sprite1.png')

let t1 = new Text()
let t2 = new Text()
let fase_txt = new Text()

let jogar = true
let fase = 1

//Movimentação Player 1
document.addEventListener('keydown', (e) => {
    if (e.key === 'w') {
        mago.dir -= 10
    } else if (e.key === 's') {
        mago.dir += 10
    }
})

document.addEventListener('keyup', (e) => {
    if (e.key === 'w') {
        mago.dir = 0
    } else if (e.key === 's') {
        mago.dir = 0
    }
})

//Movimentação Player 2
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowUp') {
        mago2.dir -= 10
    } else if (e.key === 'ArrowDown') {
        mago2.dir += 10
    }
})

document.addEventListener('keyup', (e) => {
    if (e.key === 'ArrowUp') {
        mago2.dir = 0
    } else if (e.key === 'ArrowDown') {
        mago2.dir = 0
    }
})

function game_over() {
    //Game Over do Player 1
    if (mago.vida <= 0) {
        jogar = false
    }
    //Game Over do Player 2
    if (mago2.vida <= 0) {
        jogar = false
    }
}

function ver_fase() {
    //Pontos do Player 1
    if (mago.pontos > 20 && fase === 1) {
        fase = 2
        fantasma1.vel = 4
        fantasma2.vel = 4
        fantasma3.vel = 4
    } else if (mago.pontos > 40 && fase === 2) {
        fase = 3
        fantasma1.vel = 6
        fantasma2.vel = 6
        fantasma3.vel = 6
    }
    //Pontos do Player 2
    if (mago2.pontos > 20 && fase === 1) {
        fase = 2
        fantasma1.vel = 4
        fantasma2.vel = 4
        fantasma3.vel = 4
    } else if (mago2.pontos > 40 && fase === 2) {
        fase = 3
        fantasma1.vel = 6
        fantasma2.vel = 6
        fantasma3.vel = 6
    }
}

function colisao() {
    //Colisão e vida do Player 1
    if (mago.colid(fantasma1)) {
        fantasma1.recomeca()
        mago.vida--
    }

    if (mago.colid(fantasma2)) {
        fantasma2.recomeca()
        mago.vida--
    }

    if (mago.colid(fantasma3)) {
        fantasma3.recomeca()
        mago.vida--
    }

    //Colisão e vida do Player 2
    if (mago2.colid(fantasma1)) {
        fantasma1.recomeca()
        mago2.vida--
    }

    if (mago2.colid(fantasma2)) {
        fantasma2.recomeca()
        mago2.vida--
    }

    if (mago2.colid(fantasma3)) {
        fantasma3.recomeca()
        mago2.vida--
    }
}

function pontuacao() {
    //Pontuação e Colisão com grimorios do Player 1
    if (mago.colid(grimorio1)) {
        mago.pontos += 10
        grimorio1.recomeca()
    }

    if (mago.colid(grimorio2)) {
        mago.pontos += 10
        grimorio2.recomeca()
    }

    if (mago.colid(grimorio3)) {
        mago.pontos += 10
        grimorio3.recomeca()
    }
    //Pontuação e Colisão com grimorios do Player 2
    if (mago2.colid(grimorio1)) {
        mago2.pontos += 10
        grimorio1.recomeca()
    }

    if (mago2.colid(grimorio2)) {
        mago2.pontos += 10
        grimorio2.recomeca()
    }

    if (mago2.colid(grimorio3)) {
        mago2.pontos += 10
        grimorio3.recomeca()
    }
}

function desenha() {
    if (jogar) {
        des.fillStyle = 'rgba(0,0,0,0.4)'
        des.fillRect(0, 0, 1200, 60)
        des.fillStyle = 'rgba(0,0,0,0.4)'
        des.fillRect(0, 640, 1200, 60)

        fantasma1.des_quad()
        fantasma2.des_quad()
        fantasma3.des_quad()

        grimorio1.des_quad()
        grimorio2.des_quad()
        grimorio3.des_quad()

        mago.des_mage()
        mago2.des_mage()


        // PLAYER 1 (EM CIMA)
        t2.des_text('P1 Vidas: ' + mago.vida, 20, 40, 'red', '20px "Press Start 2P"')
        fase_txt.des_text('Fase: ' + fase, 520, 40, 'white', '20px "Press Start 2P"')
        t1.des_text('P1 Pontos: ' + mago.pontos, 820, 40, 'yellow', '20px "Press Start 2P"')

        // PLAYER 2 (EMBAIXO)
        t2.des_text('P2 Vidas: ' + mago2.vida, 20, 680, 'red', '20px "Press Start 2P"')
        t1.des_text('P2 Pontos: ' + mago2.pontos, 820, 680, 'yellow', '20px "Press Start 2P"')

    } else {
        t1.des_text('GAME OVER', 350, 300, 'red', '40px "Press Start 2P"')
        t2.des_text('Pontuação Final: ' + mago.pontos, 400, 360, 'white', '20px "Press Start 2P"')
        t2.des_text('Pontuação Final: ' + mago2.pontos, 400, 420, 'white', '20px "Press Start 2P"')
    }

}

function atualiza() {
    if (jogar) {
        mago.mov_mage()
        mago.anim('sprite')

        mago2.mov_mage()
        mago2.anim('sprite')

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
    des.clearRect(0, 0, 1200, 700)
    desenha()
    atualiza()
    requestAnimationFrame(main)
}

main()