basic.forever(function () {
    basic.showIcon(IconNames.Duck)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . # # . .
        # # # . .
        . # # # #
        . # # # .
        `)
    basic.pause(100)
})
