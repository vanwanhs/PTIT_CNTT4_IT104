abstract class Job {
    type: string;
    constructor(type:string){
        this.type = type;
    }
    public printType():string{
        return this.type
    }
    public abstract calculateSalary(): number;
}
class PartimeJob extends Job{
    private workingHour: number;
    constructor (type:string, workingHour:number){
        super(type);
        this.workingHour = workingHour;
    }
    public calculateSalary(): number {
        return  this.workingHour * 30000;
    }
}
class FulltimeJob extends Job{
    constructor(type:string){
        super(type);
    }
    public calculateSalary(): number {
        return 10000000;
    }
}

const partime1 = new PartimeJob ("part-time",100);
const fulltime1 = new FulltimeJob ("full - time");
console.log(`Tiền lương của Anh A ${partime1.calculateSalary()}`);
console.log(`Tiền lương của Anh B ${fulltime1.calculateSalary()}`);

