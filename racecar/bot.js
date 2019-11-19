// this will run on a microbit on a bot

let commandArr = []
let accelerationOn = null
let directionCW = null
let maqueenDirection = null
let turnDirection = null

radio.setGroup(1)

radio.onReceivedString(rawCommand => {
    commandArr = rawCommand.split(';')
    accelerationOn = commandArr[0]
    directionCW = commandArr[1]
    turnDirection = commandArr[2]

    if (accelerationOn == "1") {
        if (directionCW == "1") {
            maqueenDirection = Maqueen.Dir.CW
        }
        else {
            maqueenDirection = Maqueen.Dir.CCW
        }

        if (turnDirection == "0") {
            Maqueen.MotorRun(Maqueen.Motors.All, maqueenDirection, 255)
        }
        else if (turnDirection == "1") {
            Maqueen.MotorRun(Maqueen.Motors.M1, maqueenDirection, 100)
            Maqueen.MotorRun(Maqueen.Motors.M2, maqueenDirection, 255)
        }
        else if (turnDirection == "2") {
            Maqueen.MotorRun(Maqueen.Motors.M1, maqueenDirection, 255)
            Maqueen.MotorRun(Maqueen.Motors.M2, maqueenDirection, 100)
        }
        else {
            Maqueen.MotorStop(Maqueen.Motors.All)
        }

    }
    else {
        Maqueen.MotorStop(Maqueen.Motors.All)
    }
})
