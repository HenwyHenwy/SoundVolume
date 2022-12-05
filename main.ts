input.onButtonPressed(Button.A, function () {
    music.setVolume(music.volume() + 1)
})
input.onButtonPressed(Button.B, function () {
    music.setVolume(music.volume() - 1)
})
basic.forever(function () {
    music.playMelody("E B C5 A B G A F ", 120)
    music.playMelody("E B C5 A B G A F ", 120)
    music.playMelody("E B C5 A B G A F ", 120)
    music.playMelody("E B C5 A B G A F ", 120)
})
