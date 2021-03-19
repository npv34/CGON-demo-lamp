class SwitchButton {
    constructor() {
        this.status = false;
    }

    connectToLamp(ElectricLamp) {
        this.lamp = ElectricLamp;
    }

    switchOff(){
        this.status = false;
        this.lamp.turnOff();
    }

    switchOn() {
        this.status = true;
        this.lamp.turnOn();

    }
}
