interface ChangeSpeed {
    speedUp(amount: number): void;
    slowDown(amount: number): void;
    stop(): void;
}

class Vehicle implements ChangeSpeed {
    private speed: number;

    constructor() {
        this.speed = 0;
    }

    public speedUp(amount: number): void {
        this.speed += amount;
        console.log(`Tốc độ hiện tại: ${this.speed} km/h`);
    }

    public slowDown(amount: number): void {
        this.speed -= amount;
        if (this.speed < 0) {
            this.speed = 0;
        }
        console.log(`Tốc độ hiện tại: ${this.speed} km/h`);
    }

    public stop(): void {
        this.speed = 0;
        console.log(`Phương tiện đã dừng. Tốc độ hiện tại: ${this.speed} km/h`);
    }
}

const myVehicle = new Vehicle();

myVehicle.speedUp(30);   
myVehicle.speedUp(20);  
myVehicle.slowDown(15);  
myVehicle.stop();