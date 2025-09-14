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
function runAllTask(){
    getDataFormApi1()
    .then(()=>(
        getDataFormApi2()
    ))
    .then(()=>(
        getDataFormApi3()
    ))
    .then(()=>console.log("Tất cả các tác vụ đã được hoàn thành")
    )
    .catch((error)=>{
        console.log("Lỗi",error);
    })
}
runAllTask()