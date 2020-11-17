radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        dfplayer.folderPlay(1, 1, dfplayer.yesOrNot.type1)
    } else if (receivedNumber == 2) {
        dfplayer.folderPlay(1, 2, dfplayer.yesOrNot.type1)
    } else if (receivedNumber == 3) {
        dfplayer.execute(
        dfplayer.playType.type2
        )
    }
})
dfplayer.MP3_setSerial(SerialPin.P1, SerialPin.P2)
dfplayer.setVolume(22)
dfplayer.execute(
dfplayer.playType.type2
)
radio.setGroup(20)
