let durationMin = 1
let durationMax = 4
let directions = ["L", "R", "F", "B", "S"]

basic.forever(function () {
    radio.setGroup(1);
    let duration = Math.randomRange(durationMin, durationMax) * 1000;
    let direction = directions[Math.randomRange(0, directions.length - 1)];
    basic.showString(direction);
    radio.sendString(direction);
    basic.pause(duration);
    basic.clearScreen();
})
