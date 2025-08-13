function mergeObjects(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
const person = { name: "Anh", age: 10 };
const job = { titel: "Bag", dress: "Hà Tây" };
const merge = mergeObjects(person, job);
console.log(merge);
