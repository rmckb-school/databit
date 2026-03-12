radio.setGroup(48)
basic.forever(function () {
    basic.pause(100)
    radio.sendValue("temp", input.temperature())
    basic.pause(100)
    radio.sendValue("sound", pins.analogReadPin(AnalogReadWritePin.P3))
    basic.pause(100)
    if (pins.digitalReadPin(DigitalPin.P13) == 1) {
        radio.sendValue("motion", 1)
    } else {
    	
    }
})
