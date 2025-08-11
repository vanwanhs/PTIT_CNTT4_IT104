class Job {
    constructor(type) {
        this.type = type;
    }
    printType() {
        return this.type;
    }
}
class PartimeJob extends Job {
    constructor(type, workingHour) {
        super(type);
        this.workingHour = workingHour;
    }
    calculateSalary() {
        return this.workingHour * 30000;
    }
}
class FulltimeJob extends Job {
    constructor(type) {
        super(type);
    }
    calculateSalary() {
        return 10000000;
    }
}
const partime1 = new PartimeJob("part-time", 100);
const fulltime1 = new FulltimeJob("full - time");
console.log(`Tiền lương của Anh A ${partime1.calculateSalary()}`);
console.log(`Tiền lương của Anh B ${fulltime1.calculateSalary()}`);
