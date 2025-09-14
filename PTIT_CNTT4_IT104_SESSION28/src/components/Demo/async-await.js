function getDataFormApi1(){
    return new Promise((res,reject)=>{
        setTimeout(()=>{
            console.log("Data retrieved successfully");
            
            res();
        },1000)
    })
}
function getDataFormApi2(){
    return new Promise((res,reject)=>{
        setTimeout(()=>{
            console.log("Data retrieved successfully 2");
            res();
        },1000)
    })
}
function getDataFormApi3(){
    return new Promise((res,reject)=>{
        setTimeout(()=>{
            console.log("Data retrieved successfully 3");
            
            res();
        },1000)
    })
}
async function runAllTask() {
    try{
        await getDataFormApi1();
        await getDataFormApi2();
        await getDataFormApi3();
    } catch (error){
        console.log("Error",error);
        
    }
}
runAllTask()