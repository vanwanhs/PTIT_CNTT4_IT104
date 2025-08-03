const check = (a) => {
    if(!Number.isFinite(a)){
        console.log(`${a} not is number`);
        return;
    }
    console.log(a%2 === 0 ? `${a} is a even number` : `${a} is odd`);
    
}
check('abc');
check(1);
check(10);