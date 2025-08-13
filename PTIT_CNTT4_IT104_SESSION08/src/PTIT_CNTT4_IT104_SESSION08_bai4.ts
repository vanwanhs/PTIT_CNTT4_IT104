function mergeObjects<T,U>(obj1:T,obj2:U):T & U{
    return {...obj1, ...obj2};
}
const person = {name: "Anh", age: 10};
const job = {titel: "Bag", dress: "Hà Tây"};

const merge = mergeObjects(person,job);
console.log(merge);
