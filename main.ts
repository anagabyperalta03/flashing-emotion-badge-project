input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        basic.showIcon(IconNames.Asleep)
        basic.pause(200)
        basic.clearScreen()
        basic.pause(200)
    }
})
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # . # .
            . . # . .
            `)
        basic.pause(200)
        basic.clearScreen()
        basic.pause(200)
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 4; index++) {
        basic.showIcon(IconNames.Giraffe)
        basic.pause(200)
        basic.clearScreen()
        basic.pause(200)
    }
})
