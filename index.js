let des = document.getElementById('des').getContext('2d')

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

let jogar = true
let fase = 1

document.addEventListener('keydown', (e) => {
    if (e.key === 'w' || e.key === 'ArrowUp') {
        mago.dir -= 10
    } else if (e.key === 's' || e.key === 'ArrowDown') {
        mago.dir += 10
    }
})

document.addEventListener('keyup', (e) => {
    if (e.key === 'w' || e.key === 'ArrowUp') {
        mago.dir = 0
    } else if (e.key === 's' || e.key === 'ArrowDown') {
        mago.dir = 0
    }
})

function game_over() {
    if (mago.vida <= 0) {
        jogar = false
    }
}

function ver_fase() { 
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
}

function colisao() {
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
}

function pontuacao() {
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
}

function desenha() {
    if (jogar) {
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
            t1.des_text('GAME OVER', 350, 300, 'yellow', '40px "Press Start 2P"')
            t2.des_text('Pontuação Final: ' + mago.pontos, 400, 360, 'white', '20px "Press Start 2P"')
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
    des.clearRect(0, 0, 1200, 700)
    desenha()
    atualiza()
    requestAnimationFrame(main)
}

main()