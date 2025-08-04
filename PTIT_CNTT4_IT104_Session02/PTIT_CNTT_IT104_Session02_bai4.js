const checkElement = (arr, element) => {
   if(!Number.isFinite(element)){
        console.log(`${element} not is number`);
        return;
    }
    for (const item of arr){
        if (item === element){
            console.log(`${element}: true`);
            return 0;
        }  
    }
    console.log(`${element}: false`);
}
checkElement([1,2,3,4,5,6],3);
checkElement([5,6,7],3)