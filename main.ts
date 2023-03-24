input.onButtonPressed(Button.A, function () {
    main.move(1)
    main.ifOnEdgeBounce()
})
let baddie: game.LedSprite = null
let main: game.LedSprite = null
game.startCountdown(20000)
main = game.createSprite(2, 5)
basic.pause(1000)
basic.forever(function () {
    music.playMelody("D E C D D E F C ", 500)
    baddie = game.createSprite(randint(0, 5), 0)
    for (let index = 0; index < 5; index++) {
        basic.pause(100)
        baddie.change(LedSpriteProperty.Y, 1)
    }
    if (main.isTouching(baddie)) {
        game.gameOver()
    }
    basic.pause(100)
    game.addScore(1)
    baddie.delete()
})
