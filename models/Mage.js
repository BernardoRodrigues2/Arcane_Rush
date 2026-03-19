class Obj{
    constructor(x,y,w,h,a){
        this.x = x
        this.y = y
        this.w = w
        this.h = h

        this.img = new Image()
        this.img.src = a
    }

    des_mage(){
        des.drawImage(this.img, this.x, this.y, this.w, this.h)
    }

    des_quad(){
        des.drawImage(this.img, this.x, this.y, this.w, this.h)
    }
}

class Mage extends Obj{
    dir = 0
    vida = 5
    pontos = 0
    frame = 1
    tempo = 0

    mov_mage(){
        this.y += this.dir

        if(this.y < 62){
            this.y = 62
        }else if(this.y > 692){
            this.y = 692
        }
    }

    colid(objeto){
        if((this.x < objeto.x + objeto.w)&&
          (this.x + this.w > objeto.x)&&
          (this.y < objeto.y + objeto.h)&&
          (this.y + this.h > objeto.y)){
            return true
        }else{
            return false
        }
    }

    point(objeto){
        if(objeto.x <= -100){
            return true
        }else{
            return false
        }
    }

    anim(nome){
        this.tempo +=1
        if(this.tempo > 12){
            this.tempo = 0
            this.frame++
        }
        if(this.frame > 6){
            this.frame = 1
        }
        this.img.src = "./img/"+nome+this.frame+".png"
    }
}

class Fantasmas extends Obj{

    vel = 2.5

    recomeca(){
        this.x = 1300
        this.y =  Math.floor(Math.random() * (638 - 62) + 62)
    }

    mov_fan(){
        this.x -= this.vel
        if(this.x <= -200){            
            this.recomeca()         
        }
    }
}

class Grimorios extends Obj{

    vel = 2

    recomeca(){
        this.x = 1300
        this.y =  Math.floor(Math.random() * (638 - 62) + 62)
    }

    mov_grim(){
        this.x -= this.vel
        if(this.x <= -200){            
            this.recomeca()         
        }
    }
}

class Text{
    des_text(text,x,y,cor,font){

        des.fillStyle = 'black'
        des.font = font
        des.fillText(text, x+2, y+2)

        des.fillStyle = cor
        des.fillText(text, x, y)
    }
}