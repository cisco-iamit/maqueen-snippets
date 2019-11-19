let BLUE = 0
let GREEN = 0
let RED = 0
let item: neopixel.Strip = null
item = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
basic.forever(() => {
    RED = 0
    GREEN = 0
    BLUE = 255
    for (let i = 0; i < 255; i++) {
        RED += 1
        BLUE += -1
        item.showColor(neopixel.rgb(RED, GREEN, BLUE))
        basic.pause(1)
    }
    for (let i = 0; i < 255; i++) {
        GREEN += 1
        RED += -1
        item.showColor(neopixel.rgb(RED, GREEN, BLUE))
        basic.pause(1)
    }
    for (let i = 0; i < 255; i++) {
        BLUE += 1
        GREEN += -1
        item.showColor(neopixel.rgb(RED, GREEN, BLUE))
        basic.pause(1)
    }
})
