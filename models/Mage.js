class Obj{

    constructor(x,y,w,h,a){
    
    this.x = x
    this.y = y
    this.w = w
    this.h = h
    this.a = a
    
    }
    
    des_mage(){
    
    let img = new Image()
    img.src = this.a
    des.drawImage(img,this.x,this.y,this.w,this.h)
    
    }
    
    des_quad(){
    
    let img = new Image()
    img.src = this.a
    des.drawImage(img,this.x,this.y,this.w,this.h)
    
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
    }
    
    if(this.y > 650){
    this.y = 650
    }
    
    }
    
    colid(objeto){
    
    return(
    
    this.x < objeto.x + objeto.w &&
    this.x + this.w > objeto.x &&
    this.y < objeto.y + objeto.h &&
    this.y + this.h > objeto.y
    
    )
    
    }
    
    point(objeto){
    
    return objeto.x <= -100
    
    }
    
    anim(){
    
    this.tempo++
    
    if(this.tempo > 10){
    
    this.tempo = 0
    this.frame++
    
    }
    
    if(this.frame > 6){
    this.frame = 1
    }
    
    this.a = "./img/sprite"+this.frame+".png"
    
    }
    
    }
    
    class Fantasmas extends Obj{
    
    vel = 2
    
    recomeca(){
    
    this.x = 1300
    this.y = Math.floor(Math.random()*(638-62)+62)
    
    }
    
    mov_fan(){
    
    this.x -= this.vel
    
    if(this.x <= -200){
    
    this.recomeca()
    
    }
    
    }
    
    }
    
    class Text{
    
    des_text(text,x,y,cor,font){
    
    des.fillStyle = cor
    des.font = font
    des.fillText(text,x,y)
    
    }
    
    }