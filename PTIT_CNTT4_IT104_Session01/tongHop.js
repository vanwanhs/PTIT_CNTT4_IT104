class S{
    constructor(id,n,a,s){
        this.id=id;
        this.n=n;
        this.a=a;
        this.s=s;
    }
    avg(){
        return this.s.reduce((t,x)=>t+x,0)/this.s.length;
    }
}

const s1=new S("SV01","An",20,[8,7,9]);
const s2=new S("SV02","Bình",21,[9,9,8]);
const s3=new S("SV03","Cường",19,[6,7,6]);
const s4=new S("SV04","Dũng",22,[7,8,7]);
const s5=new S("SV05","Hà",20,[10,9,10]);

const ls=[s1,s2,s3,s4,s5];

const getById=(ls,id)=>ls.find(x=>x.id===id)||null;

const getTop=ls=>{
    let m=Math.max(...ls.map(x=>x.avg()));
    return ls.filter(x=>x.avg()===m);
};

const getAvg=ls=>ls.reduce((t,x)=>t+x.avg(),0)/ls.length;

const getRange=(ls,min,max)=>ls.filter(x=>{
    let a=x.avg();
    return a>=min&&a<=max;
});

const sortName=ls=>[...ls].sort((a,b)=>a.n.localeCompare(b.n));

console.log(getById(ls,"SV03"));
console.log(getTop(ls));
console.log(getAvg(ls).toFixed(2));
console.log(getRange(ls,7,9));
console.log(sortName(ls));
