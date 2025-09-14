function getDataFormApi1(callback){
    setTimeout(()=>{
        console.log("Lấy ipi1 thành công ");
        callback()
    },1000)
}
function getDataFormApi2(callback) {
    setTimeout(()=>{
        console.log("Lấy ipi2 thành công ");
        callback()
    },1000)
}
function getDataFormApi3(callback) {
    setTimeout(()=>{
        console.log("Lấy ipi3 thành công ");
        
    },1000)
}
function runAllTask(){
    getDataFormApi1(()=>{
        getDataFormApi2(()=>{
            getDataFormApi3();
        })
    })
}
runAllTask()