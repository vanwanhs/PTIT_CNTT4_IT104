function handleUniontype(value) {
    if (typeof value === "string") {
        const length = value.length;
        console.log(`${value} => Output: ${length} ký tự`);
    }
    else if (typeof value === "number") {
        if (value % 2 === 0) {
            console.log(`${value}: là số chẵn`);
        }
        else {
            console.log(`${value}: là số lẻ`);
        }
    }
    else {
        console.log("Số này không hợp lệ !");
    }
}
handleUniontype(123);
handleUniontype("123anh");
