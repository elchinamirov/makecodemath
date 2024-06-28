let a = 0
let b = 0
let c = 0
let D = 0
let x1 = 0
let x2 = 0
basic.forever(function () {
    a = 1
    b = 4
    c = 4
    D = b ** 2 - 4 * a * c
    if (D > 0) {
        x1 = (-1 * b + Math.sqrt(D)) / (2 * a)
    } else if (D == 0) {
        x1 = -1 * b / (2 * a)
        x2 = x1
    } else {
        basic.showString("helli yoxdur")
    }
    basic.showNumber(x1)
    basic.showNumber(x2)
})
