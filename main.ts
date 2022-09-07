input.onButtonPressed(Button.A, function () {
    väg = 0
})
input.onButtonPressed(Button.B, function () {
    väg = 3
})
let väg = 0
väg = 3
basic.forever(function () {
    while (bitbot.sonar(BBPingUnit.Centimeters) == 7) {
        väg = 3
        basic.pause(100)
        bitbot.rotatems(BBRobotDirection.Left, 100, 1000)
        basic.pause(200)
        väg = 1
        basic.pause(100)
        väg = 0
    }
})
basic.forever(function () {
    if (väg == 1) {
        bitbot.go(BBDirection.Forward, 60)
    }
})
basic.forever(function () {
    if (väg == 0) {
        bitbot.go(BBDirection.Forward, 60)
    }
})
basic.forever(function () {
    if (väg == 3) {
        bitbot.stop(BBStopMode.Coast)
    }
})
