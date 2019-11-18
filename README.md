# Code snippets for BBC Microbit + Maqueen

## Get started

This basic block of code allows to run your program indefinitely:

```javascript
basic.forever(function () {
	// your code will be here!
})
```

This is helpful if you want to continue doing different things, like flashing a light or make a robot go in a particular direction.

## Displaying text

```javascript
basic.forever(function () {
	basic.showString("Hello!")
})
```

## Examples with doggo

```javascript
// these are variables
let name = "Doggo"
let friend = "Alex"

// this is an event definition
// function(){} is a called an anonymous function
// it is basically a piece of code that runs when certain event fires
input.onButtonPressed(Button.A, function () {
    basic.showString("Woof")
    basic.pause(3000)
})

// this is another event
// events occur independently of your program flow
// imagine your friend calling you unexpectedly:
// that is an event
input.onButtonPressed(Button.B, function () {
    meet("Alex")
})

// this is a function that accepts an argument
function meet(person: string) {
    // the dog would only greet a friend
    if (person === friend) {
        basic.showString("Hi " + person)
    }
    // and it would be hostile to somebody it doesn't know
    else {
        basic.showString("Arggh")
    }
}

basic.forever(function () {
    basic.showIcon(IconNames.Happy)
})
```