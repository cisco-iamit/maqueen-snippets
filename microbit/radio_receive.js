radio.setGroup(1)
radio.onReceivedString(receivedString => {
    basic.showString(receivedString)
})
