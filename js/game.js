class Game {
    // code to be added
constructor() {
    this.startScreen = document.getElementById("game-intro")
    this.gameScreen = document.getElementById("game-screen")
    this.gameEndScreen =document.getElementById("game-end")
    this.player = new Player(
        
    )
    this.height = 600 //Check Que este bien.
    this.width = 500
    this.obstacle = []
    this.score = 0
    this.lives =3
    this.gameIsOver = false //cambiar durante el proceso   
    }

start(){
    this.gameScreen.style.height = `${this.height}px`
    this.gameScreen.style.width = `${this.width}px`
    this.startScreen.style.display = 'none'
    this.gameScreen.style.display = 'inherit'
    this.gameLoop()

}

gameLoop(){
    console.log("Looping")


    if (this.gameIsOver){
        window.cancelAnimationFrame()
    }

    this.update()

    window.requestAnimationFrame(this.gameLoop())
}

update(){
    console.log("Looping")
    // window.requestAnimationFrame(this.gameLoop())

}
}