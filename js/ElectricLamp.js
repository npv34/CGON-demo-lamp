class ElectricLamp {
    constructor() {
        this.status = false;
    }

    turnOn() {
        this.status = true;
    }

    turnOff() {
        this.status = false;
    }

    getStatus() {
        return this.status;
    }
}
