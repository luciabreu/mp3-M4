radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        dfplayer.folderPlay(1, 1, dfplayer.yesOrNot.type1)
    } else if (receivedNumber == 2) {
        dfplayer.folderPlay(1, 2, dfplayer.yesOrNot.type1)
    } else if (receivedNumber == 3) {
        dfplayer.folderPlay(1, 3, dfplayer.yesOrNot.type1)
    } else if (receivedNumber == 4) {
        dfplayer.folderPlay(1, 4, dfplayer.yesOrNot.type1)
    } else if (receivedNumber == 5) {
        dfplayer.folderPlay(1, 5, dfplayer.yesOrNot.type1)
    } else if (receivedNumber == 6) {
        dfplayer.folderPlay(2, 1, dfplayer.yesOrNot.type1)
    } else if (receivedNumber == 7) {
        dfplayer.folderPlay(2, 2, dfplayer.yesOrNot.type1)
    } else if (receivedNumber == 8) {
        dfplayer.folderPlay(2, 3, dfplayer.yesOrNot.type1)
    } else if (receivedNumber == 9) {
        dfplayer.folderPlay(3, 1, dfplayer.yesOrNot.type1)
    }
})
radio.onReceivedValue(function (name, value) {
    if (name == "ship") {
        if (value == 1) {
            dfplayer.folderPlay(4, 1, dfplayer.yesOrNot.type1)
        } else if (value == 3) {
            dfplayer.folderPlay(4, 2, dfplayer.yesOrNot.type1)
        } else if (value == 4) {
            dfplayer.folderPlay(4, 3, dfplayer.yesOrNot.type1)
        }
    }
})
dfplayer.MP3_setSerial(SerialPin.P1, SerialPin.P2)
dfplayer.setVolume(22)
dfplayer.execute(
dfplayer.playType.type2
)
radio.setGroup(31)
