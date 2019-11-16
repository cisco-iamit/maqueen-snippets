# Code snippets for BBC Microbit + Maqueen

## Get started

You need to open a code editor on https://makecode.microbit.org and then click "New Project".

At the top, switch to JavaScript. You can always use Blocks editor to help you visualise what you are doing if you are new to JavaScript.

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

## Events

```
basic.forever(function () {

    input.onButtonPressed(Button.A, function () {
        basic.showString("Hello!")
    });

    input.onButtonPressed(Button.B, function () {
        basic.showString("Bye!")
    });

})
```