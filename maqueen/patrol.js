let mode = "left";

input.onButtonPressed(Button.A, () => {
    mode = "left";
});

input.onButtonPressed(Button.B, () => {
    mode = "right";
});

basic.forever(() => {

    let left = maqueen.readPatrol(maqueen.Patrol.PatrolLeft);
    let right = maqueen.readPatrol(maqueen.Patrol.PatrolRight);

    if (mode == "left") {
        basic.showString(left.toString());
    }
    else if (mode == "right") {
        basic.showString(right.toString());
    }
    else {
        basic.showString("incorrect mode");
    }

})
