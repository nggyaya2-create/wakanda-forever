sprites.onOverlap(SpriteKind.Guard, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    namor.setPosition(148, 2)
})
info.onScore(20, function () {
    namor.destroy()
    scene.setBackgroundImage(assets.image`boston-bridge`)
    effects.confetti.startScreenEffect()
    shuri.sayText("WAKANDA FOREVER!", 2000, false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    riri = sprites.create(assets.image`riri`, SpriteKind.Guard)
    okoye = sprites.create(assets.image`okoye`, SpriteKind.Guard)
    controller.moveSprite(okoye, -68, -58)
    namor.setPosition(148, 2)
    info.changeLifeBy(-1)
})
let okoye: Sprite = null
let riri: Sprite = null
let namor: Sprite = null
let shuri: Sprite = null
game.showLongText("When game begins, press the ARROW KEYS to move Shuri, Okoye and Riri. If Namor catches you, you will lose points! ", DialogLayout.Full)
scene.setBackgroundImage(assets.image`wakanda`)
shuri = sprites.create(assets.image`shuri`, SpriteKind.Player)
controller.moveSprite(shuri)
shuri.setStayInScreen(true)
namor = sprites.create(assets.image`namor`, SpriteKind.Enemy)
namor.setPosition(148, 2)
namor.follow(shuri, 30)
controller.moveSprite(riri, 34, -53)
