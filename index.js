let des = document.getElementById('des').getContext('2d')

let fantasma1 = new Fantasmas(1300, 325, 80, 50, './img/fantasma.png')
let fantasma2 = new Fantasmas(1500, 125, 80, 50, './img/fantasma.png')
let fantasma3 = new Fantasmas(1700, 400, 80, 50, './img/fantasma.png')
let fantasma4 = new Fantasmas(1200, 300, 80, 50, './img/fantasma.png')
let fantasma5 = new Fantasmas(1800, 425, 80, 50, './img/fantasma.png')

let mago = new Mage(100, 325, 80, 50, './img/sprite1.png')

let t1 = new Text()
let t2 = new Text()
let fase_txt = new Text()

let jogar = true
let fase = 1

document.addEventListener('keydown', (e) => {

    if (e.key === 'w' || e.key === 'ArrowUp') {
        mago.dir = -10
    } 
    else if (e.key === 's' || e.key === 'ArrowDown') {
        mago.dir = 10
    }

})

document.addEventListener('keyup', () => {
    mago.dir = 0
})

function game_over(){
    if(mago.vida <= 0){
        jogar = false
    }
}

function ver_fase(){

    if(mago.pontos > 20 && fase === 1){
        fase = 2
        fantasma1.vel = 4
        fantasma2.vel = 4
        fantasma3.vel = 4
        fantasma4.vel = 4
        fantasma5.vel = 4
    }

    else if(mago.pontos > 40 && fase === 2){
        fase = 3
        fantasma1.vel = 6
        fantasma2.vel = 6
        fantasma3.vel = 6
        fantasma4.vel = 6
        fantasma5.vel = 6
    }

}

function colisao(){

    let fantasmas = [fantasma1,fantasma2,fantasma3,fantasma4,fantasma5]

    fantasmas.forEach(f => {
        if(mago.colid(f)){
            f.recomeca()
            mago.vida--
        }
    })

}

function pontuacao(){

    let fantasmas = [fantasma1,fantasma2,fantasma3,fantasma4,fantasma5]

    fantasmas.forEach(f => {

        if(mago.point(f)){
            mago.pontos += 5
            f.recomeca()
        }

    })

}

function desenha(){

    if(jogar){

        fantasma1.des_quad()
        fantasma2.des_quad()
        fantasma3.des_quad()
        fantasma4.des_quad()
        fantasma5.des_quad()

        mago.des_mage()

        t1.des_text('Pontos: '+mago.pontos,1000,40,'yellow','26px Arial')
        t2.des_text('Vidas: '+mago.vida,40,40,'red','26px Arial')
        fase_txt.des_text('Fase: '+fase,550,40,'white','26px Arial')

    }

    else{

        t1.des_text('GAME OVER',450,350,'yellow','60px Arial')
        t2.des_text('Pontuação Final: '+mago.pontos,480,400,'white','25px Arial')

    }

}

function atualiza(){

    if(jogar){

        mago.mov_mage()
        mago.anim()

        fantasma1.mov_fan()
        fantasma2.mov_fan()
        fantasma3.mov_fan()
        fantasma4.mov_fan()
        fantasma5.mov_fan()

        colisao()
        pontuacao()
        ver_fase()
        game_over()

    }

}

function main(){

    des.clearRect(0,0,1200,700)

    desenha()
    atualiza()

    requestAnimationFrame(main)

}

main()