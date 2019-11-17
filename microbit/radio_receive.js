radio.setGroup(1)
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
