let directionCW = 0
let accelerationOn = 0
let turnDirection = 0

let ax = null
radio.setGroup(1)

// toggle forward/reverse
input.onButtonPressed(Button.A, function () {
    if (directionCW === 1) {
        directionCW = 0
    }
    else {
        directionCW = 1
    }
})

basic.forever(function () {
    ax = input.acceleration(Dimension.X)

    // determine the turn direction
    if (ax < -100) {
        // turn left
        turnDirection = 1
    } else if (ax > 100) {
        // turn right
        turnDirection = 2
    } else {
        // no turn
        turnDirection = 0
    }

    // Stop: True/False
    // CW: true/false
    // TurnDirection: 1/2/0

    if (input.buttonIsPressed(Button.B)) {
        accelerationOn = 1
    }
    else {
        accelerationOn = 0
    }

    radio.sendString(
        accelerationOn.toString() + ";" + directionCW + ";" + turnDirection.toString()
    )
})
