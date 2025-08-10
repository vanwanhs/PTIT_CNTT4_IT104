class Vehicle{
    public readonly id: number;
    public name: string;
    protected year:number;
    private companyb2: string;

    constructor(id:number,name:string,year:number,companyb2:string){
        this.id = id;
        this.name = name;
        this.year = year;
        this.companyb2 = companyb2;
    }
    public display():void{
        console.log(`
            Id: ${this.id}
            Name: ${this.name}
            Year: ${this.year}
            Company: ${this.companyb2}
            `);
    }
}
const vehicle1 = new Vehicle(1,"HL",2026,"PTIT Crop");
console.log(vehicle1);

