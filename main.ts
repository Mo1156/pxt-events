let Taco = sprites.create(img`
. . . . . . . . . . . . . . e e e e e e e . . . . . . . . . . . 
. . . . . . . . . . . . e e 4 5 5 6 6 2 e 2 e . . . . . . . . . 
. . . . . . . . . . e e 4 5 5 5 6 7 2 3 e 2 6 8 8 . . . . . . . 
. . . . . . . . . e 4 6 7 5 2 2 2 2 2 3 2 e 7 7 7 6 6 8 . . . . 
. . . . . . . . e 4 6 5 5 5 2 3 3 2 7 2 2 2 7 7 7 6 7 7 8 . . . 
. . . . . . . 4 4 4 8 5 5 5 2 3 2 2 7 7 7 6 6 7 7 7 6 7 8 . . . 
. . . . . . 4 5 2 2 5 5 5 7 7 7 7 6 7 7 7 7 6 6 6 7 6 6 6 8 . . 
. . . . . 4 5 2 3 2 5 7 5 6 6 7 2 2 e 6 6 6 e e e e e 8 8 8 . . 
. . . . 4 5 5 2 3 2 e 7 6 6 7 2 3 2 2 e 4 5 5 5 d d d d 4 8 . . 
. . . 4 4 5 6 7 7 7 7 5 5 4 6 2 3 e 4 5 5 d d d d d d d d d 4 . 
. . . e 6 6 7 7 4 2 5 4 4 7 7 e 4 5 5 d d d d 5 5 5 5 4 d d 4 4 
. . e 4 6 7 7 7 2 2 2 6 7 7 e 5 5 d d 5 5 5 5 5 d 5 5 d d d d 4 
. . e 5 6 6 8 6 3 2 3 6 6 e 5 d d 5 5 5 5 5 5 5 5 5 5 5 5 d d e 
. e 4 5 5 4 4 e 3 2 2 6 e 5 d 5 5 5 5 5 4 5 5 5 5 5 5 5 5 5 d e 
. e 5 5 4 e e e e 6 6 e 5 d 5 5 5 5 d 5 5 5 5 5 d d d d 5 4 d e 
. e 5 5 e e 4 4 f e e 5 d 5 d 5 5 5 5 5 5 d 5 d 5 d d d d d d e 
e 4 5 4 e e e e f e 4 5 d 5 5 5 5 5 5 5 5 5 5 5 d d 4 d d d e . 
e 5 e 4 e e f f f e 5 d 5 5 5 5 5 5 5 5 d 5 5 5 5 d d d d e . . 
e 5 e e 4 e e f f 4 5 d 5 5 5 5 5 5 5 5 5 5 5 5 d d d d e . . . 
e 5 e e e e f f e 5 d 5 5 d 5 5 5 d 5 5 5 5 d 5 d d d e . . . . 
e 5 f f e f e e e 5 d 5 5 5 4 5 5 5 5 5 5 5 d d d 4 e . . . . . 
e 5 f f f f f f e 5 4 5 5 5 5 5 5 5 d 5 d 4 d d e e . . . . . . 
e 5 4 e f e f f 4 5 d 5 5 d 5 5 5 5 5 d d d d e . . . . . . . . 
e 5 e e e f f e 5 d d 5 5 5 5 5 4 5 d d d e e . . . . . . . . . 
e 4 e e e f f f 5 d 5 5 5 5 d 5 5 d d d e . . . . . . . . . . . 
e 4 e f e f f f 5 d 5 d 5 5 5 5 5 d 4 e . . . . . . . . . . . . 
. e 4 e f f f e 5 d 5 5 5 5 5 5 d e e . . . . . . . . . . . . . 
. e 5 4 e e e e 5 d 5 4 5 d d 4 e . . . . . . . . . . . . . . . 
. . e 5 5 4 e e 5 d d d d d e e . . . . . . . . . . . . . . . . 
. . . e e 5 5 4 4 d d d e e . . . . . . . . . . . . . . . . . . 
. . . . . e e e e e e e . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
Taco.setPosition(50, 19)
let ck = sprites.create(img`
. . 2 2 b b b b b . . . . . . . 
. 2 b 4 4 4 4 4 4 b . . . . . . 
2 2 4 4 4 4 d d 4 4 b . . . . . 
2 b 4 4 4 4 4 4 d 4 b . . . . . 
2 b 4 4 4 4 4 4 4 d 4 b . . . . 
2 b 4 4 4 4 4 4 4 4 4 b . . . . 
2 b 4 4 4 4 4 4 4 4 4 e . . . . 
2 2 b 4 4 4 4 4 4 4 b e . . . . 
. 2 b b b 4 4 4 b b b e . . . . 
. . e b b b b b b b e e . . . . 
. . . e e b 4 4 b e e e b . . . 
. . . . . e e e e e e b d b b . 
. . . . . . . . . . . b 1 1 1 b 
. . . . . . . . . . . c 1 d d b 
. . . . . . . . . . . c 1 b c . 
. . . . . . . . . . . . c c . . 
`, SpriteKind.Player)
ck.setPosition(38, 24)
let pizza = sprites.create(img`
. . . . . . . . . . . . . b e e b b b b . . . . . . . . . . . . 
. . . . . . . . . . . . e e b b b b 4 b b . . . . . . . . . . . 
. . . . . . . . . . . . e b 3 4 4 b b 4 b b . . . . . . . . . . 
. . . . . . . . . . . . e 4 4 3 3 4 b b 4 b b . . . . . . . . . 
. . . . . . . . . . . . e b 4 3 3 3 4 4 b 4 b e . . . . . . . . 
. . . . . . . . . . . . 4 e b 4 3 3 4 4 4 4 4 b e . . . . . . . 
. . . . . . . . . . . b d 4 e b 4 3 3 3 3 3 4 4 b b . . . . . . 
. . . . . . . . . . b 4 5 5 d 4 4 4 3 3 3 3 4 4 4 b b . . . . . 
. . . . . . . . . . 4 d 5 5 5 5 d 4 4 4 3 3 3 4 4 4 b b . . . . 
. . . . . . . . . 4 5 5 5 5 5 5 d d 4 b 4 4 4 3 4 4 4 b e . . . 
. . . . . . . . b d 5 5 5 5 d 5 5 5 d 4 b b 4 4 4 4 4 4 e e . . 
. . . . . . . . b 5 5 d d d 6 6 5 5 5 5 b b 4 b 4 4 4 4 4 e e . 
. . . . . . . b d 5 5 5 5 6 7 7 6 5 5 5 5 4 e b b 4 4 4 4 4 e b 
. . . . . . . 4 3 2 2 2 5 5 8 8 5 5 5 5 5 d 4 e e b 4 4 b 4 e e 
. . . . . . b 4 2 2 3 3 2 d d d 5 5 5 2 2 2 d 4 e e b b b 4 b e 
. . . . . . b e 2 2 2 3 2 e d 5 5 5 2 2 3 3 2 d b 4 e b b b b e 
. . . . . b d e 2 2 2 2 2 e 5 5 5 e 2 2 2 3 2 e d d 4 b b b b e 
. . . . . b 5 2 e 2 2 2 e 3 5 5 5 e 2 2 2 2 2 e d d d 4 e b e e 
. . . . b d 5 5 2 e e e 3 5 5 5 5 2 e 2 2 2 e 3 5 5 5 4 4 e e e 
. . . . 6 6 5 d d 5 5 5 5 5 5 5 5 5 2 e e e 3 5 5 d d 4 d e e e 
. . . 6 7 7 6 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 1 5 5 4 d 4 e e 
. . . 4 8 8 5 2 2 2 5 5 5 d d d d 6 6 5 5 5 5 1 5 4 4 d 4 e e e 
. . b 4 5 5 2 2 3 3 2 5 5 5 d d 6 7 7 6 1 1 d 4 4 4 d d e e e . 
. . 4 d 5 2 2 2 2 3 2 e 5 5 5 5 5 8 8 1 d 4 4 d d d 4 e e e . . 
. b d d 5 e 2 2 2 2 2 e 5 5 5 1 1 5 1 1 4 d 5 4 d 4 e e . . . . 
. b 5 5 d 2 e 2 2 2 e 3 5 1 1 4 4 d 1 d 5 5 e e e e . . . . . . 
b d 5 d d d 2 e e e 3 d 4 4 4 5 5 5 d d 4 e . . . . . . . . . . 
b 5 5 5 1 1 5 d d d d 5 5 d 5 4 4 e e d e . . . . . . . . . . . 
4 5 1 1 d 4 4 4 d 5 5 4 4 e e . . . 4 d e . . . . . . . . . . . 
4 1 d 4 5 5 5 d 4 e e . . . . . . . . 4 4 . . . . . . . . . . . 
4 1 5 5 4 e e d e . . . . . . . . . . . . . . . . . . . . . . . 
4 4 e e . . . 4 e . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
pizza.setPosition(18, 48)
let mySprite2 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
Taco.setPosition(0, 0)
let mySprite3 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
Taco.setPosition(0, 0)
let mySprite4 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
Taco.setPosition(0, 0)
let mySprite5 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
Taco.setPosition(0, 0)
