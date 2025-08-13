function checkCondition<T extends boolean>(value:T):void{
    if(value) console.log("Hello");
    else console.log("Bye");
}
const bai2 :boolean = true;
checkCondition(bai2);